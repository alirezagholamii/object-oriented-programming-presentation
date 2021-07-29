// Constructor Pattern

/*
In JavaScript, constructor functions are generally considered a reasonable way to implement instances. 
By simply prefixing a call to a constructor function with the keyword 'new',
you can tell JavaScript you would like function to behave like a constructor and instantiate a new object with
the members defined by that function.Inside a constructor,
the keyword 'this' references the new object that's being created. 
*/

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.toString = function () {
        return this.model + " has done " + this.miles + " miles";
    };
}
const civic = new Car("Honda Civic", 2009, 20000);
const mondeo = new Car("Ford Mondeo", 2010, 5000);
console.log(civic.toString());
console.log(mondeo.toString());





/*
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}
// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function () {
    return this.model + " has done " + this.miles + " miles";
};
const civic = new Car("Honda Civic", 2009, 20000);
const mondeo = new Car("Ford Mondeo", 2010, 5000);
console.log(civic.toString());

*/

/*
function Human(name, age, occupation){ //ES5 function based constructor 
    //defining properties inside the constructor function
    //constructor initializing the property values upon object creation
    this.name = name; 
    this.age = age;
    this.occupation = occupation;
    //defining a method inside the constructor function
    this.describe = function(){
      console.log(`${this.name} is a ${this.age} year old ${this.occupation}`);
    }
  }
  //creating a "person" object using the Human constructor
  //the constructor uses the arguments passed into it to
  //initialize the property values name, age and sex
  var person = new Human("Elle", "23", "Engineer");
  //calling the describe method for the person object
  person.describe();
  */


  // https://www.educative.io/collection/page/5429798910296064/5725579815944192/5920633608208384
