// Задание 4
console.log("Задание 4 =>");
const minCeiled = Math.ceil(0);
const maxFloored = Math.floor(100);
let randomMumber = Math.floor(
  Math.random() * (maxFloored - minCeiled) + minCeiled
);
console.log(randomMumber);
