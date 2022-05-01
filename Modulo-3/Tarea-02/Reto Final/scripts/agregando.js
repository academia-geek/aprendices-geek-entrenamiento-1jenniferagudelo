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
