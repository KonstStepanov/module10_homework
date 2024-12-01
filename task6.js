// Задание 6
console.log("Задание 6=>");
let uniqueArray = [1, 1, 1, 1, 1];
let uniqueValue = uniqueArray[0];
let result = true;

for (let i = 0; i < uniqueArray.length; i++) {
  if (uniqueArray[i] != uniqueValue) {
    result = false;
  }
}
console.log(result);
