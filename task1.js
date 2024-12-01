// Задание 1
console.log("Задание 1 =>");
let input1 = prompt("Введите число");
input1 = +input1;
let type1 = typeof input1;

if (isNaN(input1)) {
  console.log("Упс, кажется, вы ошиблись");
} else if (type1 == "number") {
  if (input1 % 2 == 0) {
    console.log("число чётное");
  } else {
    console.log("число нечётное");
  }
} else {
  console.log("Упс, кажется, вы ошиблись");
}
