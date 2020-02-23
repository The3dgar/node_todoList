const descripcion= {
  alias: 'd',
  demand: true,
  desc: 'Descripcion de la tarea por hacer'
}

const completado= {
  alias: 'c',
  default: true,
  desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
  .command('crear', 'Crea un elemento', {descripcion})
  .command('borrar','Borra un elemento', {descripcion})
  .command('actualizar', 'Actualiza el estado completado de una tarea',{descripcion, completado})
  .help()
  .argv

module.exports = {
  argv
}