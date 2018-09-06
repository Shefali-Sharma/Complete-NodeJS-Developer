const request = require('request')

var getWeather = (latitude, longitude) => {
  request({
    url: 'https://api.darksky.net/forecast/ac9432701acb2c51c7945d5dcc0e7bf7/' + latitude + ',' + longitude,
    json:true
  },(error, response, body) => {
    if(!error && response.statusCode === 200)
    {
      console.log(body.currently.temperature);
    }
    else{
      console.log('Unable to fetch weather.');
    }
  });
};

module.exports = {
  getWeather
};
