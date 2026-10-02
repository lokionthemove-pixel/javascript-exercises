const removeFromArray = function () {
  const arr = Array.from(arguments[0]);
  const removeItems = [];
  for (let index = 0; index < arguments.length - 1; index++) {
    removeItems.push(arguments[index + 1]);
  }

  const recursiveRemove = function () {
    removeItems.forEach((element) => {
      if (arr.includes(element)) {
        arr.splice(arr.indexOf(element), 1);
        recursiveRemove();
      }
    });
  };
  recursiveRemove();
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
