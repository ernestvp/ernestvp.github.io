function aceptarCookies() {
    document.getElementById('bannerCookies').style.display = 'none';
}

function alternarMenu() {
    const nav = document.querySelector('.menu-navegacion');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
}
const modoNormal = document.getElementById("modo-normal");
const modoContraste = document.getElementById("modo-contraste");
const modoDislexia = document.getElementById("modo-dislexia");

modoNormal.addEventListener("click", () => {
  document.body.classList.remove("contraste");
  document.body.classList.remove("dislexia");
});

modoContraste.addEventListener("click", () => {
  document.body.classList.add("contraste");
  document.body.classList.remove("dislexia");
});

modoDislexia.addEventListener("click", () => {
  document.body.classList.add("dislexia");
  document.body.classList.remove("contraste");
});