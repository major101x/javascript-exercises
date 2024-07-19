const sumAll = function (value1, value2) {
  let sum = 0;
  let max = Math.max(value1, value2);
  let min = Math.min(value1, value2);

  if (
    min < 0 ||
    max < 0 ||
    typeof value1 !== "number" ||
    typeof value2 !== "number"
  ) {
    return "ERROR";
  }
  while (min <= max) {
    sum += max;
    max--;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
