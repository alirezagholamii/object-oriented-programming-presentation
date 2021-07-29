/*The Creational Pattern

Creational design patterns focus on handling object creation mechanisms where objects
are created in a manner suitable for the situation you are working in. The basic approach
to object creation might otherwise lead to added complexity in a project whilst these
patterns aim to solve this problem by controllingthe creation process.
Some of the patterns that fall under this category are: Constructor, Factory, Abstract,
Prototype, Singleton and Builder.

The Creational pattern forms the basis for a number of the other design patterns we'll
be reviewing in this section and could be considered the easiest to understand. It deals
with the idea of creating new things, specifically new objects. In JavaScript, the three
common ways to create new objects are as follows:
*/
// Each of the following options will create a new empty object:
var newObject = {}; // or
var newObject = Object.create(null); // or
var newObject = new Object();


// The creational patterns help in controlling the creation of objects.