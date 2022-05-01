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

