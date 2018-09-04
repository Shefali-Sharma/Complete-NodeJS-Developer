const request = require('request');
const yargs = require('yargs');

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

// console.log(argv);
var encodedAddress = encodeURIComponent(argv.a);
// var encodedAddress = encodeURIComponent(argv['a']); -- Both will work
// decodeURTComponent -- converts encoded string to decoded string

request({
  url: 'https://maps.google.com/maps/api/geocode/json?address=' + encodedAddress,
  json: true
}, (error, response, body) => {
  // console.log(JSON.stringify(response, undefined, 2))
  if(error){
    console.log('Unable to connect to Google servers.');
  }else if(body.status === 'ZERO_RESULTS'){
    console.log('Unable to find that address');
  }
  else if(body.status === 'OK'){
    console.log('Address:' + body.results[0].formatted_address);
    console.log('Latitude:' + body.results[0].geometry.location.lat);
    console.log('Longitude:' + body.results[0].geometry.location.lng);
  }

});
