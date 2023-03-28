// Propiedades (variable dentro de todos los arreglos) y metodos (funciones internas de los arreglos) de los arreglos

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chromo', 'Bomberman'];
console.log('Largo:', juegos.length);
console.log('primero:', juegos[0]);
console.log('ultimo:', juegos[juegos.length - 1]);

// barrido
juegos.forEach(
    (elemento, indice, arr) => {
        console.log(elemento, indice, arr);
    }
); // Ejecuta una instruccion por cada elemento

let nuevaLogitud = juegos.push('F-Zero'); // Inserta nuevo elemento al final del arregtlo y retorna su nueva longitud
console.log('Largo nuevo:', nuevaLogitud, juegos);

nuevaLogitud = juegos.unshift('Fite Emblem'); // Inserta nuevo elemento al inicio del arreglo
console.log('Largo nuevo:', nuevaLogitud, juegos);

let juegoBorrado = juegos.pop(); // Elimina el ultimo elemento y lo retorna
console.log('Juego borrado:', juegoBorrado, juegos);

let pos = 1;

let juegosBorrados = juegos.splice(pos, 2); // Borra varios elementos desde la posicion indicada
console.log('Juegos borrados:', juegosBorrados, juegos);

let metroidIndex = juegos.indexOf('Metroid'); // Retorna el indice requerido
console.log('metroidIndex:', metroidIndex, juegos);

// java script es CaSeSeNsItIvE