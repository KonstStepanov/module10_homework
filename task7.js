// Задание 7
console.log("Задание 7 =>");
const evenNotEven = [1, 2, 3, 4, null, 0, NaN, true, false];
let evenNumber = 0;
let notEvenNumber = 0;
let nullNumber = 0;
let nullElment = false;

for (let i = 0; i < evenNotEven.length; i++) {
  if (
    evenNotEven[i] != null &&
    !isNaN(evenNotEven[i]) &&
    typeof evenNotEven[i] != "boolean"
  ) {
    if (evenNotEven[i] % 2 == 0) {
      if (evenNotEven[i] == 0) {
        nullNumber++;
        nullElment = true;
      } else {
        evenNumber++;
      }
    } else {
      notEvenNumber++;
    }
  }
}

console.log(`Чётных - ${evenNumber}, нечётных - ${notEvenNumber}`);
if (nullElment) {
  console.log(
    `Количество нулевых элементов массива = ${nullNumber} (число чётное)`
  );
}
