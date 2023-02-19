'use strict';
// task 1

// Выведется ли alert?

// if ("0") {
//   alert( 'Привет' );
// }
// да

// task 2

let value = prompt('Какое "официальное" название JavaScript?', '');

if (value == 'ECMAScript') {
  alert('Верно!');
} else {
  alert('Не знаете? ECMAScript!');
}

// task 3

let valueTask3 = prompt('Введите число', 0);

if (valueTask3 > 0) {
  alert(1);
} else if (valueTask3 < 0) {
  alert(-1);
} else {
  alert(0);
}

// task 3
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

let res = a + b < 4 ? 'Мало' : 'Много';

// task 4
let message =
  login == 'Сотрудник'
    ? 'Привет'
    : login == 'Директор'
    ? 'Здравствуйте'
    : login == ''
    ? 'Нет логина'
    : '';
