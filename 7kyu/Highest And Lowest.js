/*
  HIGHEST AND LOWEST

https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

--- Instructions ---
In this little assignment you are given a string of space separated numbers,
 and have to return the highest and lowest number.

*** Notes ***
- All numbers are valid Int32, no need to validate them.
- There will always be at least one number in the input string.
- Output string must be two numbers separated by a single space, and highest 
  number is first.
*/

// SOLUTION 1 --------
function highAndLow(numbers) {
  let result = '';
  let numsArr = numbers.split(' ');
  numsArr.sort(function (a, b) {
    return a - b;
  });
  result += numsArr[numsArr.length - 1] + ' ' + numsArr[0];
  return result;
}

// SOLUTION 2 --------
function highAndLow(numbers) {
  let result = '';
  let numsArr = numbers.split(' ');
  return `${Math.max(...numsArr)} ${Math.min(...numsArr)}`;
}
