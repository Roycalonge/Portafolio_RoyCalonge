/* ============================================================
   APP — Inicializa las interacciones comunes de cada página
   ============================================================ */

(function () {
  'use strict';

  function initYear() {
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  function init() {
    if (window.initMenu) window.initMenu();
    if (window.initCopy) window.initCopy();
    if (window.initActive) window.initActive();
    initYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();