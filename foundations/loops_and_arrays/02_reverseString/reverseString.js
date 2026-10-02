const reverseString = function (text) {
  let reversedText = "";
  for (let i = 0; i < text.length; i++) {
    reversedText += text[text.length - i - 1];
  }
  return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
