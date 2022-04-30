const form = document.getElementById("formulario")

form.onsubmit = (e)=>{
    e.preventDefault();
    const uno = document.getElementById("categoria").value;
    const dos = document.getElementById("video").value;
    const tres = document.getElementById("usuario").value;
    const cuatro = document.getElementById("titulo").value;
    const cinco = document.getElementById("canal").value;
    const seis = document.getElementById("vistas").value;
    const siete = document.getElementById("fecha").value;

    if(uno === '' || dos === '' || tres === '' || cuatro === '' || cinco === '' || seis === '' || siete ===''){
    Swal.fire(
        'Completa los espacios faltantes',
        'You clicked the button!',
        'error'
      )}
      else{
        Swal.fire(
            'Video agregado',
            'You clicked the button!',
            'success'
      )}
    const llenar = {
        id: 31,
        inicio: "todo" ,
        categoria: uno ,
        usuario:dos ,
        icono:"../iconos/destripando.jpg",
        nombre:cuatro,
        canal:cinco,
        vistas:seis,
        fecha:siete,
    }
    localStorage.setItem('insertar', JSON.stringify(llenar)) 
        }
        

    
    
