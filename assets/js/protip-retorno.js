function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido,
    }
}

// desde el ECMA script 5 cuando se quiere retornar un objeto y el nombre de la key es el mismo de la variable, basta con poner solo el nombre de la propiedad.

function crearPersonaOptimizado(nombre, apellido) {
    return { nombre, apellido }
}

// optimizado a funcion de flecha
const crearPersonaFlecha = () => ({ nombre, apellido }); // los parentesis indican que se desea retornar su contenido como un objeto y no el cuerpo de la funcion.

const persona = crearPersonaOptimizado('Brayan', 'Basto');
console.log(persona);

function imprimeArgs() {
    console.log(arguments);
}

// para obtener los arguments de una funcion de flecha (porque nativam enta solo se obtienen de las funciones tradicionales)
const inprimeArgs2 = (edad, ...args) => { //  ...args es el parametro res que creara un array con los paramatetros que sean recibidos
    // despues del parametro res no pueden ir mas argumentos. Si rquiere un argumento en especifico debe estar anter del parm res ej: (edad, ...args) 
    // el prim er argumento (edad) no se incluira en el array de args
    // console.log(args); 
    return args;
}

imprimeArgs(10, true, 'Brayan', [1, 2, 3])

const args = inprimeArgs2(23, 10, true, 'Brayan', [1, 2, 3]);
console.log(args);

// puedo usar el retorno (array) de la funcion  para extraer cada dato en variables.
const [trofeos, soltero, nombre, diasDispo] = inprimeArgs2(23, 20, true, 'Brayan', [4, 5, 6]);
console.log({ trofeos, soltero, nombre, diasDispo });

// puedo extraer solo el argumento que necesito
const { apellido: surname } = crearPersonaOptimizado('Enrique', 'Caicedo'); // entre llaves llamo al argumento que necesito, que esta referenciado en la funcion. Si se requiere otro nombre para la variable se declara seguido de la referencia y :
console.log({ surname });


// Desextructuracion de argumentos

let tony = {
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

// forma larga de hacerlo
// const imprimeProps = (personaje) => {
//     console.log('nombre', personaje.nombre);
//     console.log('codeName', personaje.codeName);
//     console.log('vivo', personaje.vivo);
//     console.log('edad', personaje.edad);
//     console.log('coords', personaje.coords);
// }

const imprimeProps = ({ nombre, codeName, vivo, edad, trajes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

imprimeProps(tony);