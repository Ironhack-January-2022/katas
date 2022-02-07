/*
  VOWEL COUNT  

https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

--- Instructions ---
Return the number (count) of vowels in the given string.

*** Notes ***
- We will consider a, e, i, o, u as vowels for this Kata (but not y).
- The input string will only consist of lower case letters and/or spaces.
*/

// SOLUTION 1 --------
function getCount(str) {
  let vowelsCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let letter of str) {
    if (vowels.includes(letter)) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

// SOLUTION 2 --------
function getCount(str) {
  var vowelsCount = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}
