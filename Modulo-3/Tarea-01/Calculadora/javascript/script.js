let btn1 = document.getElementById("Boton")

btn1.addEventListener("mouseover", function(){
   btn1.style.background = "red" ;})
btn1.addEventListener("mouseout", function(){
   btn1.style.background = "white" ;})

let btn2 = document.getElementById("Boton2")

btn2.addEventListener("mouseover", function(){
   btn2.style.background = "red" ;})
btn2.addEventListener("mouseout", function(){
   btn2.style.background = "white" ;})

function calcularPropina(cuenta, Propina){
   const pago = cuenta * (Propina / 100);
   return Math.round(pago);}

function CalcularTotal() { 
    let datoCuenta = document.getElementById('cuenta').value;
    let datoPropina = document.querySelector('#propina').value; 
    let resultados = calcularPropina(datoCuenta, datoPropina);

    if(datoCuenta === '' || datoPropina === ''){
       alert("Completa los espacios")
    }else{const resultado = Number(datoCuenta) + resultados;
       const esconder1 = document.querySelector(".esconder")
       esconder1.classList.remove("esconder")
       esconder1.classList.add("insertar")
       const principal = document.getElementById("resultadoCuenta")
       principal.innerHTML = `${datoCuenta}`
       const principalpropina = document.getElementById("resultadoPropina")
       principalpropina.innerHTML = `${resultados}`
       const totalPago = document.getElementById("resultadoPago")
       totalPago.innerHTML = `${resultado}`
       const botonBorrar = document.getElementById('Boton2');
       botonBorrar.addEventListener('click', function(){
       location.reload();})
      }}




