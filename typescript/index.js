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
var myame = 'clovis';
var myage = 'clovis';
var myNumber = 'clovis';
var Person = /** @class */ (function () {
    function Person() {
        // access modifiers defines the diff ways we can access a property
        // instead of 'let' or 'var'  in js we rather use 'properties' in ts
        // instead od functions in js we use methods   
        this.firstName = "clovis";
        this.lastName = "ngong";
        this.Age = 55;
        this.number = 100;
    }
    Person.prototype.add = function () {
        return this.value1 + this.value2;
    };
    Person.prototype.subtract = function () {
        return this.value1 - this.value2;
    };
    Person.prototype.divide = function () {
        return this.value1 / this.value2;
    };
    Person.prototype.multiply = function () {
        return this.value1 * this.value2;
    };
    return Person;
}());
// read on 
// encapsulation
//  write a method that tells us the number of instances a particular class has been created
var Oerator = /** @class */ (function (_super) {
    __extends(Oerator, _super);
    function Oerator() {
        var _this = _super.call(this) || this;
        _this.add;
        return _this;
    }
    return Oerator;
}(Person));
console.log('hey it worked');
// console.log(person.prototype.add(3, 4));
