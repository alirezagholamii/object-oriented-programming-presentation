class Note {
    constructor(id) {
        // ...
    }

    save(text) {
        // save process
    }
}

let note = new Note(429);
note.save("Let's do this!");


/*

class ReadonlyNote extends Note {
     save(text) {
        throw new Error("Can't update readonly notes");
    }
}

let note = new ReadonlyNote(429);
note.save("Let's do this!");

*/


/*
class Note {
    constructor(id) {
        // ...
    }
}

class WritableNote extends Note {
    save(text) {
        // save process
    }
}

*/