// Abstraction
/*
abstraction means hiding
complex things behind a procedure that
makes those things look
simple so in order to explain this let's use an
everyday life example let's use the
example of your smartphone...

this process of hiding that
complexity from you as a user is called abstraction 
and in that way
this very very complex system is hidden
and this system here is represented as
very simple system, by this contract.
*/



// Interface
interface IAnimal {
  void animalSound(); // interface method (does not have a body)
}

// Pig "implements" the IAnimal interface
class Pig : IAnimal
{
  public void animalSound()
	{
		// The body of animalSound() is provided here
		Console.WriteLine("The pig says: wee wee");
	}
}

class Program {
	static void Main(string[] args) {
		Pig myPig = new Pig();  // Create a Pig object
		myPig.animalSound();
	}
}



