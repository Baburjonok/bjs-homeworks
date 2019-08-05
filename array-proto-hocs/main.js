"use strict"

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, i) => value === arr2[i]);
}

function g(memoizeSum) {  //Функция взята для примера
  return memoizeSum.result === 7;
}

function memoize(fn, limit){
  let results = [];
  return function(numbers){
    let arr1 = numbers;
    //console.log(arr1);
    let sumArg = 0;
    numbers.forEach(function(number) {
    sumArg += number;
    });

    let resultSum = {
      args: numbers, 
      result:sumArg
    }
    
    //console.log(resultSum);
    results.push(resultSum);
    //console.log(results);
    
    const task1 = results.find(fn);        //Это пробный код, с пробной функцией g он работает,
    //console.log(task1);                  //а вот с функцией compareArrays не работает.
    const task2 = results.findIndex(fn);   //В идеале хотелось бы найти именно индекс массива с аргументами в памяти,
    //console.log(task2);                  //но при использовании compareArrays все равно возникает 
	                                       //ошибка TypeError: arr1.every is not a function
	
    if (task2 >= 0) {
      console.log(`Сумма элементов равна ${results[task2].result}`);
    //};
    } else {    
    console.log(`Сумма элементов равна ${sumArg}`);
    };

    if (results.length > limit) {
      results.shift();
    }
  }
}

let sum = memoize(g, 3);
//sum([1, 2, 3]);
//sum([1, 2, 4]);
//sum([1, 2, 4, 8]);
//sum([1, 2, 3]);
