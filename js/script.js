function aceptarCookies() {
  const banner = document.getElementById('bannerCookies');
  if (banner) {
    banner.style.display = 'none';
    localStorage.setItem('cookies', 'true');
  }
}

window.addEventListener('load', () => {
  const banner = document.getElementById('bannerCookies');
  if (banner && localStorage.getItem('cookies') === 'true') {
    banner.style.display = 'none';
  }
});

function alternarMenu() {
  const nav = document.querySelector('.menu-navegacion');
  const boton = document.querySelector('.menu-movil');

  if (!nav || !boton) return;

  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
    boton.setAttribute('aria-expanded', 'false');
    boton.setAttribute('aria-label', 'Abrir menú');
  } else {
    nav.style.display = 'flex';
    boton.setAttribute('aria-expanded', 'true');
    boton.setAttribute('aria-label', 'Cerrar menú');
  }
}

const modoNormal = document.getElementById('modo-normal');
const modoContraste = document.getElementById('modo-contraste');
const modoDislexia = document.getElementById('modo-dislexia');

if (modoNormal && modoContraste && modoDislexia) {
  modoNormal.addEventListener('click', () => {
    document.body.classList.remove('contraste');
    document.body.classList.remove('dislexia');
  });

  modoContraste.addEventListener('click', () => {
    document.body.classList.add('contraste');
    document.body.classList.remove('dislexia');
  });

  modoDislexia.addEventListener('click', () => {
    document.body.classList.add('dislexia');
    document.body.classList.remove('contraste');
  });
}

const enlaces = document.querySelectorAll('.menu-navegacion a');
const ruta = window.location.pathname;

enlaces.forEach((enlace) => {
  if (ruta.endsWith(enlace.getAttribute('href'))) {
    enlace.classList.add('activo');
  } else {
    enlace.classList.remove('activo');
  }
});
