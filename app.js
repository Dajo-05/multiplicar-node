/**
 * yarg: ese usa para aplicaciones de comando
 */
const { argv } = require('./config/yargs');
const colors = require('colors');

const { creaArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        creaArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`la ${archivo} se creo con Exito!`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('El comando no se puede reconocer');
        break;
}