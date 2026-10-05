/* Heritage Antique Jewels — shared page behaviour. No need to edit this file. */
(function () {
  var S = window.SITE || {}, ERAS = window.ERAS || [], CATS = window.CATEGORIES || [];
  var PIECES = window.PIECES || [];

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function eraOf(id) { for (var i = 0; i < ERAS.length; i++) if (ERAS[i].id === id) return ERAS[i]; return null; }
  function catOf(id) { for (var i = 0; i < CATS.length; i++) if (CATS[i].id === id) return CATS[i]; return null; }

  // An image path with an extension is used as-is; without one, AVIF + JPG versions are expected.
  function pic(path, alt, base, eager) {
    base = base || '';
    var load = eager ? '' : ' loading="lazy"';
    if (/\.(jpe?g|png|webp|avif)$/i.test(path)) return '<img src="' + base + esc(path) + '" alt="' + esc(alt) + '"' + load + '>';
    return '<picture><source srcset="' + base + esc(path) + '.avif" type="image/avif"><img src="' + base + esc(path) + '.jpg" alt="' + esc(alt) + '"' + load + '></picture>';
  }
  function pieceUrl(p, base) { return (base || '') + (p.page ? 'pieces/' + p.id + '.html' : 'piece.html?id=' + encodeURIComponent(p.id)); }
  function card(p, base) {
    var e = eraOf(p.era);
    var img = p.thumb || (p.images && p.images[0]) || '';
    return '<a class="card" href="' + pieceUrl(p, base) + '"><div class="visual">' + pic(img, p.name, base) + '</div>' +
      '<div class="info"><span class="era">' + esc(p.circa || (e ? e.name : '')) + '</span><h3>' + esc(p.name) + '</h3>' +
      '<span class="price">' + esc(p.price || 'Price on request') + '</span></div></a>';
  }
  function enquiryText(name) { return 'Hello, I would like to enquire about: ' + name; }
  function mailto(name) { return 'mailto:' + (S.email || '') + '?subject=' + encodeURIComponent('Enquiry: ' + name) + '&body=' + encodeURIComponent(enquiryText(name) + '\n\n'); }
  function wa(name) { return S.whatsapp ? 'https://wa.me/' + String(S.whatsapp).replace(/\D/g, '') + '?text=' + encodeURIComponent(enquiryText(name)) : ''; }

  // Contact links anywhere on a page
  function contacts() {
    document.querySelectorAll('[data-wa]').forEach(function (a) {
      var url = wa(a.getAttribute('data-wa') || 'your collection');
      if (url) { a.href = url; a.hidden = false; }
    });
    document.querySelectorAll('[data-ig]').forEach(function (a) { if (S.instagram) { a.href = S.instagram; a.hidden = false; } });
    document.querySelectorAll('[data-dibs]').forEach(function (a) { if (S.firstdibs) { a.href = S.firstdibs; a.hidden = false; } });
    document.querySelectorAll('[data-cities]').forEach(function (el) { if (S.cities) { el.textContent = S.cities; el.hidden = false; } });
  }

  // Piece page gallery: thumbnails swap the main view
  function gallery(root) {
    root = root || document;
    var main = root.querySelector('.gallery .main'); if (!main) return;
    root.querySelectorAll('.thumbs button').forEach(function (b) {
      b.addEventListener('click', function () {
        root.querySelectorAll('.thumbs button').forEach(function (x) { x.removeAttribute('aria-current'); });
        b.setAttribute('aria-current', 'true');
        main.innerHTML = b.getAttribute('data-kind') === 'video'
          ? '<video src="' + b.getAttribute('data-src') + '" controls autoplay muted playsinline></video>'
          : b.innerHTML.replace(/ loading="lazy"/g, '');
      });
    });
  }

  // Collection page with era + type filters (URL: collection.html?era=art-deco&type=rings)
  function collection() {
    var grid = document.getElementById('grid'); if (!grid) return;
    var q = new URLSearchParams(location.search);
    var state = { era: q.get('era') || '', type: q.get('type') || '' };
    function chips(el, list, key, allLabel) {
      el.innerHTML = '<button class="chip" data-v="">' + allLabel + '</button>' +
        list.map(function (x) { return '<button class="chip" data-v="' + x.id + '">' + esc(x.name) + '</button>'; }).join('');
      el.addEventListener('click', function (ev) {
        var b = ev.target.closest('.chip'); if (!b) return;
        state[key] = b.getAttribute('data-v'); render();
      });
    }
    chips(document.getElementById('era-chips'), ERAS, 'era', 'All eras');
    chips(document.getElementById('type-chips'), CATS, 'type', 'All pieces');
    function render() {
      document.querySelectorAll('#era-chips .chip').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-v') === state.era); });
      document.querySelectorAll('#type-chips .chip').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-v') === state.type); });
      var list = PIECES.filter(function (p) { return (!state.era || p.era === state.era) && (!state.type || p.category === state.type) && !p.hidden; });
      grid.innerHTML = list.map(function (p) { return card(p); }).join('');
      document.getElementById('empty').hidden = list.length > 0;
      var e = eraOf(state.era), c = catOf(state.type);
      document.getElementById('count').textContent = list.length + (list.length === 1 ? ' piece' : ' pieces') +
        (e ? ' · ' + e.name + ' (' + e.dates + ')' : '') + (c ? ' · ' + c.name : '');
      var p = new URLSearchParams(); if (state.era) p.set('era', state.era); if (state.type) p.set('type', state.type);
      history.replaceState(null, '', location.pathname + (p.toString() ? '?' + p : ''));
    }
    render();
  }

  // Page for pieces added by hand to pieces.js (no generated page yet): piece.html?id=...
  function pieceFallback() {
    var root = document.getElementById('piece-root'); if (!root) return;
    var id = new URLSearchParams(location.search).get('id');
    var p = PIECES.filter(function (x) { return x.id === id; })[0];
    if (!p) { root.innerHTML = '<p class="empty">This piece could not be found. <a href="collection.html">Back to the collection</a></p>'; return; }
    var e = eraOf(p.era), c = catOf(p.category), imgs = p.images || [];
    document.title = p.name + ' — Heritage Antique Jewels';
    var thumbs = imgs.map(function (src, i) { return '<button' + (i === 0 ? ' aria-current="true"' : '') + ' aria-label="View image ' + (i + 1) + '">' + pic(src, p.name) + '</button>'; });
    if (p.video) thumbs.push('<button data-kind="video" data-src="' + esc(p.video) + '"><span class="vid">▶ Video</span></button>');
    root.innerHTML =
      '<div class="crumbs"><a href="index.html">Home</a> / <a href="collection.html">Collection</a>' + (e ? ' / <a href="collection.html?era=' + e.id + '">' + esc(e.name) + '</a>' : '') + '</div>' +
      '<div class="piece"><div class="gallery"><div class="main">' + (imgs[0] ? pic(imgs[0], p.name, '', true) : '') + '</div>' +
      (thumbs.length > 1 ? '<div class="thumbs">' + thumbs.join('') + '</div>' : '') + '</div>' +
      '<div class="details"><span class="eyebrow">' + esc(e ? e.name : (c ? c.name : 'The collection')) + '</span><h1>' + esc(p.name) + '</h1>' +
      '<p class="desc">' + esc(p.description) + '</p><dl class="facts">' +
      (p.circa ? '<div><dt>' + (/\d|century/i.test(p.circa) ? 'Date &amp; origin' : 'Attribution') + '</dt><dd>' + esc(p.circa) + '</dd></div>' : '') +
      (c ? '<div><dt>Category</dt><dd>' + esc(c.name) + '</dd></div>' : '') +
      '<div><dt>Price</dt><dd>' + esc(p.price || 'Price on request') + '</dd></div></dl>' +
      '<div class="actions">' + (p.buy ? '<a class="btn solid" href="' + esc(p.buy) + '">Purchase</a>' : '') +
      '<a class="btn' + (p.buy ? '' : ' solid') + '" href="' + mailto(p.name) + '">Enquire by email</a>' +
      (wa(p.name) ? '<a class="btn" href="' + wa(p.name) + '">Enquire on WhatsApp</a>' : '') + '</div>' +
      '<p class="assure">Condition report available on request · Insured, tracked worldwide shipping</p></div></div>';
    gallery(root);
  }

  // Home page: live counts on the era tiles
  function eraCounts() {
    document.querySelectorAll('[data-era-count]').forEach(function (el) {
      var id = el.getAttribute('data-era-count');
      var n = PIECES.filter(function (p) { return p.era === id && !p.hidden; }).length;
      el.textContent = n + (n === 1 ? ' piece' : ' pieces');
    });
  }

  window.HAJ = { pic: pic, card: card };
  document.addEventListener('DOMContentLoaded', function () { contacts(); gallery(); collection(); pieceFallback(); eraCounts(); });
})();
