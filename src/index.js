// let msg = "test";
// function test() {
//   let msg = "hello";
//   console.log(msg);
// }
// console.log(msg);
// test();

// ------------------------------------------------------

// если возраст больше 18 или = 18 - ПРОХОДИТЕ
// если меньше - ДОСТУП ЗАПРЕЩЕН
// const age = prompt("Сколько вам лет?");

// function checkAge(usersAge) {
//   console.log("usersAge", usersAge);
//   if (!usersAge) {
//     return console.log("Вы не ввели возраст");
//   }
//   if (usersAge >= 18) {
//     return console.log("ПРОХОДИТЕ");
//   }
//   console.log("ДОСТУП ЗАПРЕЩЕН");
// }
// checkAge(age);

// ------------------------------------------------------

// 1. Вы готовы войти?
// да => Введите ваше имя => Ваше имя: {{ИМЯ}}
// нет => Вы не вошли
// const ready = confirm("Вы готовы войти?");

// if (ready) {
//   const name = prompt("Введите ваше имя");

//   console.log(`Ваше имя: ${name}`);
//   //   console.log("Ваше имя: " + name);
// } else {
//   console.log("Вы не вошли");
// }

// ДОМАШКА
const number = prompt("Введите число от 1 до 10");

let answer = prompt("Какое число загадал игрок 1?");

function test() {
  if (answer === number) {
    console.log("Да! Вы угадали число");
  } else {
    console.log("Нет. Попробуйте еще разок :)");
    answer = prompt("Какое число загадал игрок 1?");
    test();
  }
}

test();

function tratata() {
  tratata();
}
