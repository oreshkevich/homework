'use strict';
// task 1
function unique(arr) {
  return [...new Set(arr)];
}

let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

console.log(unique(values));

// task 2 Отфильтруйте анаграммы
