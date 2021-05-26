// Inheritance
/*
the idea of inheritance is the following
so there is this base class also known
as
super class or parent class and then
there is derived class also known as child class
or subclass.
now this base class has certain
attributes and behaviors it has members
and then if subclass decides to
inherit from the base class at that moment this
class
becomes a child class and by that this
class is going to obtain
all of the members of this base class.
which means  subclass is going to have
all the same
attributes and behaviors as its base class
and then this derived class can also
have its own members that are specific
for that class only
which base class does not have.
*/

class Employee {
	#name;
	#age;
	#salary;


	constructor(name, company, age, salary) {
		this.#name = name;
		this.company = company;
		this.#age = age;
		this.#salary = salary;
	}

	getName() {
		return this.#name
	}

	setName(name) {
		this.#name = name
	}
	getAge() {
		return this.#age
	}
	#consoleAnything(param){
		console.log('====>', param)
	}

}



const ali = new Employee('Alireza', 'Part', 20, 2000);
// ali.#name = 'Reza'

console.log(ali.getName())
ali.setName('Ahmad')
console.log(ali.getName())

class Developer extends Employee {
	getAge(){
		return this.#age + 10  // Error
	}
}

const reza =  new Developer('Tom', 'Amazon', 30, 8000);
console.log('reza====>',reza.getAge());

// getAge(){
// 	const age = super.getAge();
// 	return age + 10
// }





/*

class Employee {
	constructor(name, company, age,salary) {
		this.name = name;
		this.company = company;
		this.age = age;
		this.salary = salary;
	}

	getName() {
		return this.name
	}

	setName(name) {
		this.name = name
	}
	getAge(){
		return this.age
	}

}

// ali.#name = 'Reza'


const ali = new Employee('Alireza', 'Part', 20,2000);

console.log(ali.getName())
ali.setName('Ahmad')
console.log(ali.getName())

class Developer extends Employee {
	#favoriteLanguage
	constructor(name, company, age, salary, favoriteLanguage){
		super(name, company, age,salary)
		this.#favoriteLanguage = favoriteLanguage
	}
	getAge(){
		return this.age + 10
	}
	getFavoriteLanguage(){
		return this.#favoriteLanguage
	}
}

const reza =  new Developer('Rexs', 'PWart' , 15 , 2000,'C++')
console.log('reza====>',reza.getAge(),reza.getFavoriteLanguage())
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super






