let a = 10;
let b = a;

/// cuando trabajamos con primitivos, cualquier tipo de asignacion, o cuando lo mandamos en una funcion como argumento,
/// lo estamos mandando por valor. No importa si transformamos ola variable, o la asignamos a otra cosa, no estamos afectando
/// el miismo lugar en memoria, estamos pasando unicamente el valor.
a = 30;

console.log({ a, b });

let juan = { 'nombre': 'Juan' };
//let ana = juan; // ocupa el mismo espacio en memoria de juan
let ana = { ...juan }; // ocupa otro espacio en memoria

ana.nombre = 'Ana';
/// Cambia de nombre porque en js todos los objs son pasados por referencia.

/// Todos los primitivos se pasan por valor y 
/// todos los objetos se pasan por referencia.
/// En js todo es un obj exceptuando los primitivos.

console.log({ juan, ana });


const cambiaNombre = ({...persona}) => { // operador spread rompe relacion
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);

console.log({ peter, tony });

/// operador para separar todas las propiedades de un obj. spread `...`
/// cuando se usa dentro de los argumentos luego de abrir parentesis, es un operador rest,
/// quiere decir que une todos los argumentos en un array.
/// Cuando se utiliza fuera de ese lugar, quiere decir que es el operador spread

/// Con el operador spread podemos romper la referencia de hay en js, poder trabajar objs y hacer igualaciones que apuntes a diferentes espacios de memoria.



// Arrays

const frutas = ['Manzana', 'Pera', 'Fresa'];

// const otrasFrutas = frutas; // con esta igualacion, cualquier cambio en otrasFrutas tambien afecta a frutas
// const otrasFrutas = [...frutas]; // con esta no

// const otrasFrutas = frutas.slice(); // otra forma. Metodo corta arreglo y regresa los elementos que especifique.


// Cual de las dos formas es la mas eficiente?. Una forma de medirlo console.time('')
console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread'); // result: 0.005859375 ms

console.time('slice');
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice'); // result: 0.010986328125 ms

// conclusion: mas rapido y eficiente el operador spread

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});

