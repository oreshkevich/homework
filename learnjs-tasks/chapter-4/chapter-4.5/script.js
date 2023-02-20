'use strict';
// task 1

// да если возвращать один общий объект
let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

alert(new A() == new B()); // true

// task 2

function Calculator() {
  this.sum = function () {
    return this.numberOne + this.numberTwo;
  };

  this.mul = function () {
    return this.numberOne * this.numberTwo;
  };

  this.read = function () {
    this.numberOne = +prompt('numberOne?', 0);
    this.numberTwo = +prompt('numberTwo?', 0);
  };
}

let calculator = new Calculator();
calculator.read();

alert('Sum=' + calculator.sum());
alert('Mul=' + calculator.mul());

// task 3

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt('number', 0);
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);
