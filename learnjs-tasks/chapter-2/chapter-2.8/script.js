'use strict';
// task 1
let a = 1,
  b = 1;

let c = ++a; // ?
let d = b++; // ?

a = 2;
b = 2;
c = 2;
d = 1;

// task 2
let aTask2 = 2;

let x = 1 + (aTask2 *= 2);
// a = 4;
// x = 5;

// task 3

// "" + 1 + 0 = "10"
// "" - 1 + 0 = -1
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5"
// "  -9  " - 5 = -14
// null + 1 = 1
// undefined + 1 = NaN
// " \t \n" - 2 = -2

// task 4
let aTask4 = prompt('Первое число?', 1);
let bTask4 = prompt('Второе число?', 2);

alert(+aTask4 + +bTask4); // 3
