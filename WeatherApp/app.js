const request = require('request');

request({
  url: 'https://maps.google.com/maps/api/geocode/json?address=%201301%20lombard%20street%20philadelphia&key=AIzaSyBmRAAxtCv3MgOCDggrJGpjCcx-HV0VK7U',
  json: true
}, (error, reponse, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
