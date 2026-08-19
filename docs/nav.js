(function () {
  // Apply saved theme + portal before nav renders to avoid flash
  (function applyTheme() {
    var theme = localStorage.getItem('theme');
    if (theme) document.documentElement.setAttribute('data-theme', theme);
    var portal = localStorage.getItem('portal') || 'coordinator';
    document.documentElement.setAttribute('data-portal', portal);
  })();

  // Auto-load icons.js so every page has access to the icon library
  (function loadIconScript() {
    if (document.querySelector('script[src$="icons.js"]')) return;
    var s = document.createElement('script');
    s.src = 'icons.js';
    document.head.appendChild(s);
  })();

  // Load figma-cursors.js for the multiplayer cursor easter egg
  (function loadCursors() {
    if (document.querySelector('script[src$="figma-cursors.js"]')) return;
    var s = document.createElement('script');
    s.src = 'figma-cursors.js';
    s.defer = true;
    document.head.appendChild(s);
  })();

  // Resolve nav.html relative to this script's location
  var scriptSrc = document.querySelector('script[src$="nav.js"]');
  var base = scriptSrc
    ? scriptSrc.src.replace(/nav\.js(\?.*)?$/, '')
    : '';

  fetch(base + 'nav.html')
    .then(function (r) { return r.text(); })
    .then(function (html) {
      var wrapper = document.createElement('div');
      wrapper.innerHTML = html;

      // Inject top nav
      var topnav = wrapper.querySelector('.topnav');
      var topnavPlaceholder = document.getElementById('topnav-placeholder');
      if (topnav && topnavPlaceholder) {
        topnavPlaceholder.replaceWith(topnav);
      }

      // Inject sidebar
      var sidebar = wrapper.querySelector('.sidebar');
      var sidebarPlaceholder = document.getElementById('sidebar-placeholder');
      if (sidebar && sidebarPlaceholder) {
        sidebarPlaceholder.replaceWith(sidebar);
      }

      // Mark the correct nav item as active based on current filename
      var currentFile = location.pathname.split('/').pop() || 'index.html';
      // Preview servers often serve index.html at root
      if (currentFile === '') currentFile = 'index.html';

      document.querySelectorAll('.nav-item').forEach(function (link) {
        link.classList.remove('active');
        var href = (link.getAttribute('href') || '').split('/').pop();
        if (href === currentFile) {
          link.classList.add('active');
        }
      });
      // ── Theme popover ──
      var themeBtn = document.getElementById('theme-btn');
      var themePop = document.getElementById('theme-popover');

      function getPortal() { return localStorage.getItem('portal') || 'coordinator'; }
      function setPortal(val) {
        localStorage.setItem('portal', val);
        document.documentElement.setAttribute('data-portal', val);
        document.dispatchEvent(new CustomEvent('portalchange', { detail: val }));
      }
      function getEffectiveTheme() {
        var s = localStorage.getItem('theme');
        return s || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      }
      function setTheme(val) {
        localStorage.setItem('theme', val);
        document.documentElement.setAttribute('data-theme', val);
        document.dispatchEvent(new CustomEvent('themechange', { detail: val }));
      }

      function syncRadios() {
        var theme = getEffectiveTheme();
        var portal = getPortal();
        document.querySelectorAll('input[name="tpop-color"]').forEach(function(r) {
          r.checked = r.value === theme;
        });
        document.querySelectorAll('input[name="tpop-portal"]').forEach(function(r) {
          r.checked = r.value === portal;
        });
      }

      function openPopover() {
        syncRadios();
        themePop.hidden = false;
        themeBtn.setAttribute('aria-expanded', 'true');
      }
      function closePopover() {
        themePop.hidden = true;
        themeBtn.setAttribute('aria-expanded', 'false');
      }

      if (themeBtn && themePop) {
        themeBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          themePop.hidden ? openPopover() : closePopover();
        });

        themePop.addEventListener('change', function(e) {
          if (e.target.name === 'tpop-color') setTheme(e.target.value);
          if (e.target.name === 'tpop-portal') setPortal(e.target.value);
        });

        document.addEventListener('click', function(e) {
          if (!document.getElementById('theme-btn-wrap').contains(e.target)) closePopover();
        });

        document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape') closePopover();
        });
      }

      // ── Changelog: inject the tab shell (sync) so initPageTabs binds it ──
      injectChangelogTab();

      // ── Page tabs (Design / Developer / Changelog) ──
      initPageTabs();

      // ── Changelog: fetch data and render (async) ──
      renderChangelog();
    })
    .catch(function (err) {
      console.warn('[nav.js] Could not load nav.html:', err);
    });

  // Map a *-docs.html filename to its sidebar label (falls back to a
  // prettified filename when the page isn't in the nav).
  function pageLabel(file) {
    var link = document.querySelector('.nav-item[href$="' + file + '"]');
    if (link) return link.textContent.replace(/\s+/g, ' ').trim();
    return file
      .replace(/-docs\.html$/, '')
      .replace(/\.html$/, '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, function (c) { return c.toUpperCase(); });
  }

  function currentPageFile() {
    var f = location.pathname.split('/').pop() || 'index.html';
    return f === '' ? 'index.html' : f;
  }

  function initials(name) {
    var parts = (name || '').trim().split(/\s+/).slice(0, 2);
    return parts.map(function (p) { return p.charAt(0).toUpperCase(); }).join('') || '?';
  }

  function avatarColor(name) {
    var palette = ['cl-av-blue', 'cl-av-yellow', 'cl-av-green', 'cl-av-purple', 'cl-av-red'];
    var sum = 0;
    for (var i = 0; i < (name || '').length; i++) sum += name.charCodeAt(i);
    return palette[sum % palette.length];
  }

  function entryHtml(e, withTags) {
    var tags = '';
    if (withTags && e.pages && e.pages.length) {
      tags = '<div class="cl-tags">' + e.pages.map(function (p) {
        return '<a class="cl-tag" href="' + p + '?tab=changelog">' + pageLabel(p) + '</a>';
      }).join('') + '</div>';
    }
    return '' +
      '<li class="cl-entry">' +
        '<span class="cl-av ' + avatarColor(e.author) + '">' + initials(e.author) + '</span>' +
        '<div class="cl-body">' +
          '<div class="cl-subject">' + escapeHtml(e.subject) + '</div>' +
          '<div class="cl-meta">' +
            '<span class="cl-author">' + escapeHtml(e.author) + '</span>' +
            '<span class="cl-dot">·</span>' +
            '<span class="cl-date">' + e.date + '</span>' +
            '<span class="cl-dot">·</span>' +
            '<code class="cl-hash">' + e.hash + '</code>' +
          '</div>' +
          tags +
        '</div>' +
      '</li>';
  }

  function escapeHtml(s) {
    return (s || '').replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function injectChangelogTab() {
    var tabsInner = document.querySelector('.page-tabs-inner');
    var contentWrap = document.querySelector('.content-wrap');
    if (!tabsInner || !contentWrap) return;            // not a tabbed page
    if (tabsInner.querySelector('[data-tab="changelog"]')) return;

    var btn = document.createElement('button');
    btn.className = 'page-tab';
    btn.setAttribute('data-tab', 'changelog');
    btn.innerHTML =
      '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M8 4v4l2.5 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<circle cx="8" cy="8" r="6.25" stroke="currentColor" stroke-width="1.5"/></svg> Changelog';
    tabsInner.appendChild(btn);

    var panel = document.createElement('div');
    panel.className = 'tab-panel';
    panel.setAttribute('data-panel', 'changelog');
    panel.hidden = true;
    panel.innerHTML =
      '<div class="content-cols"><article class="content">' +
      '<section class="section"><h2 class="text-l3">Changelog</h2>' +
      '<p class="section-lead">Every change to this component, newest first — pulled straight from the git history.</p>' +
      '<ul class="cl-list" id="cl-page"><li class="cl-empty">Loading…</li></ul>' +
      '</section></article></div>';
    contentWrap.appendChild(panel);
  }

  function renderChangelog() {
    var pageList = document.getElementById('cl-page');
    var allList = document.getElementById('changelog-all');
    if (!pageList && !allList) return;

    fetch(base + 'changelog.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var entries = (data && data.entries) || [];

        if (pageList) {
          var file = currentPageFile();
          var mine = entries.filter(function (e) {
            return e.pages && e.pages.indexOf(file) !== -1;
          });
          pageList.innerHTML = mine.length
            ? mine.map(function (e) { return entryHtml(e, false); }).join('')
            : '<li class="cl-empty">No tracked changes for this page yet.</li>';
        }

        if (allList) {
          allList.innerHTML = entries.length
            ? entries.map(function (e) { return entryHtml(e, true); }).join('')
            : '<li class="cl-empty">No changes recorded.</li>';
          var countEl = document.getElementById('changelog-count');
          if (countEl) countEl.textContent = entries.length + ' changes';
        }
      })
      .catch(function (err) {
        console.warn('[nav.js] Could not load changelog.json:', err);
        if (pageList) pageList.innerHTML = '<li class="cl-empty">Changelog unavailable.</li>';
        if (allList) allList.innerHTML = '<li class="cl-empty">Changelog unavailable.</li>';
      });
  }

  function initPageTabs() {
    var tabs = document.querySelectorAll('.page-tab');
    if (!tabs.length) return;

    // Read active tab from URL param
    var params = new URLSearchParams(location.search);
    var active = params.get('tab') || 'design';

    function activateTab(name) {
      tabs.forEach(function(t) {
        t.classList.toggle('is-active', t.dataset.tab === name);
      });
      document.querySelectorAll('.tab-panel').forEach(function(p) {
        p.hidden = p.dataset.panel !== name;
      });
      // Update URL without reload
      var url = new URL(location.href);
      if (name === 'design') url.searchParams.delete('tab');
      else url.searchParams.set('tab', name);
      history.replaceState(null, '', url.toString());
    }

    tabs.forEach(function(t) {
      t.addEventListener('click', function() { activateTab(t.dataset.tab); });
    });

    activateTab(active);

    // Copy buttons on code blocks
    document.querySelectorAll('.dev-copy-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var pre = btn.closest('.dev-code-wrap').querySelector('pre');
        navigator.clipboard.writeText(pre ? pre.innerText : '').then(function() {
          btn.textContent = 'Copied!';
          btn.classList.add('did-copy');
          setTimeout(function() {
            btn.textContent = 'Copy';
            btn.classList.remove('did-copy');
          }, 2000);
        });
      });
    });
  }
})();
