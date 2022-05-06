import { GetData } from "../helpers/getData.js";
import { colocar } from "../modulos/detalles.js"
console.log(colocar)

let traer = document.getElementById('construccion')

let md = document.querySelector(".mdetalles")

// md.addEventListener('click',({target}) =>{
//         console.log(target)
//     }) 



let todos = document.getElementById('class')
let al = document.getElementById('todo')
let fla = document.getElementById('flamen')
let rusa = document.getElementById('rus')
let acustica = document.getElementById('acustic')
let electroacustica = document.getElementById('elec')
let electrica = document.getElementById('electri')
let italiana = document.getElementById('italin')
let renancentista = document.getElementById('renance')
let barroca = document.getElementById('barro')
let moderno = document.getElementById('modern')



document.addEventListener('DOMContentLoaded', async () => {
    let array = await GetData('Todos')
    colocar(traer,array)
    console.log(array);
    todos.addEventListener('click', () => {
        const poner = array.filter((prueba) => prueba.tipo === 'Clasica')
        colocar(traer, poner)
    })
    al.addEventListener('click', () => {
        colocar(traer, array)
    })
    fla.addEventListener('click', () => {
        const poner = array.filter((prueba) => prueba.tipo === 'Flamenca')
        colocar(traer, poner)
    })
    rusa.addEventListener('click', () => {
        const poner = array.filter((prueba) => prueba.tipo === 'Rusa')
        colocar(traer, poner)
    })
    acustica.addEventListener('click', () => {
        const poner = array.filter((prueba) => prueba.tipo === 'Acustica')
        colocar(traer, poner)
    })
    electroacustica.addEventListener('click', () => {
        const poner = array.filter((prueba) => prueba.tipo === 'Electroacustica')
        colocar(traer, poner)
    })
    electrica.addEventListener('click', () => {
        const poner = array.filter((prueba) => prueba.tipo === 'Electrica')
        colocar(traer, poner)
    })
    italiana.addEventListener('click', () => {
        const poner = array.filter((prueba) => prueba.tipo === 'Italiana')
        colocar(traer, poner)
    })
    renancentista.addEventListener('click', () => {
        const poner = array.filter((prueba) => prueba.tipo === 'Renacentista')
        colocar(traer, poner)
    })
    barroca.addEventListener('click', () => {
        const poner = array.filter((prueba) => prueba.tipo === 'Barroca')
        colocar(traer, poner)
    })
    moderno.addEventListener('click', () => {
        const poner = array.filter((prueba) => prueba.tipo === 'Moderno')
        colocar(traer, poner)
    })
    md = document.addEventListener('click',({target}) =>{
        if(target.classList.contains('mdetalles')){
            let mk = target.id
            let ms = array.find((e)=>e.id == mk)
            localStorage.setItem('detalle', JSON.stringify(ms))
            window.location.href = "../pages/mostrar.html"
        }
        
    }
    )
})


        // let buscarArreglo = GetData.find(mostrar => mostrar.id == terminar);

        
        // const posicionGuitarra = GetData.indexOf(buscarArreglo); 
        // localStorage.setItem('buscarArreglo', posicionGuitarra );
        // localStorage.setItem('videoSubido', JSON.stringify(buscarArreglo));
        // window.location.href='../pages/mostrar.html'
   





















