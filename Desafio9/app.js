document.addEventListener('DOMContentLoaded', function () {
    const personajes = {
        'Mario': 'Mario',
        'Luigi': 'Luigi',
        'Bowser': 'Bowser Morton Koopa',
        'Peach': 'Princesa Peach Toadstool',
        'Yoshi': 'T. Yoshisaur Munchakoopas',
        'Toad': 'Toad',
        'Toadette': 'Toadette',
        'Daisy': 'Princesa Daisy'
    };

    const botonPresentar = document.getElementById('boton-presentar');
    botonPresentar.addEventListener('click', function () {
        const nombreCorto = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
        const nombreCompleto = personajes[nombreCorto] || "(desconocido)";
        console.log(nombreCompleto);

        const elementoNombre = document.getElementById('nombre-personaje');
        if (elementoNombre) {
            elementoNombre.textContent = nombreCompleto;
        }


        if (personajes[nombreCorto]) {
            const elementoPersonaje = document.getElementById(nombreCorto.toLowerCase());
            if (elementoPersonaje) {
                elementoPersonaje.setAttribute('title', 'Presentado');
            }
        }

        botonPresentar.style.display = 'none';
    });
});