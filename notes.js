console.log('Starting notes.js')

var fs = require('fs')

var fetchNotes = () => {
    try {
        var notesArray = []
        var stringNotes = fs.readFileSync("notesdata.JSON")
        notesArray = JSON.parse(stringNotes)
        return notesArray;
    }

    catch (e) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync("notesdata.JSON", JSON.stringify(notes))
}

var addNote = (title, body) => {
    var notesArray = fetchNotes();

    var note = {
        title: title,
        body: body
    }


    var duplicateTitle = notesArray.filter((note) => note.title === title);

    if (duplicateTitle.length === 0) {
        notesArray.push(note)
        saveNotes(notesArray)
        return note;

    }

    else {
        console.log("This title already exists!")
    }

};

var getAll = () => {
    var notesArray = []

    try {
        var stringNotes = fs.readFileSync("notesdata.JSON")
        notesArray = JSON.parse(stringNotes)
        return notesArray;
    }

    catch (e) {
        // console.log(e)
        console.log("No file exists.")
    }
}


var getNote = (title) => {
    var notesArray = fetchNotes();
    var readNoteFromArray = notesArray.filter((note)=> note.title === title) 
    // console.log(readNoteFromArray)

    return readNoteFromArray[0]
}

var removeNote = (title) => {
    // var note = {
    //     title: title,
    //     body: body
    // }
    var notesArray = fetchNotes();
    var removedNotesArray = notesArray.filter((note) => note.title !== title);
    // console.log(removedNotesArray)
    saveNotes(removedNotesArray)

    return notesArray.length !== removedNotesArray.length
}

var logNote = (note) =>{
    debugger;
    console.log('---');
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
}

module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote,
    logNote:logNote
};

// module.exports.add = (a,b) =>{
//     return a + b;
// }