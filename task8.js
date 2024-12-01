//Задание 8
console.log("Задание 8 =>");
let map = new Map();
map.set("t1", 1);
map.set("t2", 2);
map.set("t3", 3);

for (let [key, value] of map) {
  console.log(`Ключ — ${key}, значение — ${value}`);
}
