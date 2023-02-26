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

function aclean(arr) {
  let map = new Map();

  arr.forEach((item, index) => {
    let itemSplit = item.split('').sort();

    let itemToLowerCase = itemSplit.map((item) => item.toLowerCase()).join('');
    map.set(itemToLowerCase, item);
  });

  return Array.from(map.values());
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr));

// task 3 Перебираемые ключи

// надо конвертировать его в массив
let map = new Map();

map.set('name', 'John');

let keys = Array.from(map.keys());

keys.push('more');

console.log(keys);
