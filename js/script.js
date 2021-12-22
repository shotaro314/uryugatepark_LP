const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
  if (btn.innerHTML === '=') {
    btn.innerHTML = 'x';
  } else {
    btn.innerHTML = '=';
  }
});