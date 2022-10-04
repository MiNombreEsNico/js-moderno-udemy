// Variables

const btnEnviar = document.querySelector('#enviar');

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
}


// Funciones

function iniciarApp() {
    btnEnviar.disabled = true
    
}