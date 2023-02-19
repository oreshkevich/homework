'use strict';
// task 1
alert(null || 2 || undefined);

// Ответ: 2;

// task 2

alert(alert(1) || 2 || alert(3));

// Ответ: сначала 1, затем 2

// task 3

alert(1 && null && 2);
// Ответ: null;

// task 4
alert(alert(1) && alert(2));
// Ответ: 1, а затем undefined

// task 5

alert(null || (2 && 3) || 4);
// Ответ: 3;

// task 6 Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
if (age >= 14 && age <= 90);

// task 7 Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

if (!(age >= 14 && age <= 90));

if (age < 14 || age > 90);

// task 8
if (-1 || 0) alert('first');
if (-1 && 0) alert('second');
if (null || (-1 && 1)) alert('third');
// Ответ: первое и третье выполнятся

// task 9
let userName = prompt('Кто там?', '');

if (userName === 'Админ') {
  let password = prompt('Пароль?', '');

  if (password === 'Я главный') {
    alert('Здравствуйте!');
  } else if (password === '' || password === null) {
    alert('Отменено');
  } else {
    alert('Неверный пароль');
  }
} else if (userName === '' || userName === null) {
  alert('Отменено');
} else {
  alert('Я вас не знаю');
}
