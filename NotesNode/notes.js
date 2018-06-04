console.log('Starting Notes.');

var addNote = (title, body) => {
  console.log('Adding Note', title, body);
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
