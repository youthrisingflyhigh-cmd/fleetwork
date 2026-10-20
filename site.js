/* =============================================================================
   FLEETWORK — SHARED SITE SCRIPT (header + footer for both pages)
   Needs config.js loaded first.
============================================================================= */
const FW = (function () {
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function instagramHandle() {
    return TEAM.instagramProfile
      .replace(/^https?:\/\/(www\.)?instagram\.com\//i, '@')
      .replace(/\/$/, '');
  }

  function renderHeader(page) {
    var home = page === 'home';
    var pre = home ? '' : 'index.html';
    var links = [
      ['Approach', pre + '#approach'],
      ['Open runs', pre + '#runs'],
      ['Schedule', pre + '#schedule'],
      ['Roster', 'roster.html'],
      ['Stats', pre + '#stats'],
      ['Highlights', pre + '#highlights'],
      ['Contact', '#contact']
    ];
    var nav = links.map(function (l) {
      var current = l[1] === 'roster.html' && page === 'roster' ? ' aria-current="page"' : '';
      return '<a href="' + l[1] + '"' + current + '>' + l[0] + '</a>';
    }).join('');

    var el = document.getElementById('siteHeader');
    el.innerHTML =
      '<div class="header-inner">' +
        '<a class="brand" href="' + (home ? '#top' : 'index.html') + '">' +
          '<span class="brand-mark"><img src="assets/logo-mark.png" alt=""></span>' +
          '<span class="brand-name">Fleetwork</span>' +
        '</a>' +
        '<nav class="nav" id="siteNav" aria-label="Main">' + nav + '</nav>' +
        '<button class="nav-toggle" id="navToggleBtn" aria-label="Open menu" aria-expanded="false">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>';

    var navEl = document.getElementById('siteNav');
    var btn = document.getElementById('navToggleBtn');
    btn.addEventListener('click', function () {
      var open = navEl.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
    navEl.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navEl.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function renderFooter() {
    var el = document.getElementById('contact');
    var email = TEAM.contactEmail
      ? '<a href="mailto:' + esc(TEAM.contactEmail) + '">' + esc(TEAM.contactEmail) + '</a>'
      : '';
    el.innerHTML =
      '<div class="wrap">' +
        '<div class="footer-top">' +
          '<a class="brand" href="index.html">' +
            '<span class="brand-mark"><img src="assets/logo-mark.png" alt=""></span>' +
            '<span class="brand-name">Fleetwork Basketball</span>' +
          '</a>' +
          '<div class="footer-links">' +
            '<a href="' + esc(TEAM.instagramProfile) + '" target="_blank" rel="noopener">Instagram ' + esc(instagramHandle()) + '</a>' +
            email +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">© ' + new Date().getFullYear() + ' Fleetwork Basketball</div>' +
      '</div>';
  }

  return { esc: esc, instagramHandle: instagramHandle, renderHeader: renderHeader, renderFooter: renderFooter };
})();
