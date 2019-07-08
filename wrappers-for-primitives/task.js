function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let today = new Date();
    date = Math.floor((Date.parse(date) - Date.now()) / 2592000000);

    let P = percent / 1200;
    let data = {
        percent: percent,
        contribution: contribution,
        amount: amount,
        date: date
    };
  
    let dataAfterParse = {};

    for (let key in data) {
        dataAfterParse[key] = parseFloat(data[key]);
        if (isNaN(parseFloat(data[key])) === true) {
            totalAmount = `Параметр ${key} содержит неправильное значение ${data[key]} .`;
            return totalAmount; 
        };
    };

    P = dataAfterParse.percent / 1200;

    monthlyPay = (dataAfterParse.amount - dataAfterParse.contribution) * (P + P / (Math.pow((1 + P), dataAfterParse.date) - 1));
    totalAmount = monthlyPay * dataAfterParse.date;

    return totalAmount;
    // код для задачи №1 писать здесь
    //return totalAmount;
}



function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name) {
        greeting = `Привет, Мир! Меня зовут ${name}`;
      } else {
        greeting = "Привет, Мир! Меня зовут Аноним";
      };
          
      return greeting;
    
    // код для задачи №2 писать здесь
    //return greeting;
}