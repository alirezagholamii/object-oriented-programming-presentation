/*
Liskov Substitution Principle (LSP)
This is a scary term for a very simple concept. It's formally defined as "If S is a subtype of T, then objects of type T may be replaced with objects of type S (i.e., objects of type S may substitute objects of type T) without altering any of the desirable properties of that program (correctness, task performed, etc.)." That's an even scarier definition.

The best explanation for this is if you have a parent class and a child class, then the base class and child class can be used interchangeably without getting incorrect results. This might still be confusing, so let's take a look at the classic Square-Rectangle example. Mathematically, a square is a rectangle, but if you model it using the "is-a" relationship via inheritance, you quickly get into trouble.
*/



// Bad

class Rectangle {
    constructor(width,height) {
        this.width = width;
        this.height = height;
    }

    setColor(color) {
        // ...
    }

    render(area) {
        // ...
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    setWidth(width) {
        this.width = width;
        this.height = width;
    }

    setHeight(height) {
        this.width = height;
        this.height = height;
    }
}

function increaseRectangleWidth(rectangle) {
    rectangle.setWidth(rectangle.width + 1)
}

const rectangle1= new Rectangle(10,2);
const rectangle2= new Rectangle(5,5);

increaseRectangleWidth(rectangle1)
increaseRectangleWidth(rectangle2)

console.log(rectangle1.getArea())
console.log(rectangle2.getArea())



//2
/*
class Rectangle {
    constructor(width,height) {
        this.width = width;
        this.height = height;
    }

    setColor(color) {
        // ...
    }

    render(area) {
        // ...
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    setWidth(width) {
        this.width = width;
        this.height = width;
    }

    setHeight(height) {
        this.width = height;
        this.height = height;
    }
}

function increaseRectangleWidth(rectangle) {
    rectangle.setWidth(rectangle.width + 1)
}

const rectangle1= new Rectangle(10,2);
const square= new Square(5,5);

increaseRectangleWidth(rectangle1)
increaseRectangleWidth(square)

console.log(rectangle1.getArea())
console.log(square.getArea())

*/


//3
// Good

/*
class Shape {
    getArea(){
        // some function
    }
}

class Rectangle extends Shape {
    constructor(width,height) {
        this.width = width;
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Square extends Shape {
    setWidth(width) {
        this.width = width;
        this.height = width;
    }

    setHeight(height) {
        this.width = height;
        this.height = height;
    }
}

function increaseShapeWidth(shape) {
    shape.setWidth(shape.width + 1)
}

const rectangle1= new Rectangle(10,2);
const square= new Square(5,5);

increaseShapeWidth(rectangle1)
increaseShapeWidth(square)

console.log(rectangle1.getArea())
console.log(square.getArea())

*/
