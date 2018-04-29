console.log("Starting notes.js");

const fs = require('fs');

var fetchNotes = () => {
	try{
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);

	}catch(e){
		return [];
	}
}
var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note ={
		title,
		body
	};

	
	var duplicateNotes = notes.filter((note) => note.title === title);

	if(duplicateNotes.length === 0){
		notes.push(note);
		saveNotes(notes);
		return note;
	}

};

var getAll = () =>{
	return fetchNotes();
};

var removeNote = (title) =>{
	var notes =fetchNotes(title);
	var newNotes = notes.filter((note) => note.title!==title);
	saveNotes(newNotes);

	return notes.length!==newNotes.length;
};

var readNote = (title) =>{
	var notes =fetchNotes(title);
	var newNoteRead = notes.filter((note) => note.title==title);
	return newNoteRead[0];
};

var logNote = (note) => {
		console.log("---------");
		console.log('title: '+note.title);
		console.log('body: '+note.body);
};

module.exports = {
	addNote ,getAll,removeNote,readNote,logNote
};