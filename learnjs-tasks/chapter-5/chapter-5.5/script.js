'use strict';
// task 1
function camelize(str) {
  let strSplit = str.split('-');
  let arrMap = strSplit.map((item, index) => {
    if (index === 0) {
      return item;
    } else {
      return item[0].toUpperCase() + item.slice(1);
    }
  });
  return arrMap.join('');
}

console.log(camelize('list-style-image'));

// task 2

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);

// task 3

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let result = arr[i];

    if (result < a || result > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arrTask3 = [5, 3, 8, 1];

console.log(filterRangeInPlace(arrTask3, 1, 4));
console.log(arrTask3);

// task 4 Сортировать в порядке по убыванию

let arrTask4 = [5, 2, 1, -10, 8];

arrTask4.sort((a, b) => b - a);

console.log(arrTask4);

// task 5 Скопировать и отсортировать массив

let arrTask5 = ['HTML', 'JavaScript', 'CSS'];

function copySorted(arr) {
  let arrCopy = [...arr];
  return arrCopy.sort();
}

let sorted = copySorted(arrTask5);

console.log(sorted);
console.log(arrTask5);

// task 6 Создать расширяемый калькулятор

function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(' ');
    let a = +split[0];
    let operator = split[1];
    let b = +split[2];
    return this.methods[operator](a, b);
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();

console.log(calc.calculate('3 + 7'));
let powerCalc = new Calculator();
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

let result = powerCalc.calculate('2 ** 3');
console.log(result);

// task 7 Трансформировать в массив имён

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];

let names = users.map((item) => {
  return item.name;
});

console.log(names); // Вася, Петя, Маша

// task 8 Трансформировать в объекты

let vasyaTask8 = { name: 'Вася', surname: 'Пупкин', id: 1 };
let petyaTask8 = { name: 'Петя', surname: 'Иванов', id: 2 };
let mashaTask8 = { name: 'Маша', surname: 'Петрова', id: 3 };

let usersTask8 = [vasyaTask8, petyaTask8, mashaTask8];

let usersMapped = usersTask8.map((item) => {
  return { fullName: item.name + ' ' + item.surname, id: item.id };
});

console.log(usersMapped);

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Вася Пупкин

// task 9 Отсортировать пользователей по возрасту
function sortByAge(arrTask9) {
  return arrTask9.sort((a, b) => (a.age > b.age ? 1 : -1));
}
let vasyaTask9 = { name: 'Вася', age: 25 };
let petyaTask9 = { name: 'Петя', age: 30 };
let mashaTask9 = { name: 'Маша', age: 28 };

let arrTask9 = [vasyaTask9, petyaTask9, mashaTask9];

sortByAge(arrTask9);
console.log(arrTask9);
console.log(arrTask9[0].name); // Вася
console.log(arrTask9[1].name); // Маша
console.log(arrTask9[2].name); // Петя

// task 10 Перемешайте массив

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

let arrTask10 = [1, 2, 3];

console.log(shuffle(arrTask10));

// task 11 Получить средний возраст

function getAverageAge(users) {
  return users.reduce((sum, current) => sum + current.age, 0) / users.length;
}

let vasyaTask11 = { name: 'Вася', age: 25 };
let petyaTask11 = { name: 'Петя', age: 30 };
let mashaTask11 = { name: 'Маша', age: 29 };

let arrTask11 = [vasyaTask11, petyaTask11, mashaTask11];

console.log(getAverageAge(arrTask11));

// task 12 Оставить уникальные элементы массива

function unique(arr) {
  return [...new Set(arr)];
}

let strings = [
  'кришна',
  'кришна',
  'харе',
  'харе',
  'харе',
  'харе',
  'кришна',
  'кришна',
  ':-O',
];

console.log(unique(strings));

// task 13 Создайте объект с ключами из массива
function groupById(arr) {
  return arr.reduce((prev, current) => {
    prev[current.id] = current;

    return prev;
  }, {});
}
let usersTask13 = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

let usersById = groupById(usersTask13);

console.log(usersById);
