// Polymorphism

/*
describes the ability
of an object or a method to have many forms 
*/



class Animal {
    constructor(name) {
        this.name = name
    }

    eats() {
        console.log(`${this.name} eats food`)
    }

}

class Alligator extends Animal {
    // constructor(name){
    //     super(name)
    // }
    eats() {
        // super.eats();
        console.log(`${this.name} eats fishes`);
    }
}

const murphy = new Alligator('Murphy');
murphy.eats()

// https://www.w3schools.com/java/java_polymorphism.asp