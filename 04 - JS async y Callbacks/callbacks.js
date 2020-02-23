// Primero instalamos node-fetch, para hacer peticiones a una url. En consola escibimos: npm install node-fetch

const fetch = require('node-fetch')  // Importamos node-fetch al documento:

//Callbacks: Los callback son funciones "A" que pasan como parámetros de una función B para ser ejecutadas por B ¿WTF?.
//Por ejemplo: Vamos a crear una función que imprima una cadena de texto:

// Vamos a usar la sintaxis de funciones tipo flecha introducidas en ECMAScript 6
const imprimirCadena = () => {
    console.log('"If you can dream it, you can code it"')
}

//Ahora, vamos a crear una función que reciba como parámetro cualquier otra función

const ejecutarCallback = (unCallBack) => {
    // el callback es una función que entra a ESTA función como un parámetro llamado "unCallBack"
    // a continuación, vamos a ejecutar la función que entra como parámetro adicionando "()"
    unCallBack()
    // finalmente voy a hacer un console.log bien chimbita.   \n   agrega saltos de línea
    console.log('\n La función que entró como parámatro es: \n\n ****************** \n' + unCallBack + "\n ******************\n")
}

//Ahora vamos a llamar a la función "ejecutar Callback" y vamos a pasar como parámetro la función "imprimirCadena"
ejecutarCallback(imprimirCadena)

// Otro ejemplo: 
// Crear una función que imprima en consola el 'status Code' de una petición fetch a una página web cualquiera --> ¿qué es status code?.
// Esta función debe ser ejecutada desde otra función que haga la petición a la url de prueba con un fetch.

const urlOk = "https://porquemedalaganadeescribir.blogspot.com/2020/01/test.html" // Página para hacer un GET de prueba. La página existe
const urlFail = "https://porquemedalaganadeescribir.blogspot.com/2020/01/test2.html" // Página para hacer un GET de prueba. La página no existe

// Primero creo una función que va a "consolear" el status code de la petición a las url de prueba
function imprimirRespuesta(respuestaAlFetch) {
    console.log(respuestaAlFetch.status, " " + respuestaAlFetch.statusText) //respuestaAlFetch.status devuelve el status code de la petción. Por ejemplo: 404 not found, 200 ok, etc.
}

// Ahora creo una funcion que recibirá a imprimirRespuesta como parámetro
function miFuncionQueRecibeUnCallback(unCallBack) {
    fetch(urlOk) //hace una petición a una página web. Esta respuesta tarda un par de segundos en regresar.
        .then(promesaResuelta => unCallBack(promesaResuelta)) // Cuando la respuesta de la petición es positiva (resuelta), se ejecuta la función que entró como parámetro
        .catch(promesaRechazada => unCallBack(promesaRechazada))// Cuando la respuesta de la petición fetch es negativa (no resuelta)
}

// Aquí ejecuto la función
miFuncionQueRecibeUnCallback(imprimirRespuesta)

