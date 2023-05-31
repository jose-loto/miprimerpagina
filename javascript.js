function showAlert() {
    alert('hola. esta es una alerta desde javaScript'); 
}

function dialogo() {
    prompt('tu nombre');

}
let fechaActual = new Date() ;

let horas = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
 let segundos = fechaActual.getSeconds();

 let hoaraActual = horas + ":" + minutos + ":" + segundos;

 document.getElementById("hora").textContent =hoaraActual;
