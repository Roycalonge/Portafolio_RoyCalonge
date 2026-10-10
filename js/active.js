/* ============================================================
   ACTIVE — Marca en el menú la página HTML actual
   ============================================================ */

(function () {
  'use strict';

  function initActive() {
    var filename = window.location.pathname.split('/').pop().toLowerCase();
    var currentPage = filename.replace(/\.html$/, '') || 'index';
    var links = document.querySelectorAll('.nav a[data-page]');

    links.forEach(function (link) {
      var isCurrent = link.getAttribute('data-page') === currentPage;
      if (isCurrent) {
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('is-active');
        link.removeAttribute('aria-current');
      }
    });
  }

  window.initActive = initActive;
})();
