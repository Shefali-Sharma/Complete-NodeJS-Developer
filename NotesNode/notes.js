console.log('Starting Notes.');

var addNote = (title, body) => {
  console.log('Adding Note', title, body);
};

var getAll = () => {
  console.log('Getting all Notes');
};

var readNote = () => {
  console.log('Reading Note');
};

var removeNote = () => {
  console.log('Removing Note');
};

module.exports = {
  addNote: addNote, //Or we can simply just write addNote - both are equivalent
  getAll, //Or we could have written getAll : getAll
  readNote,
  removeNote
};
