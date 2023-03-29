function saludar() { // centralizar la logica de un procedimineto que podemos ejecutar varias veces
    console.log('Hola mundo'); // esto es un metodo (funcion dentro de un obj)
    console.log(arguments); // Las funciones tradicionales (function) al ejecutarse tienen un obj implicito llamado `arguments` que hace referencia a todos los objetos enviados al ejecutar la funcion
    return 1;
}

// var saludar = 'hola'; // arroja error porque sobre escribe la funcion. Por eso no usar var

// Mejor definir la funcion anonima asignandola a una constante:

const saludar2 = function (nombre) { // Con argumentos
    console.log('Hola ' + nombre);
}

/// Funciones de flecha o Lambda Function implementadas en ECMAScript 6 o JavaScript del 2015
/// Son un poco mas eficientes que las funcones tradicionales y evitan varios problemas con el obj especial dis
const saludarFlecha = () => { // Definicion de funciones anonimas con flecha
    console.log('Hola flecha');
}

const saludarFlecha2 = (nombre) => { // paraentesis opcionales, pero es buena practica usarlos
    console.log('Hola flecha ' + nombre);
}

function sumar(a, b) {
    return a + b;
}

// cunado una funcion de flecha tiene solo un return una sola linea se puede resumir el codigo asi:
const sumar2 = (a, b) => a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

/// Llamados de las funciones. Cada que se llama se ejecuta su cuerpo

const retornoDeSaludar = saludar('Brayan', false, 23, 'Colombia'); // 1 definido en el `return` de la funcion
console.log({ retornoDeSaludar });

saludar2('Brayan'); // con argumentos

saludarFlecha();

saludarFlecha2('Brayan');

console.log(sumar(2, 2));
console.log(sumar2(2, 2));

console.log(getAleatorio());
console.log(getAleatorio2());