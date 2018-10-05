console.log('>>> Starting Application <<<');

const fs    = require('fs');
const _     = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv  = yargs.argv;
let command = argv._[0]; // command index

if (command == 'create') {
    let message = notes.create(argv.title, argv.body);
    
    console.log(message);
} else if (command == 'list') {
    notes.list();

} else if (command == 'read') {
    notes.read(argv.title);

} else if (command == 'remove') {
    notes.destroy(argv.title);

} else {
    throw new Error('No Command Provided');
}