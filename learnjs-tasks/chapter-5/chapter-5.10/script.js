'use strict';
// task 1 Деструктурирующее присваивание

let user = {
  name: 'John',
  years: 30,
};

let { isAdmin = false, name, years: age } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

// task 2

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries = null) {
  if (Object.entries(salaries).length === 0) {
    return null;
  } else {
    let userSalaries = Object.entries(salaries);
    let sort = userSalaries.sort((a, b) => {
      return b[1] - a[1];
    });
    return sort[0][0];
  }
}

console.log(topSalary(salaries));
