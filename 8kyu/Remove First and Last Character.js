//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

/*It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/

// first solution:

function removeChar(str){
 return str.slice(1, - 1);
};


// second solution:

function removeChar(str){
 return str.substring(1, str.length - 1);
};
