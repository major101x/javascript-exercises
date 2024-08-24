const add = function(operand1, operand2) {
  const result = operand1 + operand2;
	return result;
};

const subtract = function(operand1, operand2) {
	const result = operand1 - operand2;
	return result;
};

const sum = function(arr) {
	const result = arr.reduce((acc, curr) => acc + curr, 0);
  return result;
};

const multiply = function(arr) {
  const result = arr.reduce((acc, curr) => acc * curr);
  return result;
};

const power = function(operand1, operand2) {
	const result = operand1 ** operand2;
	return result;
};

const factorial = function(num) {
	if(num === 0 || num === 1) {
   let result = 1;
  } 
    let result = 1;
    for(i = num; i > 0; i--) {
      result *= i;
    }
  console.log(result);
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
