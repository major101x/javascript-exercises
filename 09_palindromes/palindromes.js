const palindromes = function (string) {
  // if (string.includes(", ")) {
  //   console.log(string);
  //   console.log(string.toLowerCase().split(", "));
  //   console.log(string.toLowerCase().split(", ").reverse().join(""));
  //   return (
  //     string.toLowerCase() ===
  //     string.toLowerCase().split(", ").reverse().join("")
  //   );
  // } else {
  //   console.log(string);
  //   console.log(string.toLowerCase().split(""));
  //   console.log(string.toLowerCase().split("").reverse().join(""));
  //   return (
  //     string.toLowerCase() ===
  //     string.toLowerCase().split("").reverse().join("")
  //   );
  // }
  return string.toLowerCase() === string.toLowerCase().split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
