const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
  a:{
    demand: false,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if(errorMessage){
//     console.log(errorMessage);
//   } else{
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });


// ac9432701acb2c51c7945d5dcc0e7bf7
// https://api.darksky.net/forecast/ac9432701acb2c51c7945d5dcc0e7bf7/39.9350642,-75.1516194


weather.getWeather(39.9350642, -75.1516194);
