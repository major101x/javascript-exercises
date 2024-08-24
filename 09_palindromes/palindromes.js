const palindromes = function (word) {
  const alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanString = word
    .toLowerCase()
    .split("")
    .filter((char) => alphaNumeric.includes(char))
    .reverse()
    .join("");

  const result = cleanString.toLowerCase().split("").reverse().join("");
  console.log(result);
  const isPalindrome = cleanString === result;
  return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
