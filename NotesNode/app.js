console.log('Starting app.');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
// console.log(user);

//fs.appendFile('greeting.txt', 'Hello World!', function(err){
//  if(err){
//    console.log('Unable to write to file.');
//  }
//});

//fs.appendFileSync('greeting.txt', 'Hello ' + user.username + '!');
fs.appendFileSync('greeting.txt', `Hello ${user.username} !`);
