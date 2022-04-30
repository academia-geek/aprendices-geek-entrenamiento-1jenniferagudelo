import{ videos }from "./data.js";
import{ colocar }from"./detalles.js";

const principal = document.getElementById('contenedor')

const ponerVideo = JSON.parse(localStorage.getItem('insertar'))
if(ponerVideo !== null){
    videos.push(ponerVideo)
}

colocar(principal, videos)

const extraer = localStorage.getItem('insertar')

// console.log (`hi${insertar}`)

document.addEventListener('click',({target}) =>{
    if(target.classList.contains('botones')){
        const poner = target.id
        const filtroCategorias = videos.filter((categoria) => categoria.categoria === poner);
        if(poner === 'todo'){ 
            colocar(principal, videos);
       }else{
            colocar(principal,filtroCategorias)
       }
   
    }else if(target.classList.contains('insertar')){ 
        const terminar = target.id
        // console.log(terminar)
        let buscarVideo = videos.find(lista => lista.id == terminar);
        console.log(buscarVideo);
        
        const posicionVideo = videos.indexOf(buscarVideo); 
        localStorage.setItem('buscarVideo', posicionVideo );
        localStorage.setItem('videoSubido', JSON.stringify(buscarVideo));
    }
})





