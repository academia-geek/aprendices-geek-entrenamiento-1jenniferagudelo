import{ videos }from "../data/data.js";
import{ colocar }from"../modulos/detalles.js";

const principal = document.getElementById('contenedor')

colocar(principal, videos)

// principal.addEventListener("useCapture", ()=>{
//     const lits = videos.filter((poner)=> poner.inicio === "todo")
//     colocar(lits, videos)
// })

// const botonMusica = document.getElementsByClassName('boton1')

// colocar(botonMusica, videos)

// botonMusica.addEventListener("useCapture", () =>{
//     const btn2 = videos.filter((insertar)=> poner.categoria === "musica")
//     colocar(btn2, videos)
// })
