/**
 * The open-closed principle says that code should be open for extension,
 *  but closed for modification. What this means is that if we want to add additional functionality,
 *  we should be able to do so simply by extending the original functionality,
 *  without the need to modify it.
 */


 // original

class Vehicle {
    constructor(fuelCapacity, fuelEfficiency) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }

    getRange() {
        return this.fuelCapacity * this.fuelEfficiency;
    }
}

const standardVehicle = new Vehicle(10, 15);

console.log(standardVehicle.getRange()); // Outputs '150'




// BAD
/*
class Vehicle {
    constructor(fuelCapacity, fuelEfficiency) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }

    getRange() {
        let range = this.fuelCapacity * this.fuelEfficiency;

        if (this instanceof HybridVehicle) {
            range += this.electricRange;
        }
        return range;
    }
}

class HybridVehicle extends Vehicle {
    constructor(fuelCapacity, fuelEfficiency, electricRange) {
        super(fuelCapacity, fuelEfficiency);
        this.electricRange = electricRange;
    }
}

const standardVehicle = new Vehicle(10, 15);
const hybridVehicle = new HybridVehicle(10, 15, 50);

console.log(standardVehicle.getRange()); // Outputs '150'
console.log(hybridVehicle.getRange()); // Outputs '200'
*/



//GOOD
/*
class Vehicle {
    constructor(fuelCapacity, fuelEfficiency) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }

    getRange() {
        return this.fuelCapacity * this.fuelEfficiency;
    }
}

class HybridVehicle extends Vehicle {
    constructor(fuelCapacity, fuelEfficiency, electricRange) {
        super(fuelCapacity, fuelEfficiency);
        this.electricRange = electricRange;
    }

    getRange() {
        return this.fuelCapacity * this.fuelEfficiency + this.electricRange;
    }
}

const standardVehicle = new Vehicle(10, 15);
const hybridVehicle = new HybridVehicle(10, 15, 50);

console.log(standardVehicle.getRange()); // Outputs '150'
console.log(hybridVehicle.getRange()); // Outputs '200'
*/







// source:
// https://duncan-mcardle.medium.com/solid-principle-2-open-closed-javascript-fc49b577a377