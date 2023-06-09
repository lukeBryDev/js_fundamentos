// Extructuras de control: Altera la forma natural de la ejecucion de codigo. Normalmente es linea por linea

let a = 5;

if (a > 10) { // bool. Pero aveces undefined, null, una asignacion
    console.log('a es mayor a 10'); // solo se ejecuta si se cumple la condicion
} else { // caso contrario de la consicion inicial
    console.log(' a es menor a 10');
}

// console.log('Fin del programa'); // si no se cumple la consicion de arriba, solo se ejecuta esta linea. Si si, se ejecuta de ultima

const hoy = new Date();
let dia = hoy.getDay(); // 0: domingo, 1: lunes, 2: martes ...

console.log({ dia });

// = asignacion
// == evalua si son iguales sin importar el tipo
// ==== evalua si es iguales con todo y tipo

if (dia === 1) {
    console.log('Lunes');
} else if (dia === 2) { // evalua otra condicion consecutiva
    console.log('Martes');
} else if (dia === 3) {
    console.log('Miercoles');
} else if (dia === 4) {
    console.log('Jueves');
} else if (dia === 5) {
    console.log('Viernes');
} else {
    console.log('Fin de semana');
}


// Alternativa a if else o switch:

// Unicamente con objs

dia = 3; // 0:domingo, 1:lunes ...

const diasLetras = {
    0: "domingo",
    1: "lunes",
    2: "martes",
    3: "miercoles",
    4: "jueves",
    5: "viernes",
    6: "sabado"
};

const diasLetras2 = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado"
];


// dia de la semana
console.log( diasLetras[dia] || 'Dia no existe'); // || evalua si es undefined o null y retorna valor
console.log( diasLetras2[dia] || 'Dia no existe');
 