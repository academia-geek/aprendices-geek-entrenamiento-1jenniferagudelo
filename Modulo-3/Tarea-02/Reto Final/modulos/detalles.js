export function colocar(info,videos){
    info.innerHTML =''
    videos.forEach((value) => {
        const {usuario,video,nombre,canal,vistas,fecha} = value
        info.innerHtml +=`
        <div class="video" id="video">
                    <a><img id="cover" src="${usuario}">
                        <img src="${video}" alt=""> 
                    </a>
                </div> 
                <div class="posicion">
                    <img src="./iconos/destripando.jpg" class="icono">
                </div>
                <div class="descripcionTitulo">
                    <b><p>${nombre}</p></b>
                </div> 
                    <div class="descripcion">
                    <p>${canal}</p>
                    <p>${vistas}</p>
                    <p>${fecha}</p>
                </div>
        `
    });
}