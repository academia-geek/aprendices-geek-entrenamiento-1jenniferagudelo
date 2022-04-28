import{videos}from "../data/data.js"
import{colocar}from"../modulos/detalles.js"
const principal =document.querySelector(".video")
console.log(principal)

window.addEventListener("DOMContentLoaded", (m)=>{
    const lits = videos.filter((poner)=> poner.inicio === "completo")
    colocar(principal, lits)
})

