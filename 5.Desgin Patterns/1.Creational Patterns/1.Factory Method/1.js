//Factory Method
// The Factory Method pattern suggests that you replace direct
// object construction calls (using the new operator) with calls
// to a special factory method.


class Car {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}
class Truck {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

class VehiclesFactoryMethod {
    static create(name, type) {
        if (type === 'Car') {
            return new Car(name, type);

        } else if (type === 'Truck') {
            return new Truck(name, type);
        }
    }
}



// This array will simulate our Database for the purposes of this tutorial
const vehicles = [];

// Let's fill our array with some vehicles!
vehicles.push(VehiclesFactoryMethod.create("BMW", "Car"));
vehicles.push(VehiclesFactoryMethod.create("MAN", "Truck"));
console.log('8=vehicles===>', vehicles);

// This function will output the inserted vehicles in a more stylized context 

//https://7learn.com/programming/factory-design-patterns
















//1
/*
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
*/

//later in time, you also want to initialize polar coor
//Cartesian coordinate like : (x,y)   | (2,3) | (-1,5)
//Polar coordinate like: (rho,theta) | (4,Pi/2) 
//in Polar coordiante >>> x = rho * Math.cos(theta)
//in Polar coordiante >>> y = rho * Math.sin(theta)

//2
// a solution in other languages is having 2 constructor!!!
// not in javascript, so
// we can use switch case!
/*
CoordinateSystem = {
    CARTESIAN: 0,
    POLAR: 1
};
class Point {
    constructor(a, b, cs=CoordinateSystem.CARTESIAN)
    {
      switch (cs)
      {
        case CoordinateSystem.CARTESIAN:
          this.x = a;
          this.y = b;
          break;
        case CoordinateSystem.POLAR:
          this.x = a * Math.cos(b);
          this.y = a * Math.sin(b);
          break;
      }
    }
}

// what if we have another coordiate?
*/

//3
// Factory Method
/*
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static newCartesianPoint(x, y) {
        return new Point(x, y);
    }

    static newPolarPoint(rho, theta) {
        return new Point(rho * Math.cos(theta),
            rho * Math.sin(theta));
    }
}
const p1 = Point.newCartesianPoint(4,5);
console.log('====>',p1)

const p2 = Point.newPolarPoint(5,Math.PI/1.5)
console.log('====>',p2)



// x  Single Responsibility Principle  x

*/