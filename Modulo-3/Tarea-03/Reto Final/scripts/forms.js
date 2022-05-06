const form = document.getElementById('formulario')

form.addEventListener('submit', async (contra)=>{
    contra.preventDefault()

    let desarrollo = document.querySelector('#tipo').value;
    let image = document.querySelector('#imagen').value;
    let color = document.querySelector('#color').value;
    let precio = document.querySelector('#precio').value;

    if(desarrollo === '' || image === '' || color === '' || precio === '' ){
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

    let nuevoGuitarra = {
        all: 'todos',
        tipo : desarrollo,
        imagen : image,
        color : color,
        precio : precio,
    }

    await fetch('http://localhost:3000/Todos', {
        method : "POST",
        body : JSON.stringify(nuevoGuitarra),
        headers : {
            'Content-type':'application/json; charset=UTF-8'

        }
    })
    .then(()=>{
        window.location.href = '../pages/productos.html'
    })
    const botonBorrar = document.getElementById('boton');
       botonBorrar.addEventListener('click', function(){
       location.reload();})
}
)