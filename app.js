const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')
const titleOptions = {
    describe:'Title of note',
    require: true,
    alias: 't'
}
const bodyOptions = {
    describe:'Body of note',
    require: true,
    alias: 'b'
}
const argv = yargs
.command('add','Add a new note',{
title:titleOptions,
body:bodyOptions
}).command('list','List all notes')
.command('read', 'Read a note',{
    title:titleOptions,
})
.command('remove','Remove a note',{
    title:titleOptions,
})
.help()
.argv;
var command = argv._[0];
// console.log('Command: ',command);
// console.log('Process', process.argv);
// console.log('Yargs', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log(note, " added.")
        notes.logNote(note)
    }
    else {
        console.log('Note title taken')
    }

}
else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes(s).`)
    allNotes.forEach((note)=>notes.logNote(note))
}
else if (command === 'read') {
    var noteRead = notes.getNote(argv.title)
    if (noteRead) {
        notes.logNote(noteRead)
    }
    else {
        console.log('Note not found');
    }
}
else if (command === 'remove') {
    var noteRemove = notes.removeNote(argv.title)
    //Ternary expressions
    var message = noteRemove ? 'Note was removed' : 'Note not found';
    console.log(message)
}
else {
    console.log('Command not found');
}













// var user = os.userInfo();
// console.log(user);

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));

// fs.appendFileSync('greetings.txt','Hello there, ' + user.username)
// fs.writeFileSync('greetings.txt',`Hello there ${user.username}`)

//call add function in notes
// console.log(notes.add(9,229))

// var filteredArray = _.uniq([2,2,2,2,5,'665',7,'665',8,665,5,6,2])
// console.log(filteredArray)

// var sentence = "The dog is brown";
// var reversedSentence =''
// for (var i = sentence.length-1;i>=0;i--){
// reversedSentence += sentence[i];
// }
// console.log(reversedSentence)