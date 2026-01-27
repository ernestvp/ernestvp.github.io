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