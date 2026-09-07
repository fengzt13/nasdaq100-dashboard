// ============================================================
// 空头观点追踪 · 数据文件 v1.0 (2026-09-07)
// 收录国外知名大佬/机构的看空言论，按逻辑分类 + 兑现状态追踪
// 观点仅客观收录，不代表本站立场，不构成投资建议
// ============================================================
window.BEAR_DATA = {
  meta: {
    title: '空头观点追踪',
    updated: '2026-09-07',
    note: '本页仅客观收录公开报道中的看空言论与逻辑，不代表本站立场，不构成任何投资建议。观点来源均标注出处，兑现状态为后续市场走势的客观记录，非预测。'
  },
  // 逻辑分类
  categories: [
    { id: 'A', name: '估值', desc: '贵不贵：CAPE/席勒PE、市值/GDP、历史分位' },
    { id: 'B', name: '盈利', desc: '赚不赚：盈利增速不可持续、利润率见顶、盈利泡沫' },
    { id: 'C', name: 'AI泡沫', desc: 'AI资本开支军备竞赛、算力投入回报存疑' },
    { id: 'D', name: '流动性/债务', desc: '降息落空、通胀反弹、财政赤字、美债风险' },
    { id: 'E', name: '结构脆弱', desc: '集中度过高、被动资金拥挤、杠杆' },
    { id: 'F', name: '宏观地缘', desc: '关税、地缘冲突、货币政策、黑天鹅' },
    { id: 'G', name: '周期类比', desc: '与2000/1929类比、长期周期论' }
  ],
  // 看空强度
  strengthMap: {
    aggressive: { label: '激进看空', color: '#dc2626' },
    structural: { label: '结构性看空', color: '#d97706' },
    tactical: { label: '战术性看空', color: '#b45309' },
    cautious: { label: '谨慎/降温', color: '#6b7280' }
  },
  // 兑现状态
  statusMap: {
    pending: { label: '待验证', color: '#6b7280' },
    partial: { label: '部分兑现', color: '#d97706' },
    confirmed: { label: '已兑现', color: '#dc2626' },
    failed: { label: '未兑现', color: '#0e9f6e' },
    ongoing: { label: '持续看空', color: '#3b82f6' }
  },
  // 近期看空言论（时间倒序）
  recent: [
    {
      id: 'r01',
      person: '高盛（Peter Oppenheimer 等）',
      role: '全球股票策略主管',
      date: '2026-09-03',
      quote: '未来12个月多数市场的中高个位数回报，将明显低于过去一年已实现的涨幅；全球债市抛售（日/英/德国债收益率齐升）敲响警钟。',
      cats: ['D', 'E'],
      strength: 'cautious',
      target: '美股/全球股市',
      source: '高盛跨资产展望报告（2026-09-03，公开报道）',
      status: 'pending',
      note: '对长期牛市的温和降温而非大幅看空；10年期美债收益率触及2023年来高位，全球收益率同步上行。'
    },
    {
      id: 'r02',
      person: '美国财政部内部报告',
      role: '联邦机构（草案）',
      date: '2026-07-07',
      quote: '对AI市场风险发出警告，称其关键特征与2000年互联网泡沫相提并论。',
      cats: ['C', 'G'],
      strength: 'aggressive',
      target: 'AI相关资产',
      source: '财政部内部报告草案（2026-07-07，媒体披露）',
      status: 'pending',
      note: '草案已完成数周待批准，面向财政部长、美联储主席及监管机构。'
    },
    {
      id: 'r03',
      person: 'Panmure Liberum（Joachim Klement / Francisca Reis）',
      role: '分析师',
      date: '2026-07-07',
      quote: '美股正同时酝酿"价格泡沫"与"盈利泡沫"双重泡沫；以席勒CAPE为基准并将盈利修正至长期正常增速，标普500估值将高达67.6倍，超越美国历史上所有资产泡沫峰值，破裂或引发30%-50%回调。',
      cats: ['A', 'B', 'G'],
      strength: 'aggressive',
      target: '标普500',
      source: 'Panmure Liberum 研报（2026-07-07，华尔街见闻等报道）',
      status: 'pending',
      note: '报告也承认：分析师在判断盈利泡沫顶点方面表现极差，高盈利增长周期往往比预期更久。'
    },
    {
      id: 'r04',
      person: 'Michael Burry（迈克尔·伯里）',
      role: '《大空头》原型、Scion Asset Management',
      date: '2026-07-01',
      quote: '披露新看空押注：做空英伟达、应用材料、特斯拉、卡特彼勒以及iShares半导体ETF（SOXX），认为AI算力基建拥挤交易已至终点。',
      cats: ['C', 'E'],
      strength: 'aggressive',
      target: 'AI算力/半导体股',
      source: 'Burry Substack 披露（2026-07-01，财联社等报道）',
      status: 'pending',
      note: '此前5月已警告AI热潮酷似2000年互联网泡沫破灭前几个月。'
    },
    {
      id: 'r05',
      person: 'Michael Burry（迈克尔·伯里）',
      role: '《大空头》原型',
      date: '2026-05-08',
      quote: 'AI 炒作氛围酷似2000年互联网泡沫破灭前几个月：市场无视经济数据，资金扎堆AI，股价严重脱离基本面。',
      cats: ['C', 'G', 'E'],
      strength: 'aggressive',
      target: 'AI概念/纳指',
      source: 'Burry Substack 文章（2026-05-08，财联社等报道）',
      status: 'pending',
      note: '指出其驾车途中收听的财经节目"完全、不间断地都是AI"。'
    },
    {
      id: 'r06',
      person: 'Jeremy Grantham（杰瑞米·格兰桑）',
      role: 'GMO 联合创始人',
      date: '2026-04-21',
      quote: '我们正经历"美国历史上最大的泡沫"，核心推手是AI；AI概念股股价可能出现70%的暴跌；AI泡沫"不破的概率几乎为零"。',
      cats: ['C', 'A', 'G'],
      strength: 'aggressive',
      target: 'AI概念股/美股',
      source: '播客《The Master Investor Podcast》（2026-04，PANews等报道）',
      status: 'ongoing',
      note: '2021年起持续警告"超级泡沫"，2024年称AI为"泡沫中的泡沫"。'
    },
    {
      id: 'r07',
      person: 'Jim Rogers（吉姆·罗杰斯）',
      role: '量子基金联合创始人',
      date: '2026-02-06',
      quote: '2026年将爆发其一生中见过的最惨烈全球金融危机，比2008年更甚；已清空美股，保留金银铜。逻辑：全球债务失控（美债超38-39万亿美元）+ 资产泡沫 + 货币信用 + 周期共振。',
      cats: ['D', 'A', 'F'],
      strength: 'aggressive',
      target: '全球市场/美股',
      source: '《每日经济新闻》独家专访（2026-02-06）',
      status: 'ongoing',
      note: '曾预言1987股灾与2008危机；2026年5月公开四大理由：债务、资产泡沫、货币信用、周期共振。'
    },
    {
      id: 'r08',
      person: '美国银行（Savita Subramanian 团队）',
      role: '美股策略主管',
      date: '2026-01-03',
      quote: '2026年标普500仅上涨4%-5%，目标7100点，远低于市场乐观预期；此前曾警告泡沫超互联网时代、或引30%以上回调。',
      cats: ['A', 'D'],
      strength: 'structural',
      target: '标普500',
      source: '2026年展望（2026-01，每经/新浪等报道）',
      status: 'partial',
      note: '2025年2月曾警告泡沫超互联网时代、标普可跌40%；2025年12月预警AI泡沫+政策激进或引发大萧条级崩盘。'
    },
    {
      id: 'r09',
      person: '摩根大通技术策略团队 / BTIG',
      role: '技术分析师',
      date: '2026-08-31',
      quote: '费城半导体指数较6月峰值仍深陷超20%的熊市泥潭，"调整尚未真正结束"；中期选举年8-10月标普平均回撤约5%。',
      cats: ['E', 'F'],
      strength: 'tactical',
      target: '半导体/标普',
      source: '公开报道（2026-08-31）',
      status: 'partial',
      note: '费城半导体已进入熊市区间（较峰值-20%）。'
    },
    {
      id: 'r10',
      person: 'Rogers 补充 / 市场CAPE数据',
      role: '指标',
      date: '2026-08-24',
      quote: '标普500席勒CAPE升至42.2，为1999年11月互联网泡沫峰值（44.2）以来最高，估值已达26年高位。',
      cats: ['A'],
      strength: 'structural',
      target: '标普500',
      source: '公开数据（2026-08-24，百家号等报道）',
      status: 'pending',
      note: '估值指标非预测，但为看空逻辑提供数据支撑。'
    }
  ],
  // 历史著名案例（大跌前）
  history: [
    {
      id: 'h01',
      era: '2000 互联网泡沫',
      person: 'Robert Shiller（罗伯特·席勒）',
      role: '耶鲁大学经济学教授（2013诺奖）',
      date: '2000-03',
      quote: '《非理性繁荣》出版，系统论证美股估值已脱离基本面支撑，CAPE处于历史极端高位。',
      cats: ['A', 'G'],
      result: '纳指自2000年3月高点跌超78%，泡沫破裂',
      status: 'confirmed',
      note: '书出版于泡沫破灭前夕，被公认为最著名"事前看空"案例之一。'
    },
    {
      id: 'h02',
      era: '2000 互联网泡沫',
      person: 'Jeremy Grantham',
      role: 'GMO联合创始人',
      date: '2000',
      quote: '互联网泡沫时期提前警告估值过高，GMO 大幅规避科技股。',
      cats: ['A', 'C', 'G'],
      result: '泡沫破裂，其谨慎持仓大幅跑赢',
      status: 'confirmed',
      note: 'Grantham 以研究重大泡沫著称，多次提前警告。'
    },
    {
      id: 'h03',
      era: '2008 金融危机',
      person: 'Michael Burry（迈克尔·伯里）',
      role: 'Scion Capital 创始人',
      date: '2005-2007',
      quote: '深入研究抵押贷款债券，做空次贷（CDS），认为房价泡沫+次贷违约将引发金融危机。',
      cats: ['A', 'F'],
      status: 'confirmed',
      result: '2008年危机爆发，Burry 做空获利逾8亿美元',
      note: '《大空头》原型。'
    },
    {
      id: 'h04',
      era: '2008 金融危机',
      person: 'John Paulson（约翰·保尔森）',
      role: 'Paulson & Co.',
      date: '2006-2007',
      quote: '重仓做空次贷CDO/CDS，并预判房市泡沫破裂、银行体系将遭重创。',
      cats: ['A', 'D', 'F'],
      result: '2008年做空获利150亿美元，成为传奇空头',
      status: 'confirmed',
      note: '当年获利规模创个人对冲基金纪录。'
    },
    {
      id: 'h05',
      era: '2008 金融危机',
      person: 'David Einhorn（大卫·艾因霍恩）',
      role: 'Greenlight Capital 创始人',
      date: '2007-2008',
      quote: '做空雷曼兄弟，公开质疑其资产估值与杠杆水平，并在多场演讲中详细拆解。',
      cats: ['B', 'E', 'F'],
      result: '雷曼2008年9月破产，做空获利',
      status: 'confirmed',
      note: '曾在2007年伯克希尔股东会前做空雷曼并公开其逻辑。'
    },
    {
      id: 'h06',
      era: '2020 疫情崩盘',
      person: 'Jeremy Grantham（格兰桑）',
      role: 'GMO联合创始人',
      date: '2020-01',
      quote: '在《IF THIS IS THE LAST DANCE》报告中警告美股"融涨/泡沫终章"，标普估值极高。',
      cats: ['A', 'G'],
      result: '2020年3月美股因疫情快速跌入熊市（-34%），但随后V型反转创新高',
      status: 'partial',
      note: '时点精准但幅度与后续V反不可同日而语。'
    },
    {
      id: 'h07',
      era: '2022 加息熊市',
      person: 'Mike Wilson（迈克·威尔逊）',
      role: '摩根士丹利首席美股策略师',
      date: '2021-12 / 2022',
      quote: '连续下调标普500目标价，警告盈利预期过高、流动性收紧将引爆回撤。',
      cats: ['B', 'D'],
      result: '2022年标普500跌19.4%，2022年6月入熊市',
      status: 'confirmed',
      note: '2022年10月才见底，Wilson全年持续看空。'
    },
    {
      id: 'h08',
      era: '2022 宏观熊市',
      person: 'Jeremy Grantham（格兰桑）',
      role: 'GMO联合创始人',
      date: '2022-01',
      quote: '发表《Race to the Finish?》警告"史诗级泡沫"已至，预测超级泡沫破裂。',
      cats: ['A', 'G'],
      result: '2022年纳指跌33%、标普跌19.6%',
      status: 'confirmed',
      note: '2022年1月警告后，市场2月开始一路下行。'
    }
  ]
};