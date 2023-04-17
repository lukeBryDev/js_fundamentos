const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}
const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

// la negacion invierte el valor booleano !
console.warn('Not a la negacion');
console.log(true); // true
console.log(!true); // false
console.log(!!false); // false. Usar lla doble negacion no es comun

console.log(!regresaFalse()); // true

console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // true

console.log('--------');
console.log(regresaFalse() && regresaTrue()); // false. Js al identificar el primer elemento de la condicion, retorna falso y no ejecuta los demas elementos de la condicion
console.log(regresaTrue() && regresaFalse()); // false. Como la que primero se ejecuta es true, ejecuta la siguiente.

// Uso bastante comun. Ejecutar segun consiciones
regresaTrue() && regresaFalse() // Solo ejecuta la segunda condicion si la primera es verdadera

console.warn('Or'); // si alguno de los dos o los dos es true, Regresa true
console.log(true || false); // true
console.log(false || false); // false. Unica manera de que retorne false

console.log(regresaTrue() || regresaFalse()); // Js idetifica rl primer valor tru y retorna true, no evalua lo demas
