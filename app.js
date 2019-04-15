const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: "Direccion de la ciudad para obtener el clima.",
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//argv.direccion

//lugar.getLugarLatLng(argv.direccion)
//   .then(console.log)


// clima.getClima(40.75, -74)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const clima = await clima.getClima(coord.lat, coord.lng);
        return `El clima de ${coord.direccion} es de ${temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}.`;
    }
}

getInfo(argv.direccion)