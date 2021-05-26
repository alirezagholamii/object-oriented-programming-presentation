// Encapulation
/*
what is encapsulation?
the idea of encapsulation is idea of
bundling or tying together data and
methods that operate on that
data so that they are grouped together
within a class.

why do we do this?
well we do this
with the purpose of preventing
anyone or anything outside of our class
to be able to directly access our data
and to interact with it and to modify it.

i am not saying that we don't want anyone
to access our data at all, i'm just
saying that i don't want that to happen
directly. i don't want that other class
to be able to directly
modify and change and interact with my
data
because i want to provide my own way for
that to happen.

i provide very specific public functions
that that other class can invoke and in
that way interact with my data.
like  getters and setters
*/



class Employee {
	#name;
	#company;
	#age;

	constructor(name, company, age) {
		this.#name = name;
		this.#company = company;
		this.#age = age;
	}

	getName() {
		return this.#name
	}

	setName(name) {
		this.#name = name
	}

	// setAge(age) {
	// 	if (age >= 18) {
	// 		this.#age = age
	// 	} else {
	// 		console.log('====> only +18');
	// 	}
	// }
	// getAge() {
	// 	return this.#age
	// }

}

// ali.#name = 'Reza'

const ali = new Employee('Alireza', 'Part', 20);

console.log(ali.getName())
ali.setName('Ahmad')
console.log(ali.getName())

// ali.setAge(17.5)
// console.log('==age==>', ali.getAge());

/*
Why should we prefer privacy? Why not just have everything global?

Lots of unrelated bits of code will become dependent/coupled to one another via the global variable.
You will likely override the variables if the name get's reused, which can lead to bugs or unpredictable behaviour.
You will likely end up with Spaghetti Code – code that's hard to reason through and follow what is reading and writing to your variables and changing state.
*/



