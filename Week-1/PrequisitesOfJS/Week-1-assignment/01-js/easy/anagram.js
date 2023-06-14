/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let str1Map = {};
  let str2Map = {};

  for (let char of str1) {
    if (!str1Map[char]) {
      str1Map[char] = 1;
    } else {
      str1Map[char]++;
    }
  }

  for (let char of str2) {
    if (!str2Map[char]) {
      str2Map[char] = 1;
    } else {
      str2Map[char]++;
    }
  }
  // compare both the hashmap values for equality
  for (let char in str1Map) {
    if (str1Map[char] != str2Map[char]) {
      return false;
    }
  }
  return true;
}

let value = isAnagram("aa", "bb");
console.log(value);

module.exports = isAnagram;
