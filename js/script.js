function iniciarPagina() {
  let degradado = document.getElementById('popup')
  degradado.addEventListener('click', toggle);

  let cerrar = document.getElementById('cerrar-popup')
  cerrar.addEventListener('click', toggle)

}

let header = document.getElementById("cabecera");
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  if (scroll > 10) {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "0px 0px 10px 4px black";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

function toggle() {
  let perciana = document.getElementById('perciana');
  perciana.classList.toggle('active')
  let contactame = document.getElementById('contactame');
  contactame.classList.toggle('active')
}
window.addEventListener("load", iniciarPagina);
