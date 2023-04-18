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

console.log('4 condiciones ', true && true && true && false); // false

console.warn('Or'); // si alguno de los dos o los dos es true, Regresa true.
// || conocido como la tuberia o 'pipe' 
console.log(true || false); // true
console.log(false || false); // false. Unica manera de que retorne false

console.log(regresaTrue() || regresaFalse()); // Js idetifica rl primer valor tru y retorna true, no evalua lo demas

console.log('4 condiciones ', true || true || true || false); // true

console.warn('Asignaciones'); // si alguno de los dos o los dos es true, Regresa true.

/// Variables sin valor
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
// TIpo de asignacion poco comun. Evalua cada valor.
const a0 = true && 'Hola Mundo' && 150; // 150
// Si tiene false no evalua mas. Qeuda en false
const a1 = false && 'Hola Mundo' && 150; // false
const a2 = 'Hola' && 'Mundo' && soyFalso; // false

console.log({ a0, a1, a2 });

// Es mas comun hacer asignaciones con OR. Evalua hasta encontrar un valor y lo asigna y deja de ejecutar lo demas.
const a3 = soyFalso || 'Ya no soy falso'; // 'Ya no soy falso'
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo'; // 'Ya no soy falso de nuevo'
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo'; // true


console.log({ a3, a4, a5 });

// ejemplo:
// un if else no deberia llegar a esta complejidad
if (regresaFalse() && regresaTrue() && (true || false || true)) {
    console.log('Hocer algo');
} else {
    console.log('Hocer otra cosa');
}
