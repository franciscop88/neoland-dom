
document.addEventListener('DOMContentLoaded', function() {
    // 1.1 Usar querySelector para mostrar por consola el botón con la clase .showme
    const boton = document.querySelector('.showme');
    
    // Verificar si se encontró el botón
    if (boton) {
        console.log(boton); // Muestra el botón por consola
    } else {
        console.log('No se encontró ningún botón con la clase .showme');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
    const h1Pillado = document.querySelector('#pillado');
    
    if (h1Pillado) {
        console.log(h1Pillado); // Muestra el h1 con id "pillado" por consola
    } else {
        console.log('No se encontró ningún elemento con el id #pillado');
    }

    // 1.3 Usa querySelector para mostrar por consola todos los p
    const parrafos = document.querySelectorAll('p');
    if (parrafos.length > 0) {
        parrafos.forEach(parrafo => console.log(parrafo)); // Muestra todos los <p> por consola
    } else {
        console.log('No se encontraron elementos <p>');
    }

    // 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
    const pokemonElements = document.querySelectorAll('.pokemon');
    if (pokemonElements.length > 0) {
        pokemonElements.forEach(pokemon => console.log(pokemon)); // Muestra todos los elementos con clase .pokemon por consola
    } else {
        console.log('No se encontraron elementos con la clase .pokemon');
    }

    // 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
    const testMeElements = document.querySelectorAll('[data-function="testMe"]');
    if (testMeElements.length > 0) {
        testMeElements.forEach(element => console.log(element)); // Muestra todos los elementos con atributo data-function="testMe" por consola
    } else {
        console.log('No se encontraron elementos con el atributo data-function="testMe"');
    }

    // 1.6 Usa querySelector para mostrar por consola el tercer personaje con el atributo data-function="testMe".
    if (testMeElements.length >= 3) {
        const tercerPersonaje = testMeElements[2];
        console.log(tercerPersonaje); // Muestra el tercer elemento con atributo data-function="testMe" por consola (índice 2)
    } else {
        console.log('No hay suficientes elementos con el atributo data-function="testMe" para mostrar el tercero');
    }
});
