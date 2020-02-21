// javascript


// CRear un objeto con propiedades de cada uno de nosotros y con métodos

// let miObjeto = {
//     gabriel: {
//         cabello: 'largo',
//         lentes: true,
//         barba: true,
//         guapo: true,
//         millonario: false,
//         metodos: {
//             cantar: function(estrofa) {
//                 let temporal =  'ok, voy a cantar la siguiente canción: ' + estrofa
//                 return temporal
//             },
//             bailar: function(cancion) {
//                 return 'ok, bailando ' + cancion + ' apasionadamente con una chica guapa'
//             }
//         }
//     }
// }

// console.log(miObjeto.gabriel.metodos.bailar('la vida es un carnaval'))

// ### Introducción a las clases

// A partir de ECMAScript 6 (2015) se integran las Clases a JS
//¿Para qué sirven las clases? Sirven para crear objetos de manera fácil y rápida
// Por ejemplo, vamos a crear el objeto gato con las propiedades: patas, pelos, sonido

// const gato1 = {
//     nombre: 'Gatito de prueba',
//     patas: true,
//     pelos: true,
//     sonido: 'miaw - miaw'
// }

// console.log(gato1)

// Hasta este momento he creado un objeto llamado gato que tienen las propiedades: nombre, patas, pelos y sonido.

// ¿Pero qué pasa si quiero crear varios gatos de manera fácil? La lógica nos indica que deberías crealos de la manera habitual (con objetos literales). Por ejemplo:

// const gato2 = {
//     nombre: 'Felix',
//     patas: true,
//     pelos: false,
//     sonido: 'cof - cof'
// }

// console.log('gato1 -> ', gato1, 'gato2 -> ', gato2)

// Hasta aquí todo es super fácil. Pero qué pasa si tengo que crear 234 gatos diferentes? Aquí es donde llegan al rescate las "clases", que son como "plantillas" que nos permiten crear objetos de manera fácil y rápida, sin dolor.

// PASOS PARA LA CREACIÓN DE CLASES

// 1. Definir la clase: Para ello usamos la palabra reservada class. Por ejemplo

// function cualquierNombre() {
//     this.nombre = 'Felix',
//     this.patas = true,
//     this.pelos = false,
//     this.sonido = 'miau - miai'
// }

// const prueba = new cualquierNombre()
// console.log(prueba)

// Pero si lo de arriba no es más que una función habitual. Entonces cuál es el chiste?

// Una importante diferencia entre las declaraciones de funciones y las declaraciones de clases es que las declaraciones de funciones son alojadas y las declaraciones de clases no lo son. (¿¿¿???)

// Al rescate llega una cosa llamada "método constructor" (¿Qué es un método en JS?). El constructor es un "constructor" que "construye" objetos a partir de un modelo. Así pues, vamos a usar un constructor.

// class miPlantillaParaCrearGatos {
//     constructor(name, legs, hair, sound) {
//         this.nombre = name,
//         this.patas = legs,
//         this.pelos = hair,
//         this.sonido = sound
//     }
// }

// const gatoDePrueba = new miPlantillaParaCrearGatos('fifi', true, 'abundante', 'tan - tan')
// console.log(gatoDePrueba.sonido)

// Entonces, con la plantilla "miPlantillaParaCrearGatos", puedo crear la cantidad de objetos que quiera simplemente nombrando a la clase y pasándole como parámetros las propiedades que le quiero asignar.

