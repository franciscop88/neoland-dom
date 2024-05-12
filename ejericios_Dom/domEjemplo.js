
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar  aca el botón por su clase (.showme)
    const boton = document.querySelector('.showme');
    
    // Verifica si se encontró el botón
    if (boton) {
        console.log(boton); // Muestra el botón por consola
    } else {
        console.log('No se encontró ningún botón con la clase .showme');
    }
});
