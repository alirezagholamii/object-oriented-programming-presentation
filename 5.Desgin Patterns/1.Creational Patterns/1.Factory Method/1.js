//Factory Method
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

