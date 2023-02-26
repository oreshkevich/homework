'use strict';
// task 1 Создайте дату

let data = new Date(2012, 1, 20, 3, 12);

console.log(data);

// task 2 Покажите день недели

function getWeekDay(date) {
  let obj = {
    Mon: 'ПН',
    Tue: 'ВТ',
    Wed: 'СР',
    Thu: 'ЧТ',
    Fri: 'ПТ',
    Sat: 'СБ',
    Sun: 'ВС',
  };
  let dateString = date.toString().slice(0, 3);
  for (const iterator in obj) {
    if (iterator === dateString) {
      return obj[iterator];
    }
  }
}

let date = new Date(2012, 0, 3);

console.log(getWeekDay(date));

// task 3

function getLocalDay(date) {
  let dat = date.getDay();
  if (dat == 0) {
    dat = 7;
  }
  return dat;
}

let dateTask3 = new Date(2012, 0, 3);
console.log(getLocalDay(dateTask3));

// task 4 Какой день месяца был много дней назад?

function getDateAgo(date, days) {
  let copy = new Date(date);

  copy.setDate(date.getDate() - days);
  return copy.getDate();
}
let dateTask4 = new Date(2015, 0, 2);

console.log(getDateAgo(dateTask4, 1));
console.log(getDateAgo(dateTask4, 2));
console.log(getDateAgo(dateTask4, 365));

// task 5 Последнее число месяца?

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));

// task 6 Сколько сегодня прошло секунд?

function getSecondsToday() {
  let date = new Date();
  let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  let result = date - today;

  return Math.round(result / 1000);
}

console.log(getSecondsToday());

// task 7 Сколько секунд осталось до завтра?

function getSecondsToTomorrow() {
  let date = new Date();
  let day = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  let result = day - date;

  return Math.round(result / 1000);
}

console.log(getSecondsToTomorrow());

// task 8 Форматирование относительной даты

function formatDate(date) {
  let day = new Date() - date;

  if (day < 1000) {
    return 'прямо сейчас';
  }

  let sec = Math.floor(day / 1000);

  if (sec < 60) {
    return sec + ' сек. назад';
  }

  let min = Math.floor(day / 60000);
  if (min < 60) {
    return min + ' мин. назад';
  }

  let a = date;
  a = [
    '0' + a.getDate(),
    '0' + (a.getMonth() + 1),
    '' + a.getFullYear(),
    '0' + a.getHours(),
    '0' + a.getMinutes(),
  ].map((item) => item.slice(-2));

  return a.slice(0, 3).join('.') + ' ' + a.slice(3).join(':');
}

console.log(formatDate(new Date(new Date() - 1)));

console.log(formatDate(new Date(new Date() - 30 * 1000)));

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));

console.log(formatDate(new Date(new Date() - 86400 * 1000)));
