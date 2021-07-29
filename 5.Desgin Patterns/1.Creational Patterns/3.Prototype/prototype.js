//Prototype

/*
Prototype is a creational design pattern that lets you copy
existing objects without making your code dependent on
their classes


 Prototype pattern is used when the Object creation
 is a costly affair and requires a lot of time and resources 
 and you have a similar object already existing. So this pattern 
 provides a mechanism to copy the original object to a new 
 object and then modify it according to our needs


Prototype:  A partially or fully initialized object that you
            copy (clone) and make use of.
*/

// in ES5

/*
const car = {
    drive(){
        console.log("Started Driving")
        },
    brake(){
        console.log("Stopping the car")
    },
    numofWheels : 4  
} 

const car1 = Object.create(car);
car1.drive();
car1.brake();
console.log(car1.numofWheels);

const car2 = Object.create(car)
car2.drive();
car2.brake();
console.log(car2.numofWheels);
*/


/*
var myCar = {
    name: "Ford Escort",
    drive: function () {
        console.log("Weeee. I'm driving!");
    },
    panic: function () {
        console.log("Wait. How do you stop this thing?");
    },
    sayMyName: function () {
        console.log(`I'm ${this.name}`);

    }
};
// Use Object.create to instantiate a new car
var yourCar = Object.create(myCar);
yourCar.name = "BMW Z4"
// Now we can see that one is a prototype of the other
console.log(yourCar.sayMyName());

*/
/*

Object.create also allows us to easily implement advanced concepts such as differential
inheritance in which objects are able to directly inherit from other objects. We saw
earlier that Object.create allows us to initialize object properties using the second
supplied argument. For example:

*/
/*
var vehicle = {
    getModel: function () {
        console.log("The model of this vehicle is.." + this.model);
    }
};
var car = Object.create(vehicle, {
    "id": {
        value: '889',
        enumerable: true
    },
    "model": {
        value: "Ford",
        enumerable: false
    }
});

console.log('8====>',car);
*/

/*
If we wish to implement the Prototype pattern without directly using Object.create,
we can simulate the pattern as per the above example as follows
*/
/*
var vehiclePrototype = {
    init: function (carModel) {
        this.model = carModel;
    },
    getModel: function () {
        console.log("The model of this vehicle is.." + this.model);
    }
};

console.log('8=vehiclePrototype===>',vehiclePrototype);


function vehicle(model) {
    function F() { };
    F.prototype = vehiclePrototype;
    var f = new F();
    f.init(model);
    return f;
}
var car = vehicle("Ford Escort");
console.log('8===car=>',car);

car.getModel();
*/

/*
in ES6
class Sheep {

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    walk() {
        console.log(`I'm walking here`);
    }

    clone() {
        return new Sheep(this.name, this.weight);
    }
}


const sheep1 = new Sheep('alfy', 50);
console.log('8===sheep1=>', sheep1);

const sheep2 = sheep1.clone();

sheep2.name = 'john'



console.log('8==sheep2==>', sheep2);

*/




/*
💡
Use the Prototype pattern when your code shouldn’t depend
on the concrete classes of objects that you need to copy.
This happens a lot when your code works with objects passed
to you from 3rd-party code via some interface. The concrete
classes of these objects are unknown, and you couldn’t depend
on them even if you wanted to

💡
Use the pattern when you want to reduce the number of subclasses 
that only differ in the way they initialize their respective objects.
Somebody could have created these subclasses to
be able to create objects with a specific configuration.
The Prototype pattern lets you use a set of pre-built objects,
configured in various ways, as prototypes.
Instead of instantiating a subclass that matches some configuration, 
the client can simply look for an appropriate prototype
and clone it


✅You can clone objects without coupling to their concrete
classes.

✅You can get rid of repeated initialization code in favor of
cloning pre-built prototypes.

✅You can produce complex objects more conveniently.

✅convenientlyYou get an alternative to inheritance when dealing with configuration presets for complex objects.


❌Cloning complex objects that have circular references might
be very tricky

*/


// https://www.educative.io/collection/page/5429798910296064/5725579815944192/5151110961561600