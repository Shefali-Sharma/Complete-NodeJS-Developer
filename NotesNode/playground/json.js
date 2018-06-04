// var obj = {
//   name: 'Shefali'
// };
//
// var stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Shefali", "age": 25}';
// var person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);  //Takes a regular JSON object and converts it to string
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);  //Takes a string and converts to JSON object
console.log(typeof note);
console.log(note.title);
