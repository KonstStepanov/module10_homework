// Задание 1
console.log("Задание 1 =>");
let input1 = prompt("Введите число");

if (isNaN(input1)) {
  console.log("Упс, кажется, вы ошиблись");
} else {
  input1 = +input1;
  const type1 = typeof input1;

  if (input1 % 2 == 0) {
    console.log("число чётное");
  } else {
    console.log("число нечётное");
  }
}
