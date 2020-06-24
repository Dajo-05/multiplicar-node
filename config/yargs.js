const op = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime una tabla de multiplicar', op)
    .command('crear', 'Genera una tabla de multiplicar', op)
    .help()
    .argv;

module.exports = {
    argv
}