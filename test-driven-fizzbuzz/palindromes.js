const prepareStr = (str) => str.toLowerCase().replace(/[^a-z]/g, "");

const palindromes = (str) => {
  str = prepareStr(str);

  return [str];
};

// attach helpers to the exported function for testing - these'll be
// destructured in the .test.js file so i can test them there individually
palindromes.prepareStr = prepareStr;

module.exports = palindromes;
