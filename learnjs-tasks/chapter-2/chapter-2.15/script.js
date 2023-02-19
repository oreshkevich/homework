'use strict';
// task 1
// отличий нет.

// task 2

function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
}

// checkAge(20);

function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?');
}

// task 3

function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

// task 4

function pow(a, b) {
  return a ** b;
}
let a = prompt('a?', '');
let b = prompt('b?', '');

if (b < 1) {
  alert(`Степень ${b} не поддерживается, используйте натуральное число`);
} else {
  alert(pow(a, b));
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));
