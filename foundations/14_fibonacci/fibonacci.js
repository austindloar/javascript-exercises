const fibonacci = function(x) {
  x = parseInt(x);

  if (x == 0) {
    return x;
  } else if (x < 0) {
    return "OOPS";
  }

  let previous = 0;
  let current = 1;

  for (let i = 0; i < x - 1; i++) {
    let temp = previous;
    previous = current;
    current = previous + temp;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;
