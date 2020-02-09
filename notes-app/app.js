const yargs = require("yargs");
const notes = require("./notes");
const chalk = require('chalk')

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);

        // console.log('Title: ', argv.title)
        // console.log('Body: ', argv.body)
    }
});

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: "list",
    describe: "Lists all the notes",
    handler: function () {
        notes.listNotes();
        // console.log("Listing all the notes!");
        // const i = 3;
        // for (let index = 1; index <= 3; index++) {
        //     console.log("Note" + index);
        // }
    }
});
yargs.command({
    command: 'read',
    describe: 'Read the note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        notes.readNote(argv.title)
        //console.log('printing the note!')
    }
})

yargs.parse();

//***************************************Yargs Example************************************
// const yargs = require('yargs')
// yargs.version('1.1.0')

// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//     handler: function () {
//         console.log('Adding a new note!')
//     }
// })

// yargs.command({
//     command: 'remove',
//     describe: 'Remove a note',
//     handler: function () {
//         console.log('Removing a note!')
//     }
// })

// yargs.command({
//     command: 'list',
//     describe: 'Lists all the notes',
//     handler: function () {
//         console.log('Listing all the notes!');
//         const i = 3;
//         for (let index = 1; index <= 3; index++) {
//             console.log('Note' + index)
//         }
//     }
// })

// yargs.command({
//     command: 'read',
//     describe: 'Read the note',
//     handler: function () {
//         console.log('printing the note!')
//     }
// })
// console.log(yargs.argv)

//***************************************process.argv Example************************************
//console.log(process.argv)
//const command =process.argv[2]

// if(command==='add')
// {
//     console.log('Adding Item')
// }
// if(command==='delete')
// {
//     console.log('Deleting Item')
// }

//***************************************chalk Example************************************
// const chalk=require('chalk')
// console.log(chalk.yellow('Yellow'))
// console.log(chalk.hex('#DEADED').underline('Hello, world!'))
// const name = 'Neehar!';
// console.log(chalk.green.underline('Hello %s'), name);

//***************************************validator Example************************************
// const validator=require('validator')
// console.log(validator.isEmail('neehargadam@gmail.com'))
// console.log(validator.isURL('https://neehargadam.wordpress.com/'))

//***************************************Importing notes Example************************************
// const getNotes=require('./notes')
// const message=getNotes()
// console.log(message)
