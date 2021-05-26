class Car {
	#name;
	#color;
	#price;

	constructor(name,color,price,licensePlate){
		this.#name = name;
		this.#color = color;
		this.#price = price;
		this.licensePlate = licensePlate;
	}
	
	getInfo(){
		console.log(`name of this car is: ${this.#name} & color is: ${this.#color} & price is ${this.#price.toLocaleString()} $`);
		this.#calcTax(this.#price);
	}
	
	#calcTax(price){
		console.log(`tax: ${this.#price * 0.09} $`);
	}

}

const myCar = new Car('Ford','Blue', 40_000,'ABC-403E');

myCar.getInfo()

// console.log(myCar.#name)
// console.log(myCar.licensePlate)




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
// https://tc39.es/process-document/