console.log('>>> Starting Notes Module <<<');

const fs    = require('fs');

module.exports = {
    create(title, body) {
        var notes = this.list();
        let noteData = { title, body };
        let duplicateNotes = notes.filter(note => note.title === title);

        if (duplicateNotes.length === 0) {
            notes.push(noteData);
    
            this.saveNotes(notes);
            
            return `${noteData.title} Has Been Created`;
        } else {
            throw new Error('Duplicated Title')
        }
    },
    list() {
        try {
            return JSON.parse(fs.readFileSync('notes-data.json'));
        } catch (error) {
            return [];
        }
    },
    read(title) {
        console.log('Adding Note', title, body);
    },
    destroy(title) {
        console.log('Adding Note', title, body);
    },
    saveNotes(notes) {
        return fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};