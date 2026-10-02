const sumAll = function (num1, num2) {
  if (
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }
  let startNum;
  let endNum;
  if (num1 > num2) {
    startNum = num2;
    endNum = num1;
  } else if (num2 > num1) {
    startNum = num1;
    endNum = num2;
  }

  let sum = startNum;
  for (let index = startNum + 1; index <= endNum; index++) {
    sum += index;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
