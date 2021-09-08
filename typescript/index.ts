
let myame: string = 'clovis';
let myage: string = 'clovis';
let myNumber: string = 'clovis';

class Person{
    // access modifiers defines the diff ways we can access a property
    // instead of 'let' or 'var'  in js we rather use 'properties' in ts
    // instead od functions in js we use methods   
    private firstName:string = "clovis";
    private lastName: string = "ngong";
    private Age: number = 55;
    private number: number =100 ;
    private value1: number;
    private value2: number;

    constructor() {

    }

    add() {
        return this.value1 + this.value2;
    }

    subtract() {
        return this.value1 - this.value2;
    }

    divide() {
        return this.value1 / this.value2;
    }

    multiply() {
        return this.value1 * this.value2;
    }
}
// read on 
// encapsulation

//  write a method that tells us the number of instances a particular class has been created
class Oerator extends Person{
    constructor() {
        super();
        this.add;
    }
    // write a method in the operator class that returns the number of times the oerator class has been instantiated or used
}

console.log('hey it worked')

// console.log(person.prototype.add(3, 4));