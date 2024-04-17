
window.onload = function () {

    var boton = document.createElement('button');
    boton.innerHTML = 'Cambiar Estilo';
    boton.id = 'cambioEstilo';


    boton.style.padding = '8px 16px';
    boton.style.fontSize = '16px';
    boton.style.cursor = 'pointer';
    boton.style.backgroundColor = '#4CAF50';
    boton.style.color = 'white';
    boton.style.border = 'none';
    boton.style.borderRadius = '4px';

    boton.onmouseover = function () {
        this.style.backgroundColor = '#45a049';
    };

    var div = document.querySelector('.button-css');

    div.style.textAlign = 'right';

    div.insertBefore(boton, div.firstChild);


    boton.addEventListener('click', function () {
        var currentStyle = document.getElementById('estiloDinamico');
        var newStyle = './Css/estilos.css';


        switch (currentStyle.href.split('/').pop()) {
            case 'estilos.css':
                newStyle = './Css/estilos-peliculas.css';
                break;
            case 'estilos-peliculas.css':
                newStyle = './Css/estilos-urbano.css';
                break;
            case 'estilo-urbano.css':
                newStyle = './Css/estilos.css';
                break;
            default:
                newStyle = './Css/estilos.css';
                break;
        }
        currentStyle.href = newStyle;
    });
}