const request = require('request')

var getWeather = (latitude, longitude, callback) => {
  request({
    url: 'https://api.darksky.net/forecast/ac9432701acb2c51c7945d5dcc0e7bf7/' + latitude + ',' + longitude,
    json:true
  },(error, response, body) => {
    if(error) {
      callback('Unable to connect to Forecase.io server.');
    }
    else if (response.statusCode == 400){
      callback('Unable to fetch weather.');
    }
    if(response.statusCode === 200)
    {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports = {
  getWeather
};
