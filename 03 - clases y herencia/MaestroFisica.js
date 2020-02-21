const Maestro = require('./Maestro')

class MaestroFisica extends Maestro {
    constructor(materia, notas, edad, casado) {
        super(materia, notas),
        this.edad = edad,
        this.casado = casado
    }
}


const nuevoMaestroFisica = new MaestroFisica('carlos', [2, 4], 18, true)
// console.log(nuevoMaestroFisica)

console.log(nuevoMaestroFisica.aprobarCurso())

// Maestro --> 
// Maestro {
//     nombre: 'Paola',
//     materia: 'Química',
//     calificaciones: [ 3, 4, 5 ]
//   }

// 
// Maestro --> 
// Maestro {
//     nombre: 'Paola',
//     materia: 'Química',
//     calificaciones: [ 3, 4, 5 ],
//     edad: 12
//   }