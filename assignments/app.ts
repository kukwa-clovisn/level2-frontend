//   // write a method in the operator class that returns the number of times the oerator class has been instantiated or used

class Operation{
  private x:number;
  private y:number;
  private index:number = 0;
// creating a contructor that takes in two values
  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
  }

  // creating operation methods
  add() {
    console.log(this.x + this.y);
    return this;
  }
  subtract() {
    console.log(this.x - this.y);
    return this;
  }

  divide() {
    console.log(this.x / this.y);
    return this;
  }

  multiply() {
    console.log(this.x * this.y);
    return this;
  }

  updateScore() {
    this.index++;
    console.log("this is "  + this.index + "times");
    return this;
  }

}

class updateMethod extends Operation{
      constructor(index:number){
        _super();
        this.index = 0;
      }

      updateIndex() {
        this.index++;
        console.log("you have us an index " + this.index +" " + " times");

      }
}


let operationOne = new Operation(4,5);
console.log(operationOne.updateScore());
console.log(operationOne.updateScore());
console.log(operationOne.updateScore());
// let person = operationOne.add();
// let person = operationOne.add();
// let person = operationOne.add();
// let person = operationOne.add();
// console.log(person.updateScore())
// console.log(operationOne.updateIndex())

console.log(operationOne.add().multiply().subtract());



class Gender{
  private male:string = "male";
  private female:string = "female";
  constructor(gender:string) {
    // this.male = "male";
    // this.female = "female";
  }
  getGender(){
    if("male"){
      console.log("hello sir");
    } else if("female") {
      console.log("hello madam");
    }
  }
}

let greetings = new Gender("female");
console.log(greetings.getGender());
