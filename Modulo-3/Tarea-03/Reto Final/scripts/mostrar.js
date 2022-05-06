import { colocarDetalle } from "../modulos/mostrar1.js"

let mos = document.getElementById('ps')

let borra = document.getElementById('borrar')

let mis = JSON.parse(localStorage.getItem('detalle'))
colocarDetalle(mos, mis)

borra.addEventListener('click', async () => {
if(borra = borrar){
    let terminar = mis.id
    await fetch(`http://localhost:3000/Todos/${terminar}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(() => {
            alert('Producto eliminado')
            
        }

        )
    }})