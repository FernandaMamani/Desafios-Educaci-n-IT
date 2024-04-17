// EJERCICIO 1

document.write("EJERCICIO 1");

let cantidadDeGatos = 10;
let contador = 1;
let emoji = "";

for (let i = 1; i <= cantidadDeGatos; i++) {
    switch (contador) {
        case 1:
            emoji = "😺";
            contador++;
            break;
        case 2:
            emoji = "😸";
            contador++;
            break;
        default:
            emoji = "😹";
            contador = 1;
    }

    document.write("<p>Gato #" + i + ": " + emoji + "</p>");
}


document.write("</br>");

//.............................................................................................................//

// EJERCICIO 2

document.write("EJERCICIO 2");


let cantidadDeGatos2 = 10;
let cantidadDePasos2 = 3;

for (let i = 1; i <= cantidadDeGatos2; i++) {
    let pasos = "";

    for (let j = 0; j < cantidadDePasos2; j++) {
        pasos += '🐾';
    }

    document.write("<p>Gato #" + i + ": 🐈" + pasos + " </p>");
}


document.write("</br>");

//................................................................................................................//

// EJERCICIO 3

document.write("EJERCICIO 3");


let cantidadDeGatos3 = 10;
let cantidadDePasos3 = 4;

for (let i = 1; i <= cantidadDeGatos3; i++) {
    let pasos = "";
    let animalito = "🐈";

    for (let j = 0; j < cantidadDePasos3; j++) {
        pasos += '🐾';
    }

    if (i % 2 === 0) {
        animalito = "🐈‍⬛";
    }

    document.write("<p>Gato #" + i + ": " + animalito + pasos + " </p>");
}