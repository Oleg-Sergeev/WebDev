function displayTask(n) {
  console.log("-".repeat(21));
  console.log("-".repeat(10) + n + "-".repeat(10));
  console.log("-".repeat(21));
}

function separate() {
  console.log("-".repeat(20));
}

function absValue(x) {
  if (x < 0) {
    return -x;
  }
  return x;
}

function isPalindrome(str) {
  return str == str.split("").reverse().join("");
}

function matrixAddition(matrix1, matrix2) {
  if (matrix1.length != matrix2.length || matrix1[0].length != matrix2[0].length) {
    return;
  }

  let result = [];

  for (let i = 0; i < matrix1.length; i++) {
    result[i] = [];
    
    for (let j = 0; j < matrix1.length; j++) {
        result[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }

  return result;
}

displayTask(1);

console.log(-2, absValue(-2));
console.log(100, absValue(100));
console.log(0, absValue(0));

displayTask(2);

console.log("довод", isPalindrome("довод"));
console.log("кружка", isPalindrome("кружка"));

displayTask(3);

const m1 = matrixAddition(
  [
    [1, 2],
    [3, 4],
  ],
  [
    [9, 8],
    [7, 6],
  ]
);

const m2 = matrixAddition(
  [[1, 2]],
  [
    [9, 8],
    [7, 6],
  ]
);

if (m1 != undefined) {
    console.log(m1)
}
else {
    console.log("Операция не может быть выполнена")
}

if (m2 != undefined) {
    console.log(m2)
}
else {
    console.log("Операция не может быть выполнена")
}


displayTask(4);

let student = {
  group: "201-323",
  last_name: "Сергеев",
  first_name: "Олег",
};

console.log(`Список свойств:\n${Object.keys(student)}`);
console.log(
  `Студент ${student.last_name} ${student.first_name} учится в группе ${student.group}`
);
