'use strict';
// task 1

function sum() {
  let numberOne = +prompt('numberOne', 0);
  let numberTwo = +prompt('numberTwo', 0);
  alert(numberOne + numberTwo);
}

// sum();

// task 2
function getFixed() {
  alert((6.35).toFixed(1)); // 6.3 тут округляеться в меньшую сторону так как
  alert((6.35).toFixed(20));
  // это  6.34999999999999964473
  // В данном случае число становится чуть меньше

  alert((1.35).toFixed(1)); // 1.4
  alert((1.35).toFixed(20)); // 1.35000000000000008882
  // а тут наоборот

  // вот так можно исправить
  alert(Math.round(6.35 * 10) / 10);
}

// task 3 Ввод числового значения

function readNumber() {
  let number;

  do {
    number = prompt('Введите число', 0);
  } while (!isFinite(number));

  if (number === null || number === '') return null;

  return +number;
}

alert(`Число: ${readNumber()}`);

// task 4 Бесконечный цикл по ошибке

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }
// i никогда не станет равным 10
// потому что это десятичная дробь и мы имеем потерю точности

// task 4 Случайное число от min до max

function random(min, max) {
  let number = Math.random() * max + min - 1;
  return number;
}

alert(random(1, 5)); // 1.2345623452
alert(random(1, 5)); // 3.7894332423
alert(random(1, 5)); // 4.3435234525

// task 5 Случайное число от min до max

function randomInteger(min, max) {
  return Math.floor(Math.random() * max) + min;
}

alert(randomInteger(1, 5)); // 1
alert(randomInteger(1, 5)); // 3
alert(randomInteger(1, 5)); // 5
