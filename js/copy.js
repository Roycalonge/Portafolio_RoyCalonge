/* ============================================================
   COPY — Copia el teléfono y presenta el resultado en un toast
   ============================================================ */

(function () {
  'use strict';

  var phoneNumber = '3188718692';
  var toastTimer;

  function showToast(toast, message) {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('show');
    toastTimer = window.setTimeout(function () {
      toast.classList.remove('show');
    }, 2600);
  }

  function copyWithFallback() {
    var field = document.createElement('textarea');
    field.value = phoneNumber;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.left = '-9999px';
    document.body.appendChild(field);
    field.select();
    var copied = false;

    try {
      copied = document.execCommand('copy');
    } catch (error) {
      copied = false;
    }

    field.remove();
    return copied;
  }

  function initCopy() {
    var copyButton = document.getElementById('copy-contact');
    var toast = document.querySelector('.toast');
    if (!copyButton || !toast) return;

    copyButton.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(phoneNumber).then(function () {
          showToast(toast, 'Número copiado: 318 871 8692');
        }).catch(function () {
          var copied = copyWithFallback();
          showToast(toast, copied ? 'Número copiado: 318 871 8692' : 'Mi número de contacto es 318 871 8692');
        });
        return;
      }

      var copied = copyWithFallback();
      showToast(toast, copied ? 'Número copiado: 318 871 8692' : 'Mi número de contacto es 318 871 8692');
    });
  }

  window.initCopy = initCopy;
})();
