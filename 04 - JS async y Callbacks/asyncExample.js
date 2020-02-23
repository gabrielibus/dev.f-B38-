
const fetch = require('node-fetch') // Instalando la librería node-fetch en node.js para poder hacer peticiones fetch
const url = "https://porquemedalaganadeescribir.blogspot.com/2020/01/test.html" // Página de prueba para hacer un GET de prueba

// Regular expression  https://regexr.com/
// https://puphpet.com/#nginx

// Código Asíncrono con manejo de promesas
const promesas = function prueba() {
    fetch(url) // esta respuesta se va a demorar mientras el servidor 
    .then(response => console.log(response) )
}

// esto salió en ECMAScript 8
const otraPrueba = async function miCosa() {
    const respuesta = await fetch(url)
}

// // Código asíncron o con manejo de Async - Await
// const asincrono = async function prueba() {
//     try {
//         const temp = await fetch(url)
//         return console.log(temp)
//     }
//     catch (err) { console.log(err) }

// }

|
const miFucnionDePrueba = () => {
    setTimeout(() => {
        console.log('este es el setTimeOut')
    }, 4000); //4000 milisegundos = 4 segundos
}

console.log(miFucnionDePrueba())



// // asincrono()

// // ### Vamos a simular esto mismo con un método de JS llamado setTimeout


// const respuestaLenta = function () {
//     setTimeout(() => {
//         console.log ('me disparo después de 4 segundos, porque soy muy lento')
//     }, 4000);
// }

// const respuestaInmediata = function () {
//     console.log ('Soy instantaneo')
// }

// // console.log(promesas())
// console.log(asincrono())