import { fusionar } from "./insertar.js"
import { videos } from "./data.js"
import { agregar } from "./insertar.js"

const capturar = document.querySelector('.container')

const pilar = JSON.parse(localStorage.getItem('videoSubido'))

let videoVacio = []
videoVacio.push(pilar)  
fusionar(capturar,videoVacio)

// console.log(pilar);

