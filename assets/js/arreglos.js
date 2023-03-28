const arr0 = new Array(10); // Forma no convencional de definir un arreglo
const arr = []; // Forma mas convencional



console.log({ arr });


let videojuegos = ['Mario 3', 'Megaman', 'Chrono Trigger']; // Por lo general el contenido de los arreglos es de un solo tipo
console.log({ videojuegos });

let arregloCosas = [
    true,
    123,
    'Wpaje',
    1 + 2,
    function () { },
    () => { },
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr.Light', ['Dr. Willy', 'Woodman']]
]; // se pueden alamacenar elementos de diferentes tipos
console.log({ arregloCosas });
console.log(arregloCosas[0]); // true
console.log(arregloCosas[2]); // 'Wpaje'
console.log(arregloCosas[7][3]); // 'Dr.Light'
console.log(arregloCosas[7][4][1]); // 'Woodman'


