function displayTask(n) {
  console.log("-".repeat(21));
  console.log("-".repeat(10) + n + "-".repeat(10));
  console.log("-".repeat(21));
}

function separate() {
  console.log("-".repeat(20));
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

displayTask(1);

console.log('typeof("салат")');
console.log("Предположение: Data");
console.log(`Фактический: ${typeof "салат"}`);

separate();

console.log("typeof(9)");
console.log("Предположение: Number");
console.log(`Фактический: ${typeof 9}`);

separate();

console.log('typeof("1.2")');
console.log("Предположение: Number");
console.log(`Фактический: ${typeof 1.2}`);

separate();

console.log('typeof("NaN")');
console.log("Предположение: Number");
console.log(`Фактический: ${typeof NaN}`);

separate();

console.log('typeof("Hello World")');
console.log("Предположение: string");
console.log(`Фактический: ${typeof "Hello World"}`);

separate();

console.log("typeof(true)");
console.log("Предположение: Boolean");
console.log(`Фактический: ${typeof true}`);

separate();

console.log('typeof("2 != 1")');
console.log("Предположение: Boolean");
console.log(`Фактический: ${typeof (2 != 1)}`);

separate();

console.log('"сыр" + "ы"');
console.log("Предположение: сыры");
console.log(`Фактический: ${"сыр" + "ы"}`);

separate();

console.log('"сыр" - "ы"');
console.log("Предположение: Number");
console.log(`Фактический: ${"сыр" - "ы"}`);

separate();

console.log('typeof("2" + "4")');
console.log("Предположение: 24");
console.log(`Фактический: ${"2" + "4"}`);

separate();

console.log('typeof("2" - "4")');
console.log("Предположение: -2");
console.log(`Фактический: ${"2" - "4"}`);

separate();

console.log('typeof("Сэм" + 5)');
console.log("Предположение: Сэм5");
console.log(`Фактический: ${"Сэм" + 5}`);

separate();

console.log('"Сэм" - 5');
console.log("Предположение: Number");
console.log(`Фактический: ${"Сэм" - 5}`);

separate();

console.log('99 * "шары"');
console.log("Предположение: string");
console.log(`Фактический: ${99 * "шары"}`);

displayTask(2);

const a = getRandomInt(5);
const b = getRandomInt(5);

console.log(a, b);
console.log((a + b) * 2);
console.log(a * b);
console.log(((a + b) * 2) / (a * b));

displayTask(3);

const cels = 25;
const fahr = 66.2;

console.log(`${cels}°C соответствует ${(cels * 9) / 5 + 32}°F`);
console.log(`${fahr}°F соответствует ${((fahr - 32) * 5) / 9}°C`);

displayTask(4);

year = prompt("Укажите год", new Date().getFullYear());

const isLeapYear = year % 4 != 0 ? false : year % 100 != 0 ? true : false;

const yearStr = isLeapYear ? "Год високосный" : "Год обычный";

alert(yearStr);
console.log(year, yearStr);


displayTask(5);

const n1 = getRandomInt(20);
const n2 = getRandomInt(20);

console.log(n1, n2);
console.log(n1 == 10 || n2 == 10 || n1 + n2 == 10);


displayTask(6);

n = prompt('Введите кол-во овечек', 1);

let str = ''
for (let i = 1; i <= n; i++){
    str += `${i}овечка...`;
}

console.log(str);


displayTask(7);

for (let i = 0; i < 15; i++)
{
    console.log(`${i} ${i % 2 == 0 ? "Четное" : "Нечетное"}`);
}


displayTask(8);

for (let i = 1; i <= 10; i++)
{
    console.log(`${(i % 2 != 0 ? '*' : '#').repeat(i)}`);
}

displayTask(9);

let arr1 = [0, -3, 1]

for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
        if (arr1[i] > arr1[j]){
            let temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp;
        }
    }
}

console.log(arr1);


displayTask(10);

let arr2 = [2, -1, 0, -5, -4]

let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > max){
        max = arr2[i];
    }
}
require
console.log(arr2);
console.log(max);