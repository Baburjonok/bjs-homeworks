"use strict"

let coefficient = [2, 4, -3];//Задание 1
let a;
let b;
let c;
a = coefficient[0];
b = coefficient[1];
c = coefficient[2];
let x = {};

function getSolutions(a, b, c) {
  let D = Math.pow(b,2) - 4 * a * c;
  if (D === 0) {
    let x1 = -b / 2 * a;
    x.roots = x1;
    x.D = D;
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D))/(2 * a);
    let x2 = (-b - Math.sqrt(D))/(2 * a);
    x.roots = [x1, x2];
    x.D = D;
  }   
  return x;
}  

getSolutions(a, b, c);

function showSolutionsMessage(a, b, c) {
  let result = x;
  console.log(`Вычисляем корни квадратного уравнения ${a}x²+${b}x+c`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D === 0) {
    console.log("Уравнение имеет один корень " + result.roots);
  } else if (result.D > 0) {
    console.log("Уравнение имеет два корня " + result.roots);
  } else {
    console.log("Уравнение не имеет вещественных корней");
  }
}  


showSolutionsMessage(a, b, c)

console.log();

let data = {     //Задание 2
  algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5],
  russian: [3, 3, 4, 5],
  physics: [5, 5],
  music: [2, 2, 6],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4, 4]
};

let summAverageMark = 0;
let averageMark = {};

for (let key in data) {
  let summ = 0;
  for (let i =0; i < data[key].length; i++) {
    summ = summ + data[key][i];
  }
 
  averageMark[key] = summ/data[key].length;
  summAverageMark = summAverageMark + averageMark[key];
};

  averageMark.average = summAverageMark/Object.keys(data).length;
  console.log(averageMark);
  
console.log();

let secretData = {  //Задание 3
  aaa: 1,
  bbb: 1
};

let dateNoCipher = {};

function getPersonData(secretData) {
  for (let key in secretData) {
    if (key === "aaa") {
      dateNoCipher.firstName = secretData[key];
    } else {
      dateNoCipher.lastName = secretData[key];
    };
  };  
  for (let key in dateNoCipher) {
    if (dateNoCipher[key] === 0) {
      dateNoCipher[key] = "Родриго";
    } else {
      dateNoCipher[key] = "Эмильо";
    };
  };
  console.log(dateNoCipher);
};

getPersonData(secretData);