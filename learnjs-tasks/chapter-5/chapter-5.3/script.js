'use strict';
// task 1 Сделать первый символ заглавным

function ucFirst(str) {
  if (!str) return str;
  let firstSymbol = str[0].toUpperCase();
  let nextSymbol = str.slice(1);
  return firstSymbol + nextSymbol;
}

console.log(ucFirst('вася'));

// task 2 Проверка на спам

function checkSpam(str) {
  let word = 'viagra'.toLowerCase();
  let wordTwo = 'XXX'.toLowerCase();
  if (str.toLowerCase().includes(word) || str.toLowerCase().includes(wordTwo)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));

// task 3 Усечение строки

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  } else {
    return str;
  }
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));

console.log(truncate('Всем привет!', 20));

// task 4 Выделить число

function extractCurrencyValue(str) {
  return +str.slice(1);
}

alert(extractCurrencyValue('$120') === 120);
