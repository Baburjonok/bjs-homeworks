
"use strict"

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){   // код для задачи №1 писать здесь
    let x = [];
    let D = Math.pow(b,2) - 4 * a * c;
    if (D === 0) {
      x = (-b + Math.sqrt(D))/(2 * a);
      console.log("Уравнение имеет один корень " + x);
    } else if (D > 0) {
      x[0] = (-b + Math.sqrt(D))/(2 * a);
      x[1] = (-b - Math.sqrt(D))/(2 * a);
      console.log("Уравнение имеет два корня " + x);
    } else if (D < 0) {
      console.log("Уравнение не имеет вещественных корней");
    }
  return x;  //return x;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){   // код для задачи №2 писать здесь
  let today = new Date();
  let year = today.getFullYear();
  let yearOfBirthday = dateOfBirthday.getFullYear();
  let result;
  let age = year - yearOfBirthday;
  if (age >= 18) {
    result = "Не желаете ли олд-фэшн, " + name + "?";
  } else {
    result = "Сожалею, " + name + ", но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!";
  }
  console.log(result); //console.log(result)
  return result;  //return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){  // код для задачи №3 писать здесь
    let summ = 0;
    if (marks.length > 5) {
      console.log("Количество оценок больше пяти. Будет выведено среднее значение для первых пяти оценок.");
      marks.splice(5, marks.length - 1);
    }
    for (let i =0; i < marks.length; i++) {
      summ = summ + marks[i];
    }
    let averageMark = summ/marks.length;
    console.log("Среднее значение оценки " + averageMark);
    return averageMark;   //return averageMark;
}
