MBTI 93 题标准版测评系统｜开发落地文档（Markdown｜直接导入 Trae）
项目名称：MBTI Step-I 93 题测评 + 计分引擎 + RAG 智能解析报告 适用：后端开发、建库、接口、RAG 知识库部署、前端约束，全规则落地 量表基准：CPP 官方 Step-I 中文版 93 题二选一量表，A/B 二元计分模式
目录
1.整体业务架构
2.数据库三表设计规范
3.题库维度划分 & 字段规则
4.后端计分算法（伪代码 + 硬编码规则）
5.答卷有效性校验规则（后端强制拦截）
6.人格分型判定规则（边界维度处理）
7.RAG 知识库接入全规范（入库 + 切片 + Prompt + 检索逻辑）
8.前端展示 & 免责文案固定配置
9.JSON 题库标准格式（入库样例）
1. 整体业务架构
plaintext
前端答题页 → 用户提交答案数组 → 后端计分引擎计算8项原始分数 → 四维度分型判定（含边界标记）→
分型参数入参RAG接口 → RAG向量库+关键词检索权威资料 → 拼接生成测评报告 → 返回前端渲染
计分模式：默认A/B 二选一计分（选对应选项 + 1 分）；预留拓展：5 级李克特 1~5 分打分配置开关
RAG 数据源准入：荣格《心理类型》、MBTI 官方 CPP 手册、高校心理教材、16 型原版特质文档；禁止网红玄学、婚恋宿命、娱乐自媒体文案入库
2. 数据库三表设计规范
表 1：mbti_question（题库主表｜1~93 题号）
表格
字段名	数据类型	字段注释	枚举约束
q_id	INT PRIMARY KEY	题号 1~93，自增唯一	不可重复
title	VARCHAR(512)	题目正文描述	非空
dim_main	CHAR(2)	所属一级维度	EI/SN/TF/JP 四选一
opt_a	VARCHAR(256)	A 选项文案	非空
score_a	CHAR(1)	选 A 加分字母	E/I/S/N/T/F/J/P 八选一
opt_b	VARCHAR(256)	B 选项文案	非空
score_b	CHAR(1)	选 B 加分字母	E/I/S/N/T/F/J/P 八选一
表 2：mbti_user_answer（用户原始答卷表）
表格
字段名	数据类型	注释
answer_id	BIGINT PK	答卷唯一 ID
user_id	BIGINT	用户 ID，未登录为 0
ans_arr	TEXT	答案数组，["A","B","A"...]下标对应 1~93 题
create_time	DATETIME	提交时间戳
cost_sec	INT	答题耗时 (秒)
is_valid	TINYINT	0 无效答卷 /1 有效答卷
表 3：mbti_score（得分结果存储表）
表格
字段名	数据类型	注释
answer_id	BIGINT FK	关联答卷 ID
E/I/S/N/T/F/J/P	SMALLINT	8 个维度原始总分
mbti_type	VARCHAR(10)	4 字母型号，边界格式E/I S T J
border_flag	TINYINT	0 无边界 /1 存在任意边界维度
3. 题库维度划分 & 字段规则
3.1 93 题维度题量分配（固定不可改动）
EI（E 外向 / I 内向）：23 题
SN（S 实感 / N 直觉）：24 题
TF（T 理性 / F 感性）：23 题
JP（J 计划 / P 随性）：23 题
3.2 题目编码规则
1.单题仅归属一个主维度，不跨多维度；
2.正向 / 反向通过score_a、score_b实现：A=E 则 B=I、A=S 则 B=N，无需后端负分计算；
3.题目全量打乱穿插排布，禁止同维度题目连续 5 题以上，降低惯性作答误差。
4. 后端计分算法（伪代码 + 硬编码规则）
python
运行
# 初始化8维度分数
score = {"E":0,"I":0,"S":0,"N":0,"T":0,"F":0,"J":0,"P":0}# ans_list：用户答案数组，长度固定93for idx in range(93):
    q = db.query("select score_a,score_b from mbti_question where q_id = ?", idx+1)
    select_opt = ans_list[idx]
    if select_opt == "A":
        score[q.score_a] += 1
    else:
        score[q.score_b] += 1
# 维度对比函数：临界差值固定=6def calc_type(pos,neg,pos_score,neg_score,limit=6):
    diff = abs(pos_score - neg_score)
    if diff > limit:
        return (pos if pos_score>neg_score else neg, False)
    else:
        return (f"{pos}/{neg}", True)
# 四个维度批量计算
ei_type,ei_border = calc_type("E","I",score["E"],score["I"])
sn_type,sn_border = calc_type("S","N",score["S"],score["N"])
tf_type,tf_border = calc_type("T","F",score["T"],score["F"])
jp_type,jp_border = calc_type("J","P",score["J"],score["P"])

final_type = ei_type+sn_type+tf_type+jp_type
has_border = ei_border or sn_border or tf_border or jp_border
固定阈值：同维度分差＜6 分 = 边界摇摆维度，border_flag=1；≥6 为确定倾向。
5. 答卷有效性校验规则（后端强制拦截）
表格
校验项	判定标准	处理逻辑
作答时长	93 题耗时＜90 秒	is_valid=0，拒绝生成报告，前端提示「答题过快，结果无效」
中立泛滥 (5 分拓展版)	全卷＞40% 选项选 3 (中立)	is_valid=1，报告备注：作答犹豫，参考度偏低
答案矛盾校验	同维度正反极端选择（一题全 A、对应反向题全 B）	前端弹窗提醒复核，不直接作废
6. 人格分型判定规则（边界维度处理）
1.无边界（全维度差值≥6）：输出纯四字母，例：INFP、ESTJ；
2.单 / 多维度边界：斜杠分隔写法，例：E/I S T P、E/I S/N F P；
3.RAG 入参区分 
o标准 4 字母：仅检索该型号知识库文档；
o含斜杠边界：同时检索斜杠两端两个维度知识库内容，混合生成解读。
7. RAG 知识库接入全规范（入库 + 切片 + Prompt + 检索逻辑）
7.1 知识库准入白名单 & 黑名单
✅允许入库文档：
1.荣格《心理类型》简体中文译本原文
2.MBTI 官方 Step-I 手册中文译本
3.国内高校心理学教材人格章节、正规心理研究所文献
4.16 型原版八维、核心特质、短板、职场、情感官方说明文档
❌禁止入库：网红博主自创性格、宿命论、婚恋算命、娱乐段子、自媒体非正规内容。
7.2 文档切片标签规范
文档拆分元标签格式：{人格型号}_{内容模块} 模块枚举：core(核心特质)/work(职场)/emotion(情感)/cognitive(八维)/disadvantage(短板) 示例：INFP_core、ESTJ_work、ISFJ_emotion
7.3 RAG 系统固定 Prompt（写入系统提示词，防 AI 幻觉）
plaintext
【硬性约束】
1. 所有输出内容仅引用知识库已有原文，知识库无内容统一回复「暂无对应权威参考内容」，禁止AI编造性格结论；
2. 入参含E/I、S/N等边界型号时，同时调取两端维度资料综合描述；
3. 禁止玄学、命运、命理、宿命相关话术，测评仅做性格参考，不能作为心理诊疗、择业、婚恋判定依据；
4. 优先引用迈尔斯、荣格原著及CPP官方资料，剔除网传娱乐化内容。
7.4 检索策略
混合检索：向量检索 (70%)+BM25 关键词检索 (30%)，优先召回带型号标签文档；
缓存：热门 16 型报告结果 Redis 缓存，TTL=24h，减少重复检索开销。
8. 前端展示 & 免责文案固定配置
测评报告头部强制固定文案（不可删减修改）： 本测评基于 MBTI 标准化心理量表，结果仅作为性格参考，不可单独作为择业、婚恋、心理疾病诊断依据；维度边缘人群性格随环境、心境可发生变化。
9. JSON 题库标准格式（入库样例，Trae 一键导入）
json
[
    {
        "q_id": 1,
        "title": "外出规划行程，你通常？",
        "dim_main": "JP",
        "opt_a": "提前规划好行程与时间节点",
        "score_a": "J",
        "opt_b": "随性出发，临时决定行程",
        "score_b": "P"
    },
    {
        "q_id": 2,
        "title": "发生观点分歧时你优先？",
        "dim_main": "TF",
        "opt_a": "依托客观逻辑对错判断",
        "score_a": "T",
        "opt_b": "优先顾及对方情绪避免冲突",
        "score_b": "F"
    },
    {
        "q_id": 3,
        "title": "学习课程偏好？",
        "dim_main": "SN",
        "opt_a": "侧重事实、实例落地的内容",
        "score_a": "S",
        "opt_b": "侧重抽象理论、脑洞猜想内容",
        "score_b": "N"
    },
    {
        "q_id": 4,
        "title": "社交过后精力变化？",
        "dim_main": "EI",
        "opt_a": "越社交越亢奋，乐于拓展人脉",
        "score_a": "E",
        "opt_b": "社交疲惫，需要独处恢复能量",
        "score_b": "I"
    }]
