export function colocar(info, videos){
    info.innerHTML =''
    videos.forEach((value) => {
        const {usuario,nombre,canal,vistas,fecha,icono} = value
        info.innerHTML += `
        <div>
            <div class="video">
                    <a>
                    <img id="cover" src="${usuario}">        
                    </a>
                </div> 
                <div class="posicion">
                    <img src="${icono}" class="icono">
                </div>
                <div class="descripcionTitulo">
                    <b><p>${nombre}</p></b>
                </div> 
                    <div class="descripcion">
                    <p>${canal}</p>
                    <p>${vistas}</p>
                    <p>${fecha}</p>
                </div> 
            </div>
        `;
    });
}