const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=70f5ec864b6056a5b1e6c239c6d94de5&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}