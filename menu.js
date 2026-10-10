/* ============================================================
   MENU — Apertura y cierre del menú desplegable
   ============================================================ */

(function () {
  'use strict';

  function initMenu() {
    var menuButton = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.nav');
    if (!menuButton || !nav) return;

    function setMenuOpen(open) {
      nav.classList.toggle('open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      menuButton.textContent = open ? '×' : '☰';
    }

    menuButton.addEventListener('click', function () {
      setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenuOpen(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setMenuOpen(false);
    });

    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
        setMenuOpen(false);
      }
    });
  }

  window.initMenu = initMenu;
})();