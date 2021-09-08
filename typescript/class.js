// practsing javascript classes
// classes are like blueprints of objects thats class is like a collection of objects
// and an object is an instance of a class or a product of a class
// classes are started with an uppercase letter !important

class Person{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  input(){
    console.log('webninja says stay safe Bryan')
  }

  output(){
    return 'codeninja says welcome Kukwa clovis';
  }
}

var personOne = new Person("Kukwa", "Clovis");
var personTwo = new Person("Nkwain", "Bryan");
 // console.log(personOne.output());
 personTwo.output();
