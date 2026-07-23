const palindromes = function (string) {
  const valid = "abcdefghijklmnopqrstuvwxyz0123456789";

  let sanitized = string.toLowerCase().split("").filter(char => valid.includes(char));

  return sanitized.join("") == sanitized.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
