console.log('Starting Notes.');

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e){

  }


  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var getAll = () => {
  console.log('Getting all Notes');
};

var getNote = (title) => {
  console.log('Getting Note', title);
};

var removeNote = (title) => {
  console.log('Removing Note', title);
};

module.exports = {
  addNote: addNote, //Or we can simply just write addNote - both are equivalent
  getAll, //Or we could have written getAll : getAll
  getNote,
  removeNote
};
