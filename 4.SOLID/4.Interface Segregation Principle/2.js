interface Car {
    public function getFuel();
    public function shiftGear();
    public function steer();
}

class GasCar implements Car {
    public function getFuel()
    {
        // getting fuel code
    }

    public function shiftGear()
    {
        // shifting gear code
    }

    public function steer()
    {
        // steering code
    }
}





// ElectricCar ?


//2
/*
interface FuelCar {
    public function getFuel();
}

interface RideCar {
    public function shiftGear();
    public function steer();
}

class GasCar implements FuelCar,RideCar {
    // methods: getFuel(), shiftGear() and steer()
 }
 
 class ElectricCar implements RideCar {
    // methods: shiftGear() and steer()
 }
 */