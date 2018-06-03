console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

//var user = os.userInfo();
// console.log(user);

//fs.appendFile('greeting.txt', 'Hello World!', function(err){
//  if(err){
//    console.log('Unable to write to file.');
//  }
//});

//fs.appendFileSync('greeting.txt', 'Hello ' + user.username + '!');

//fs.appendFileSync('greeting.txt', `Hello ${user.username} ! You are ${notes.age}.`);

//console.log('Result:', notes.add(9,-2));

//console.log(_.isString(true));
//console.log(_.isString('Shefali'));

var filteredArray = _.uniq(['Shefali', 1, 'Shefali', 1, 2, 3, 4]);

console.log(filteredArray);
