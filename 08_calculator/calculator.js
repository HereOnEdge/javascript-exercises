const add = function(num1 , num2) {
	let result = num1 + num2 ; 
  return result;
};

const subtract = function(num1, num2) {
	let result = num1 - num2;
  return result
};

const sum = function(arr) {
	let result = 0
  for(let item of arr) {
    result += item;
  }
  return result;
};

const multiply = function(arr) {
  let result = 1 ;
  for (let item of arr){
    result *= item;
  }
  return result
};

const power = function(num , pow) {
	let result = 1;
  let i = 0;
  while (i < pow){
    result *= num;
    i++;
  }
  return result;
};

const factorial = function(num) {
	let result = 1;
  for (let i = num; i >= 1; i--){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
