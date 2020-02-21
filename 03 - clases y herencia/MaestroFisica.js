const Maestro = require('./Maestro')

class MaestroFisica extends Maestro {
    constructor(nombre, materia, calificaciones, edad, casado) {
        super(nombre, materia, calificaciones),
        this.edad = edad,
        this.casado = casado
    }
}


const nuevoMaestroFisica = new MaestroFisica('Carlos', 'espanol', [9,6,2], 34,true )
console.log(nuevoMaestroFisica)

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