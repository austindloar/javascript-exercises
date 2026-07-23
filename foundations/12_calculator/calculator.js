const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((sum, val) => sum + val, 0);
};

const multiply = function(arr) {
  return arr.reduce((prod, val) => prod * val, 1);
};

const power = function(b, e) {
	return b ** e;
};

const factorial = function(x) {
	if (x == 0 || x == 1) {
    return 1;
  }

  let prod = 1;
  for (let i = x; i > 1; i--) {
    prod *= i;
  }

  return prod;
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
