console.log("Starting app");

const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions ={
	describe: 'Title of note',
			demand: true,
			alias: 't'
};

const argv = yargs
	.command('add','Add a new node',{
		title: titleOptions,
		body: {
			describe: 'Content for the note',
			demand: true,
			alias: 'b'
		}
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note',{
		title: titleOptions
	})
	.command('remove', 'Remove a note', {
		title: titleOptions
	})
	.help()
	.argv;


var command = argv._[0];
console.log('Command:', command);
console.log('Yargs:',argv);

if (command==='list') {
	var allNotes = notes.getAll();
	console.log('printing '+allNotes.length+' notes!');
	allNotes.forEach((note)=> notes.logNote(note));
}else if(command==='add'){
	var note = notes.addNote(argv.title, argv.body);
	if(note){
		console.log("Note saved!!");
		notes.logNote(note);
		
	}else{
		console.log("Note not saved , duplicate title");
	}
}else if(command==='remove'){
	var noteRemove = notes.removeNote(argv.title);
	var message = noteRemove? 'Note removed!':'Note not found.';
	console.log(message);
}else if(command==='read'){
	var noteRead = notes.readNote(argv.title);
	if(noteRead){
		console.log("Note readed!!");
		notes.logNote(noteRead);
	}else{
		console.log("Note not found!");
	}
}else{
	console.log("Command not recognised");
}