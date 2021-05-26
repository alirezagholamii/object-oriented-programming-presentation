class Monster {
    constructor(name) {
        this.name = name
    }
    attack() {
        console.log(`${this.name} attacked`)
    }
    walk() {
        console.log(`${this.name} walked`)
    }
}

class FlyingMonster extends Monster {
    fly() {
        console.log(`${this.name} flow`)
    }
}

class SwimmingMonster extends Monster {
    swim() {
        console.log(`${this.name} swam`)

    }
}

const bear = new Monster('bear');
bear.walk();
bear.attack();

const eagle = new FlyingMonster('eagle');
eagle.walk();
eagle.attack();
eagle.fly();

const shark = new SwimmingMonster('shark');
shark.walk();
shark.attack();
shark.swim();

//what if we want to add a new type of monster can both swim and fly

// class FlyingSwimmingMonster extends X {
// }




//1
/*

function swimmer({name}) {
    return {
        swim: ()=> console.log(`${name} swam`)
    }
}
const obj = swimmer({name:'Test'});
obj.swim()

*/


//2

/*
function swimmer({name}) {
    return {
        swim: ()=> console.log(`${name} swam`)
    }
}

function swimmingMonsterCreator(name) {
    const monster = {name: name}
    return {
        ...monster,
        ...swimmer(monster),
    }
}

const obj = swimmingMonsterCreator('Monster');
obj.swim()
*/


//3

/*
function swimmer({name}) {
    return {
        swim: ()=> console.log(`${name} swam`)
    }
}
function flyer({name}) {
    return {
        fly: ()=> console.log(`${name} flew`)
    }
}
function flyingSwimmingMonsterCreator(name) {
    const monster = {name: name}
    return {
        ...monster,
        ...swimmer(monster),
        ...flyer(monster)
    }
}

const obj = flyingSwimmingMonsterCreator('Monster');
obj.swim()
obj.fly()

*/


//4
/*
function swimmer({ name }) {
    return {
        swim: () => console.log(`${name} swam`)
    }
}
function flyer({ name }) {
    return {
        fly: () => console.log(`${name} flew`)
    }
}
function attackerAndWalker({ name }) {
    return {
        attack: () => console.log(`${name} attacked`),
        walk: () => console.log(`${name} walked`),
    }
}

function flyingSwimmingMonsterCreator(name) {
    const monster = { name: name }
    return {
        ...monster,
        ...swimmer(monster),
        ...flyer(monster),
        ...attackerAndWalker(monster)
    }
}

const obj = flyingSwimmingMonsterCreator('Monster');
obj.swim()
obj.fly()
obj.attack()
obj.walk()

*/


