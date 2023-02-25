'use strict';
// task 1 Скопирован ли массив?

let fruits = ['Яблоки', 'Груша', 'Апельсин'];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push('Банан');

// что в fruits?
alert(fruits.length); // ?

// Выведется 4: . Обе переменные shoppingCart и fruits являются ссылками на один и тот же массив

// task 2 Операции с массивами

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
console.log(styles);
styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
console.log(styles);
console.log(styles.shift());
styles.unshift('Рэп', 'Регги');
console.log(styles);

// task 3 Вызов в контексте массива

let arr = ['a', 'b'];

arr.push(function () {
  alert(this);
});

arr[2](); // ?

// получим a,b,function(){...} так как this объект arr

// task 4 Сумма введённых чисел

function sumInput() {
  let arr = [];

  while (true) {
    let value = prompt('Введите число', 0);

    if (value === '' || value === null || !isNaN(value)) break;
    arr.push(+value);
  }

  let sum = 0;
  for (let number of arr) {
    sum += number;
  }
  return sum;
}

console.log(sumInput());

// task 5 Подмассив наибольшей суммы

function getMaxSubSum(arr) {
  let sumMax = 0;
  for (let index = 0; index < arr.length; index++) {
    let sum = 0;

    for (let i = index; i < arr.length; i++) {
      sum += arr[i];
      sumMax = Math.max(sumMax, sum);
    }
  }
  return sumMax;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
