document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('button.md:hidden');
  const menu = document.querySelector('.mobile-menu');

  btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
  });
});