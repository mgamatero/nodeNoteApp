// var obj = {
//     name: "Andrew",
//     gender: 'Male'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(obj.gender)

// var personString = '{"name":"Andrew","age":34}'
//    var personObj = JSON.parse(personString);
//    console.log(personObj.age)    
//    console.log(personObj)        

const fs = require ('fs')

var originalNote = {
    title: 'Some Title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote)

fs.writeFileSync('notes.JSON', originalNoteString);

var noteString = fs.readFileSync('notes.JSON');
var note = JSON.parse(noteString)
console.log(typeof note)
console.log(note)