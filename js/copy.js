/* ============================================================
   COPY — Copiar número de WhatsApp al portapapeles
   ============================================================ */

(function () {
  'use strict';

  function initCopy() {
    var copyButton = document.getElementById('copy-contact');
    var toast = document.querySelector('.toast');
    if (!copyButton || !toast) return;

    copyButton.addEventListener('click', function () {
      var done = function (msg) {
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(function () { toast.classList.remove('show'); }, 2600);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText('3188718692')
          .then(function () { done('Número copiado: 318 871 8692'); })
          .catch(function () { done('Mi número de contacto es 318 871 8692'); });
      } else {
        done('Mi número de contacto es 318 871 8692');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCopy);
  } else {
    initCopy();
  }
})();