Node JS Command-line App note keeper app.

- Ability to create, list, read and delete notes
- Node.js, NPM (yargs, lodash)

Commands:


- node app.js -add -t=noteTitleHere -b="noteBodyHere"  ----  Adds a note
- node app.js -list  ----  Lists all the notes
- node app.js -read -t=noteTitleHere  ----  List the note with the title
- node app.js -remove -t=noteTitleHere   ----  Removes the note with the title

- "-t" is a flag that takes a title, "-b" is a flag that takes the body, or content of the note


