(function () {
  var b = document.querySelector('[data-k-burger]');
  var m = document.querySelector('[data-k-menu]');
  if (!b || !m) return;
  function set(open) {
    m.classList.toggle('is-open', open);
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  b.addEventListener('click', function () { set(!m.classList.contains('is-open')); });
  m.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
})();
