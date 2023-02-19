'use strict';
// task 1 Какое последнее значение выведет этот код? Почему?
let i = 3;

while (i) {
  alert(i--);
}

// Ответ: 1 while(i) остановит цикл при i = 0, а это ложное значение

// task 2

let iTask2 = 0;
while (++iTask2 < 5) alert(iTask2);

//Ответ:  От 1 до 4

let iTask = 0;
while (iTask++ < 5) alert(iTask);

//Ответ:  От 1 до 5

// task 3

for (let i = 0; i < 5; i++) alert(i);

for (let i = 0; i < 5; ++i) alert(i);

// Ответ: от 0 до 4 в обоих случаях

// task 4

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

// task 5

let iTask5 = 0;
while (iTask5 < 3) {
  alert(`number ${iTask5}!`);
  iTask5++;
}

// task 6

let number;

do {
  number = prompt('Введите число больше 100?', 0);
} while (number <= 100 && number);

// task 7

let n = 10;
next: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue next;
  }
  alert(`${i} - простое число`);
}
