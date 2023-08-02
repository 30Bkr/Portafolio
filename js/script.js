'use strict';
const slider = document.querySelector('.slider__contenedor')
let slideSection = document.querySelectorAll('.slider__card')
let sliderSectionLast = slideSection[slideSection.length -1];


const slide1 = document.querySelector('.slide1')
const slide2 = document.querySelector('.slide2')

slide1.addEventListener('click', siguiente)
slide2.addEventListener('click', anterior)

slider.insertAdjacentElement('afterbegin', sliderSectionLast)
let header = document.getElementById("cabecera");
let navbar = document.querySelector('.contenedor-contacto1')
navbar.addEventListener("scroll", mira);

let degradado = document.querySelector('#popup')
degradado.addEventListener('click', toggle);

let cerrar = document.getElementById('cerrar-popup')
cerrar.addEventListener('click', toggle)




function iniciarPagina() {
}
function seleccionar(link){
    let opciones = document.querySelectorAll('a');


    opciones[0].classList = 'ct'
    opciones[1].classList = 'ct'
    opciones[2].classList = 'ct'
    opciones[3].classList = 'ct'
    link.classList = 'seleccionado'
}
function toggle() {
  let perciana = document.getElementById('perciana');
  perciana.classList.toggle('active')
  let contactame = document.getElementById('contactame');
  contactame.classList.toggle('active')
}
function siguiente(){
 let sliderSectionFirst = document.querySelectorAll('.slider__card')[0];
 slider.style.marginLeft = "-200%"
 slider.style.transition = "all 0.5s"
 setTimeout(function(){
  slider.style.transition = 'none'
  slider.insertAdjacentElement('beforeend', sliderSectionFirst);
 slider.style.marginLeft = "-100%"

 },500)

console.log('siguiente')
}
function anterior(){
  let slideSection = document.querySelectorAll('.slider__card')
  let sliderSectionLast = slideSection[slideSection.length -1];
  slider.style.marginLeft = "0"
  slider.style.transition = "all 0.5s"
  setTimeout(function(){
   slider.style.transition = 'none'
   slider.insertAdjacentElement('afterbegin', sliderSectionLast);
  slider.style.marginLeft = "-100%"
 
  },500)
  console.log('anterior')
}


function mira(){

    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "0px 0px 10px 4px black";
}
window.addEventListener("load", iniciarPagina);

