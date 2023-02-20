'use strict';
// task 1
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

console.log(user);
// task 2

let schedule = {};

schedule['8:30'] = 'get up';

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
console.log(isEmpty(schedule));

// task 3
// да можно user хранит ссылку на объект. И это не может быть изменено. Но содержимое объекта менять можно

// task 4

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
function getSalaries(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}

console.log(getSalaries(salaries));

// task 5

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}
multiplyNumeric(menu);
console.log(menu);
