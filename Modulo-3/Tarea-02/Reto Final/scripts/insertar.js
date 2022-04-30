export function fusionar(direccionamiento, reproducccion){
    direccionamiento.innerHTML =''
    reproducccion.forEach((value) => {
        const {video,canal,vistas,fecha,icono} = value
        direccionamiento.innerHTML += `
        <div>
        <div class="video">
                <video src="${video}" id= "lugar" poster=${video} controls></video>        
            </div> 
            <div class="posicion">
                <img src="${icono}" class="icono">
            </div>
            <div class="descripcionTitulo">
                <b><p>Hermes | Destripando la Historia</p></b>
            </div> 
                <div class="descripcion">
                <p>${canal}</p>
                <p>${vistas}</p>
                <p>${fecha}</p>
            </div> 
        </div>
</div>
        `;
    });
}

export function agregar(direccionamiento2, caratulas){
    direccionamiento2.innerHTML =''
    caratulas.forEach((value)=>{
        const{usuario,icono,nombre,canal,vistas,fecha} = value
        direccionamiento2.innerHTML +=`
        <div>
                <div class="subtitulo">
                    <b><p> Videos sugeridos</p></b>
                </div>
                <div class="videos">
                        <a>
                        <img id="caratula" src="${usuario}">        
                        </a>
                    </div> 
                    <div class="ubicacion">
                        <img src="${icono}" class="icono2">
                    </div>
                    <div class="descripcionTitulo2">
                        <b><p>${nombre}</p></b>
                    </div> 
                        <div class="descripcion2">
                        <p>${canal}</p>
                        <p>${vistas}</p>
                        <p>${fecha}</p>
                    </div> 
                </div>
                `
    })
}