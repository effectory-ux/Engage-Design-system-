/* Icon loader — replaces <i data-icon="name"> with inline SVG from assets/icons/{name}.svg.
   Icons inherit color via currentColor and size via CSS on the host element.

   Also replaces <i data-flag="NL"> with assets/flags/{CC}.svg. Flags keep their own
   colours, so they skip the currentColor rewrite. They are 4:3 and letterbox inside
   whatever box they get, so give the host a 4:3 one — the .flag class does. */
(function () {
  /* Resolve assets next to this script, not next to the page, so a prototype can load
     this file straight from the design-system site. Falls back to page-relative. */
  const ASSET_BASE = (document.currentScript && document.currentScript.src)
    ? new URL('.', document.currentScript.src).href
    : '';

  const cache = new Map();

  function stripSize(svg) {
    return svg
      .replace(/<svg([^>]*?)\swidth="[^"]*"/, '<svg$1')
      .replace(/<svg([^>]*?)\sheight="[^"]*"/, '<svg$1');
  }

  function normalize(svg) {
    return stripSize(svg
      .replace(/\sfill="#[0-9a-fA-F]{3,8}"/g, ' fill="currentColor"')
      .replace(/\sstroke="#[0-9a-fA-F]{3,8}"/g, ' stroke="currentColor"'));
  }

  async function fetchAsset(dir, name, transform) {
    const key = `${dir}/${name}`;
    if (cache.has(key)) return cache.get(key);
    const p = fetch(`${ASSET_BASE}assets/${dir}/${encodeURIComponent(name)}.svg`)
      .then(r => r.ok ? r.text() : '')
      .then(t => t ? transform(t) : '');
    cache.set(key, p);
    return p;
  }

  function place(el, svg) {
    el.innerHTML = svg;
    el.dataset.iconLoaded = '1';
    const s = el.firstElementChild;
    if (s && s.tagName.toLowerCase() === 'svg') {
      s.setAttribute('aria-hidden', 'true');
      s.style.display = 'block';
      s.setAttribute('width', '100%');
      s.setAttribute('height', '100%');
    }
  }

  async function renderOne(el) {
    if (el.dataset.iconLoaded) return;
    const flag = el.getAttribute('data-flag');
    if (flag) {
      /* Country codes are uppercase on disk; accept nl / nl-NL / NL alike. */
      const cc = flag.trim().slice(-2).toUpperCase();
      const svg = await fetchAsset('flags', cc, stripSize);
      if (svg) place(el, svg);
      return;
    }
    const name = el.getAttribute('data-icon');
    if (!name) return;
    const svg = await fetchAsset('icons', name, normalize);
    if (svg) place(el, svg);
  }

  function renderAll(root = document) {
    root.querySelectorAll('[data-icon]:not([data-icon-loaded]), [data-flag]:not([data-icon-loaded])')
      .forEach(renderOne);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => renderAll());
  } else {
    renderAll();
  }

  window.Icons = { render: renderAll, renderOne };
})();
