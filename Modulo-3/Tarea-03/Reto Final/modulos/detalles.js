export function colocar(info, videos){
    info.innerHTML =''
    videos.forEach((value) => {
        const {id,imagen,tipo,color,precio} = value
        info.innerHTML += `
        <div>
        <div class="subtitulo">
            <b><p>Guitarra</p></b>
        </div>
        <div class="guitarra">
                <a class = "contenedorImagen">
                <img class="imagen mdetalles"  id="${id}" src="${imagen}">        
                </a>
            </div> 
                <div class="descripcion">
                <p>Guitarra ${tipo}</p>
                <p>Color ${color}</p>
                <p>precio $${precio}</p>
            </div> 
    </div>
        `;
    });
}