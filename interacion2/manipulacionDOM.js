document.addEventListener('DOMContentLoaded', function() {
    // 2.1 Inserta dinámicamente un div vacío en el HTML
    const divVacío = document.createElement('div');
    document.body.appendChild(divVacío);

    // 2.2 Inserta dinámicamente un div que contenga un párrafo
    const divConParrafo = document.createElement('div');
    const parrafo = document.createElement('p');
    parrafo.textContent = 'Hola, soy un párrafo dinámico!';
    divConParrafo.appendChild(parrafo);
    document.body.appendChild(divConParrafo);

    // 2.3 Inserta dinámicamente un div que contenga 6 párrafos usando un loop
    const divConPárrafos = document.createElement('div');
    for (let i = 0; i < 6; i++) {
        const parrafoLoop = document.createElement('p');
        parrafoLoop.textContent = `Párrafo ${i + 1}`;
        divConPárrafos.appendChild(parrafoLoop);
    }
    document.body.appendChild(divConPárrafos);

    // 2.4 Inserta dinámicamente un párrafo con el texto 'Soy dinámico!'
    const parrafoDinamico = document.createElement('p');
    parrafoDinamico.textContent = 'Soy dinámico!';
    document.body.appendChild(parrafoDinamico);

    // 2.5 Inserta texto en el h2 con clase .fn-insert-here
    const h2Element = document.querySelector('h2.fn-insert-here');
    if (h2Element) {
        h2Element.textContent = 'Wubba Lubba dub dub';
    }

    // 2.6 Crea una lista ul > li basada en el array de aplicaciones
    const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
    const ulElement = document.createElement('ul');
    apps.forEach(app => {
        const liElement = document.createElement('li');
        liElement.textContent = app;
        ulElement.appendChild(liElement);
    });
    document.body.appendChild(ulElement);

    // 2.7 Elimina todos los nodos con clase .fn-remove-me
    const removeMeElements = document.querySelectorAll('.fn-remove-me');
    removeMeElements.forEach(element => {
        element.parentNode.removeChild(element);
    });

    // 2.8 Inserta un párrafo 'Voy en medio!' entre dos div
    const divs = document.querySelectorAll('div');
    if (divs.length >= 2) {
        const pElement = document.createElement('p');
        pElement.textContent = 'Voy en medio!';
        const secondDiv = divs[1];
        document.body.insertBefore(pElement, secondDiv);
    }

    // 2.9 Inserta un párrafo 'Voy dentro!' dentro de todos los div con clase .fn-insert-here
    const insertHereDivs = document.querySelectorAll('.fn-insert-here');
    insertHereDivs.forEach(div => {
        const pElementInside = document.createElement('p');
        pElementInside.textContent = 'Voy dentro!';
        div.appendChild(pElementInside);
    });
});
