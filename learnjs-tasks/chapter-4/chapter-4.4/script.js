'use strict';
// task 1
// Ответ: ошибка

// Здесь значение this внутри makeUser() равно undefined, потому что оно вызывается как функция, а не через «точечный» синтаксис как метод

// task 2

let calculator = {
  sum() {
    return this.numberOne + this.numberTwo;
  },

  mul() {
    return this.numberOne * this.numberTwo;
  },

  read() {
    this.numberOne = +prompt('numberOne?', 0);
    this.numberTwo = +prompt('numberTwo?', 0);
  },
};

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// task 3

let ladder = {
  step: 0,
  up() {
    this.step++;
    return ladder;
  },
  down() {
    this.step--;
    return ladder;
  },
  showStep: function () {
    alert(this.step);
    return ladder;
  },
};

ladder.up().up().down().showStep().down().showStep();

// or;

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     alert(this.step);
//     return this;
//   },
// };
