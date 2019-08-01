"use strict"

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, i) => value === arr2[i]);
}

//console.log(compareArrays([8, 9], [6])); // false, разные значения
//console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
//console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
//console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
//console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

function sum(a, b) {
  let mSum = a + b;
  let argument = Array.from(arguments);
  let resultSum = {
    args: argument, 
    result: mSum
  }
  return resultSum;
}

let results = [];

function memoize(fn, limit) {
  results.push(fn);
}

function mSum(a, b) {
  memoize(sum(a, b));
  let arr1 = Array.from(arguments);
}

mSum(3, 4);
mSum(5, 6);
mSum(7, 9);
mSum(3, 4);

function g(memoizeSum) {
  return memoizeSum.result === 7;
}

const task1 = results.find(g);
console.log(task1);

const task2 = results.find(compareArrays);
console.log(task2);