//   // write a method in the operator class that returns the number of times the oerator class has been instantiated or used
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Operation = /** @class */ (function () {
    // creating a contructor that takes in two values
    function Operation(x, y) {
        this.index = 0;
        this.x = x;
        this.y = y;
    }
    // creating operation methods
    Operation.prototype.add = function () {
        console.log(this.x + this.y);
        return this;
    };
    Operation.prototype.subtract = function () {
        console.log(this.x - this.y);
        return this;
    };
    Operation.prototype.divide = function () {
        console.log(this.x / this.y);
        return this;
    };
    Operation.prototype.multiply = function () {
        console.log(this.x * this.y);
        return this;
    };
    Operation.prototype.updateScore = function () {
        this.index++;
        console.log("this is " + this.index + "times");
        return this;
    };
    return Operation;
}());
var updateMethod = /** @class */ (function (_super_1) {
    __extends(updateMethod, _super_1);
    function updateMethod(index) {
        var _this = this;
        _super();
        _this.index = 0;
        return _this;
    }
    updateMethod.prototype.updateIndex = function () {
        this.index++;
        console.log("you have us an index " + this.index + " " + " times");
    };
    return updateMethod;
}(Operation));
var operationOne = new Operation(4, 5);
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
var Gender = /** @class */ (function () {
    function Gender(gender) {
        this.male = "male";
        this.female = "female";
        // this.male = "male";
        // this.female = "female";
    }
    Gender.prototype.getGender = function () {
        if ("male") {
            console.log("hello sir");
        }
        else if ("female") {
            console.log("hello madam");
        }
    };
    return Gender;
}());
var greetings = new Gender("female");
console.log(greetings.getGender());
