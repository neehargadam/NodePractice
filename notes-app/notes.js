const fs = require("fs");
const chalk = require('chalk')

const getNotes = function () {
    return "Your notes...";
};

const addNote = function (title, body) {
    const notes = loadNotes();
    debugger;
    const duplicateNotes = notes.filter((note) => note.title === title);
    const dupicateNote = notes.find((note) => note.title === title)
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title;
    // });
    //if (duplicateNotes.length === 0) {
    if (!dupicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log("Note added successfully!");
    } else {
        console.log("Note already exists!");
    }
};

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const removeNote = function (title) {

    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    });

    if (notesToKeep.length !== notes.length) {
        console.log(chalk.inverse.green('Note deleted!'));
    } else {
        console.log(chalk.inverse.red('No note found!'));
    }
    saveNotes(notesToKeep);
    //console.log("Note has been removed successfully ");
};

const listNotes = () => {
    console.log(chalk.inverse("Your Notes"));
    const notes = loadNotes();
    notes.forEach((element) => {
        console.log(element.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else {
        console.log(chalk.red.inverse('Note not found!'))

    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};
