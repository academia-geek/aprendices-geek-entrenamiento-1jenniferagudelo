import { colocar } from "../modulos/detalles.js";
import { GetData } from "../helpers/getData.js";

const principal = document.getElementById('construccion')

const ponerImagen = JSON.parse(localStorage.getItem('insertar'))
if(ponerImagen !== null){
    GetData.push(ponerImagen)
}

const extraer = localStorage.getItem('insertar')

// console.log (`hi${insertar}`)

document.addEventListener('click',({target}) =>{
    if(target.classList.contains('botones')){
        const poner =target.id
        const filtroCategorias =GetData.filter((mostrar) => mostrar.tipo === poner);
        if(poner === 'all'){ 
            colocar(principal,GetData);
       }else{
            colocar(principal,filtroCategorias)
       }
   
}})

colocar(principal, GetData)