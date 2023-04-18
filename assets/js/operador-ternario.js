/**
 * Dias de semana abrimos a las 11
 * pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si esta abierto hoy....

const dia = 4; // 0: domingo
const horaActual = 10;


let horaApertura;
let mensaje; // esta abierto, esta cerrado, hoy abrimos a las xx

// if(0 || dia === 6) {
// if ([0, 6].includes(dia)) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Entre semana');
//     horaApertura = 11;
// }

/// Operdor ternario. Condicion entre parentesis es buena practica
horaApertura = ([0, 6].includes(dia)) ? 9 : 11;

// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`; // Interpolacion de strings. Con backTips
// }

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaActual, horaApertura, mensaje });
