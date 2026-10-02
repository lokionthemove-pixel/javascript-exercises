const convertToCelsius = function (tempFahrenheit) {
  return Math.round(((tempFahrenheit - 32) * 50) / 9) / 10;
};

const convertToFahrenheit = function (tempCelcius) {
  return Math.round(((tempCelcius * 9) / 5 + 32) * 10) / 10;
};

// console.log(convertToCelsius(212));
// console.log(convertToFahrenheit(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
