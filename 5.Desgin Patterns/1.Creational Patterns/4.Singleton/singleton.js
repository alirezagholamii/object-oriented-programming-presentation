/*
Singleton is a creational design pattern that lets you ensure
that a class has only one instance, while providing a global
access point to this instance



the singleton pattern let's first
talk about what it is in essence the
singleton pattern is just a way of
creating a single object that is shared
amongst a bunch of different resources
throughout your application without
having to recreate that object or losing
the information inside of it



1. Ensure that a class has just a single instance.
2. Provide a global access point to that instance. 


💡
    Use the Singleton pattern when a class in your program should
    have just a single instance available to all clients; for example, a single database object shared by different parts of the
    program

💡    
    Use the Singleton pattern when you need stricter control over
    global variables



❌
    Violates the Single Responsibility Principle. The pattern solves
    two problems at the time    
❌
    The Singleton pattern can mask bad design, for instance, when
    the components of the program know too much about
    each other    

*/



// https://7learn.com/programming/singleton-design-patterns