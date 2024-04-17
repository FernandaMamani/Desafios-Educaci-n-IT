console.log(titulo.innerHTML);


let datos1 = document.querySelectorAll("#prim-int");
//console.log(datos1);

let datos2 = document.querySelectorAll("#seg-int");
//console.log(datos2);


function nombreYApellido1() {
    let nombreInt1 = [];
    let apellidoInt1 = [];
    for (let i = 0; i < 2; i++) {
        if (datos1[i].innerText !== "") {
            nombreInt1.push(datos1[i].innerText);
            //console.log(nombreInt1);
        };


    }
    for (let i = 2; i < 4; i++) {
        if (datos1[i].innerText !== "") {
            apellidoInt1.push(datos1[i].innerText.toUpperCase());
        };
    }
    return '"' + nombreInt1.join(' ') + " " + apellidoInt1.join(' ') + '"';
}

function nombreYApellido2() {
    let nombreInt2 = [];
    let apellidoInt2 = [];
    for (let i = 0; i < 2; i++) {
        if (datos2[i].innerText !== "") {
            nombreInt2.push(datos2[i].innerText);
            //console.log(nombreInt2);
        };


    }
    for (let i = 2; i < 4; i++) {
        if (datos2[i].innerText !== "") {
            apellidoInt2.push(datos2[i].innerText.toUpperCase());
        };
    }
    return '"' + nombreInt2.join(' ') + " " + apellidoInt2.join(' ') + '"';
    //return [nombreInt2, apellidoInt2]
}


nombreYApellido1();
nombreYApellido2();

console.log("-----" + "\n" + "Integrante 1: " + nombreYApellido1() + "\n" + "Integrante 2: " + nombreYApellido2() + "\n" + "-----");



let promptColor;
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        if (datos1[i].innerText == datos2[j].innerText) {
            console.log("Hubo coincidencias en los nombres");
            promptColor = prompt("Hubo coincidencias en los Nombres. Ingresa un color para destacarlos :");
            datos1[i].style.backgroundColor = promptColor;
            datos2[j].style.backgroundColor = promptColor;
        }
    };
}
if (promptColor == undefined) {
    console.log("No hubo coincidencia en los Nombres");
}


let confirmacion = confirm("¿Desea comparar los apellidos?");

if (confirmacion == true) {
    let promptColor2;
    for (let i = 2; i < 4; i++) {
        for (let j = 2; j < 4; j++) {
            if (datos1[i].innerText == datos2[j].innerText) {
                console.log("Hubo coincidencias en los Apellidos");
                promptColor2 = prompt("Hubo coincidencias en los Apellidos. Ingresa un color para destacarlos :");
                datos1[i].style.backgroundColor = promptColor2;
                datos2[j].style.backgroundColor = promptColor2;
            }
        };
    }
    if (promptColor2 == undefined) {
        console.log("No hubo coincidencia en los nombres");
    }
}