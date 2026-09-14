// ===== 纳指100大数据追踪看板 · 公共组件：导航/页脚/工具 =====
(function () {
  // 路径前缀自动检测（首页 vs pages/ 子页）
  var isInSubDir = window.location.pathname.indexOf('/pages/') >= 0 ||
    (window.location.protocol === 'file:' && window.location.pathname.replace(/\\/g, '/').indexOf('/pages/') >= 0);
  var P = isInSubDir ? '../' : '';

  var NAV = [
    { href: 'index.html', label: '总览', key: 'index' },
    { href: 'pages/mag7.html', label: '科技七姐妹', key: 'mag7' },
    { href: 'pages/sectors.html', label: '行业细分', key: 'sectors' },
    { href: 'pages/valuation.html', label: '估值(PE)', key: 'valuation' },
    { href: 'pages/bear.html', label: '空头观点', key: 'bear' },
    { href: 'pages/methodology.html', label: '数据说明', key: 'methodology' },
  ];

  // 跨站链接（排除当前站）
  var SITES = [
    { href: 'https://fengzt13.github.io/nasdaq100-dashboard/', label: '纳指100', key: 'nasdaq' },
    { href: 'https://fengzt13.github.io/ai-dashboard/', label: 'AI追踪', key: 'ai' },
    { href: 'https://fengzt13.github.io/metal-dashboard/', label: '金铜', key: 'metal' },
    { href: 'https://fengzt13.github.io/hbm-dashboard/', label: 'HBM', key: 'hbm' },
    { href: 'https://fengzt13.github.io/laolei-views/', label: '老雷', key: 'laolei' },
  ];
  var crossLinksHtml = SITES.filter(function (s) { return s.key !== 'nasdaq'; })
    .map(function (s) { return '<a class="cross-link" href="' + s.href + '">' + s.label + '</a>'; }).join('');

  function buildHeader(activeKey) {
    var header = document.createElement('header');
    var links = NAV.map(function (it) {
      var cls = it.key === activeKey ? ' nav-link active' : ' nav-link';
      return '<a class="' + cls + '" href="' + P + it.href + '">' + it.label + '</a>';
    }).join('');
    header.innerHTML =
      '<div class="nav-inner">' +
        '<a class="logo" href="' + P + 'index.html">' +
          '<span class="logo-badge">NDX</span>' +
          '<span class="logo-text"><span class="logo-line1">广州番禺有趣打工仔小冯的纳指100大数据跟踪</span><span class="logo-line2">Nasdaq-100 Dashboard</span></span>' +
        '</a>' +
        '<nav class="desktop">' + links + '</nav>' +
        '<div class="nav-actions">' +
          '<div class="cross-links">' + crossLinksHtml + '</div>' +
          '<button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="打开菜单">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>' +
          '</button>' +
        '</div>' +
      '</div>' +
      '<div class="mobile-nav" id="mobileNav">' + links + '<div class="cross-links-mobile">' + crossLinksHtml + '</div></div>';
    document.body.prepend(header);

    var menuBtn = document.getElementById('mobileMenuBtn');
    var mobileNav = document.getElementById('mobileNav');
    if (menuBtn) menuBtn.addEventListener('click', function () { mobileNav.classList.toggle('open'); });
  }

  function buildFooter() {
    var footer = document.createElement('footer');
    footer.innerHTML =
      '<div class="footer-inner">' +
        '<div class="footer-bottom">' +
          '<span>© 2026 纳指100大数据追踪看板 · 数据仅供研究参考，不构成投资建议</span>' +
          '<span>更新：2026-08-31</span>' +
        '</div>' +
      '</div>';
    document.body.appendChild(footer);
  }

  window.Dash = {
    init: function (activeKey) {
      buildHeader(activeKey || '');
      buildFooter();
    },
    // 格式化：万亿/十亿/百万
    fmtB: function (v) {
      if (v == null || isNaN(v)) return '—';
      if (Math.abs(v) >= 1e12) return (v / 1e12).toFixed(2) + '万亿';
      if (Math.abs(v) >= 1e9) return (v / 1e9).toFixed(1) + '十亿';
      if (Math.abs(v) >= 1e6) return (v / 1e6).toFixed(1) + '百万';
      return v.toFixed(0);
    },
    // 格式化：美元（十亿→B）
    fmtUSD: function (v, digits) {
      if (v == null) return '—';
      var d = digits == null ? 0 : digits;
      return '$' + v.toLocaleString('en-US', { maximumFractionDigits: d });
    },
    // 格式化：百分比
    fmtPct: function (v, digits) {
      if (v == null || isNaN(v)) return '—';
      var d = digits == null ? 1 : digits;
      return (v > 0 ? '+' : '') + v.toFixed(d) + '%';
    },
    // 同比/环比计算辅助：[date, value, yoy, qoq]
    withYoyQoq: function (arr) {
      return arr.map(function (p, i) {
        var yoy = null, qoq = null;
        if (i >= 4 && arr[i - 4] && p[1] != null && arr[i - 4][1] != null) {
          yoy = (p[1] / arr[i - 4][1] - 1) * 100;
        }
        if (i >= 1 && arr[i - 1] && p[1] != null && arr[i - 1][1] != null) {
          qoq = (p[1] / arr[i - 1][1] - 1) * 100;
        }
        return [p[0], p[1], yoy, qoq];
      });
    },
    // 景气度颜色（保留兼容）
    scoreColor: function (s) {
      if (s == null) return 'var(--muted)';
      if (s >= 75) return 'var(--up)';
      if (s >= 55) return '#d97706';
      if (s >= 40) return '#b45309';
      return 'var(--down)';
    },
    esc: function (s) {
      return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
  };
})();