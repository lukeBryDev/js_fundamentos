let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70,
    },
    trajes: ['Mark I', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'End game', // si >1 palabra, y necesita separar con '-', encerrar en comillas. Y no se podra usar la notacion de . para acceder a ella
};
console.log(personaje);
console.log('nombre', personaje.nombre);
console.log('nombre', personaje['nombre']);
console.log('edad', personaje.edad);
console.log('coors', personaje.coords);
console.log('lat', personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length);

console.log('ultimo traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('vivo', personaje[x]);
console.log('ultima pelicula', personaje['ultima-pelicula']);

// Mas detalles:

delete personaje.edad; // Eliminar par

personaje.casado = true; // Agregar par

const entriesPares = Object.entries(personaje); // Listado de pares
console.log(entriesPares);

Object.freeze(personaje); // Convierte el obj inmutable en el momento de la instruccion. Pero solo a las asignaciones directas, no a las anidadas

const propiedades = Object.getOwnPropertyNames(personaje); // Listado de llaves

const valores = Object.values(personaje); // Listado de valores


