import { fusionar } from "./insertar.js"
import { videos } from "./data.js"
// import { agregar } from "./agregando.js"



const capturar = document.querySelector('.container')

const pilar = JSON.parse(localStorage.getItem('videoSubido'))

let videoVacio = []
videoVacio.push(pilar)  
fusionar(capturar,videoVacio)

console.log(pilar);

// const utilizar = document.querySelector('.conta')

// const vacio = JSON.parse(localStorage.getItem('videoColocados'))

// let videoInsertado = []
// videoInsertado.push(vacio)  
// agregar(utilizar,videoInsertado)

// console.log(vacio);