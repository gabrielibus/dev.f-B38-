const Maestro = require('./Maestro')

class MaestroMusica extends Maestro {
    constructor(materia, notas, antiguedad) {
        super(materia, notas),
        this.antiguedad = antiguedad
    }
}

const nuevoMaestroMusica = new MaestroMusica('musica', [9,5,8], '2 años')
console.log(nuevoMaestroMusica)