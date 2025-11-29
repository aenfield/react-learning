/* Not my impl - this is (more or less) what's in the book in ch2 */

const palindromes = (str) => {
  str = prepareStr(str); // lower case and remove extra chars and whitespace

  const matches = [];
  let startIndex = 0;
  while (startIndex < str.length / 2) {
    const palindrome = stringStartPalindrome(str.substring(startIndex));
    if (palindrome) {
      matches.push(palindrome);
      startIndex += palindrome.length;
    } else {
      startIndex++;
    }
  }

  return matches;
};

const prepareStr = (str) => str.toLowerCase().replace(/[^a-z]/g, "");

const isPalindrome = (str) => {
  // iterate over the first half of the string, checking to see if the matching
  // char at the other end of the str is the same - if this ever isn't the case,
  // it's not a palindrome; for strengths w/ odd lengths since JS doesn't do int
  // division, I think it'll compare the char to itself
  const endIndex = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[endIndex - i]) return false;
  }
  return true;
};

const stringStartPalindrome = (str) => {
  // returns the longest palindrome at the start of the str, or null if no
  // palindrome of length 3+ starts the string (I think)
  const firstLetter = str[0];
  let lastIndex = str.lastIndexOf(firstLetter);
  while (lastIndex >= 2) {
    const candidate = str.substring(0, lastIndex + 1);
    if (isPalindrome(candidate)) {
      return candidate;
    }
    lastIndex = str.lastIndexOf(firstLetter, lastIndex - 1);
  }
  return null;
};

// attach helpers to the exported function for testing - these'll be
// destructured in the .test.js file so i can test them there individually
palindromes.prepareStr = prepareStr;
palindromes.isPalindrome = isPalindrome;
palindromes.stringStartPalindrome = stringStartPalindrome;

module.exports = palindromes;
