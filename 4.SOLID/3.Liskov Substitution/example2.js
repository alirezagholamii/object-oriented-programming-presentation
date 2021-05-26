// Liskov Substitution Principle 

class Birds {
    fly(){
        console.log('i can fly')
    }
}

class Duck extends Birds {
    quack(){
        console.log('i can quack!!')
    }
}

class Penguin extends Birds {
    fly(){
        throw new Error('Cannot fly')
    }
    
    swim(){
        console.log('i can swim')
    }
}

function makeBirdFly(bird){
    bird.fly()
}

const duck =  new Duck();
const penguin = new Penguin();

makeBirdFly(duck);
makeBirdFly(penguin);





//Solution
//class FlyingBirds
//class SwimmingBirds



//new problem, duck!
// composition vs inheritance


