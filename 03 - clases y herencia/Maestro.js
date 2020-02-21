// Clases y herencias

// Ya vimos que las clases son como plantillas, o mejor dicho, modelos, que permiten la creación fácil de objetos. Las clases pueden heredarse como veremos a continuación.

// Vamos a crear una clase que nos permita ingresar rápidamente los maestros de una institución según su materia.

//Hacer superclase Maestro y subclases Maestro de Física y 
//    Maestro de Música y a cada uno asignarle su materia y 
//    calcular su promedio de grupo a partir de calificaciones	 
//    (puedes usar arreglos). El maestro de física tiene un 
//    atributo "antigüedad" que guarda un valor numérico, 
//    mientras que el maestro de música tiene un atributo "edad"
//    también guardando un valor numérico.


class Maestro {
    constructor(materia, notas) {
        this.materia = materia,
        this.notas = notas
    }
}


module.exports = Maestro















// class Maestro {
//     constructor(nombre, materia, calificaciones) {
//         this.nombre = nombre,
//         this.materia = materia, 
//         this.calificaciones = calificaciones
//     }
//     calcularPromedio() {
//         var acumulado = 0
//         var longitud = this.calificaciones.length -1
//         for (var i in this.calificaciones) {
//             acumulado = acumulado + this.calificaciones[i]   
//         }
//         var resultado = acumulado / (this.calificaciones.length)
//         return resultado
//     }
// }


// const maestro1 = new Maestro('Gabriel', 'física', [9,8,7])
// const maestro2 = new Maestro('Paola', 'Química', [3,4,5])

// console.log(maestro1, maestro2)


// module.exports = Maestro