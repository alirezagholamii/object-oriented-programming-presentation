interface Animal {
  fly();
  run();
  eat();
}

class Dolphin implements Animal {
  public fly() {
    return false;
  }

  public run() {
    // Run
  }

  public eat() {
    // Eat
  }
}

/*
interface Animal {
    run();
    eat();
}
 
interface FlyableAnimal {
    fly();
}
*/
/*
class Dolphin implements Animal {
  public run() {
    // Run
  }

  public eat() {
    // Eat
  }
}

class Bird implements Animal, FlyableAnimal {
  public run() {
   //
  }
  public eat() {
   //
  }
  public fly() {
    //
  }
}

*/
