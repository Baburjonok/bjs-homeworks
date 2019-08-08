"use strict"

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, i) => value === arr2[i]);
}

function memoize(fn, limit) {
    let results = []; 
      
    return function(){
      let arr1 = Array.from(arguments); 

      let index = results.findIndex(element => compareArrays(arr1, element.args));  

      let resultFn;
        if (index === -1) {
            resultFn = fn(...arr1);
            let res = {args:arr1, result:resultFn};
            if(results.length >= limit) {
                results.shift();
            }
            results.push(res);
        }
        else {
            resultFn = results[index].result;
        }
        console.log("Сумма аргументов равна " + resultFn);
                
    }
  }

 function sum() {
    let arr3 = Array.from(arguments);
    let sumArg = 0;
    arr3.forEach(function(number) {sumArg += number; });
    return sumArg;
    
}


const mSum = memoize(sum, 4);
mSum(1, 3, 2);
mSum(3, 4, 2, 5, 7);
mSum(7, 1);
mSum(3, 4);
mSum(7, 1);

