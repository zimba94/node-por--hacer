const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);

const colors = require('colors');




let comando = argv._[0];

switch (comando) {
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log("======Por Hacer=====".green);
            console.log("Tarea: ", tarea.descripcion);
            console.log("Estado: ", tarea.completado);
            console.log("====================".green);
        }
        //console.log("Listar");
        break;

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        //console.log(tarea);
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        //console.log("Actualizar");
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        //console.log("Actualizar");
        break;


    default:
        console.log("Comando no reconocido");
        break;
}