// Dudas:
// 1. Qué es un elemento de tipo símbolo en javascript
// 2. Cómo se llama este estilo de escitura tipo algo_así_como_esto


// Preparaciones: Software:

// Git - Github 
// Node.js
// SourceTree,
// Pluggins de Visual Studio Code

// pasos GIT
// 1. git status --> para ver qué cambios hay en mi entorno controlado
// 2. git add . || git add nomrbeDelArchivoQueQuieroComentar
// 3. git commit -m 'mi comentario'
// 4. git push --> para subirlo al repo de github ('nube')
// 5. git pull --> trae la última versión ( en caso de haber clonado un repo de alguien más )

// pasos para navegar en terminal (consola)}
// 1. subir un directorio: cd nombreDElDirectorio
// 2. bajar un directorio: cd ..


// Algunos requerimientos
// Instalación de VisualSC, Git, GitHub, Node.js ( para poder ejecturar Javascript en nuestra consola)

//ECMAScript 6 que salió en 2015 - Lenguaje de programación --> Javascript sería un dialecto dentro de ese lenguaje

//qué es ECMAScript https://devcode.la/blog/que-es-y-por-que-aprender-ecmascript/

// ### TIPOS DE DATOS EN JAVASCRIPT

//básicamente tenemos 6 tipos de datos:
// 1. String --> cadena de texto
// 2. Números --> número
// 3. Booleano --> true-false; 0-1; yes-no
// 4. Símbolos --> no sé, tarea
// 5. Null --> nulo
// Undefined --> no definido
// Objetos --> objetos

// Diferencia entre LET y VAR --> var permite declarar varias veces la misma variable. Let no lo permite y esto implica que va a lanzar un erro de sintaxis para NO REDECLARAR VARIABLES (genera bug)

var cadenaDeTexto = 'mi cadena de texto'
let number = 984728572
const booleano = false
var simbol = '#$'
var nulo = null
var indefinido = undefined
let miObjeto = {
    nombre: 'Gabriel',
    lastName: 'lópez'  
}

// Definición de variables. Las puedo definir básicamente con tres tipos de declaraciones: VAR, LET y CONST. Var y let son 'iguales' y Const es para almacenar datos que no varían (constante).


// ### FUNCIONES EN JAVASCRIPT

//Básicamnete tenemos dos formas de escribir funciones. 1 la más básica y conocida

// Estructura:
// function nombreDeMiFuncion(parametro1, parametro2, parametro3) {
//    let algo = " lo que quiera hacer aquí"
//     return algo
// }

// function MyCosa(comoMeDeLaGana) {
//     let temp = 'hola ' + comoMeDeLaGana
//     return temp
// }



// la siguiente función recibe 'ref' y 'dinero' como parámetros y entrega papas o pollo o nada dependiendo de lo que ingrese}

function chocorramos(ref, dinero) {
    let saludo = 'Hola, gracias por elegir nuestros productos, usted ha seleccionado la referencia: ' + ref + ' y ha ingresado $' + dinero + ' pesos'
    //empezamos a usar condicional
    if ( ref === "a1" && dinero === 5000) {
        return ('Su producto es: Papas')
    }
    else if ( ref === "a2" && dinero === 5000) {
        return ('Su producto es: Pollo')
    }
    else {
        return ('nada')
    }
}


//TAREA
// construir un objeto que contenga las características de apariencia del gato Gardfield (5 características) y agregar dentro del objeto 3 acciones  (funciones) (verbos) que permitan ejecutar las acciones: maullar, arañar y comer.

let garfield = {
    color: 'naranja',
    pelaje: 'abundante',
    contextura: 'gordo',
    ojos: 'verdes',
    talla: 'mediana',
    maullar: function maullar(){
        return 'miau, miau'
    },
    aragnar: function aragnar() {
        return 'ras, ras'
    },
    comer: function comer() {
        return 'jom, jom'
    } 
}

console.log(garfield.aragnar())
