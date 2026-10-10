const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  menuButton.textContent = open ? '×' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) { menuButton.textContent = '☰'; menuButton.setAttribute('aria-label', 'Abrir menú'); }
}));
document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copy-contact');
const toast = document.querySelector('.toast');
copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('3188718692');
    toast.textContent = 'Número copiado: 318 871 8692';
  } catch {
    toast.textContent = 'Mi número de contacto es 318 871 8692';
  }
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2600);
});
