const add = function(a,b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((sum, current)=> sum + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((multiply, current)=> multiply * current)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(i) {
  let result = 1
	for(let x = 1; x <= i; x++) {
    result *= x
  }
  return result
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
