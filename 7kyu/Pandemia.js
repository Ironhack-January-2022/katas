/* PANDEMIA 🌡️

https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

--- Instructions ---
⚠️ The world is in quarantine! There is a new pandemia that struggles mankind.
 Each continent is isolated from each other but infected people have spread 
 before the warning. ⚠️
🗺️ You would be given a map of the world in a type of string:
⚫ Your task is to find the percentage of human population that got infected
 in the end.

*** Notes ***
⚫ The virus can't spread in the other side of the ocean.
⚫ If one person is infected every person in this continent gets infected too.

☑️ Return the percentage % of the total population that got infected.
❗❗ The first and the last continent are not connected!
➕ For maps without oceans "X" the whole world is connected.
➕ For maps without "0" and "1" return 0 as there is no population.
*/

// SOLUTION 1 --------
function infected(s) {
  let total = 0;
  let infected = 0;

  let continents = s.split('X');
  console.log(continents);

  for (let continent of continents) {
    total += continent.length;
    if (continent.includes('1')) {
      //if(continent.indexOf('1') > -1) {
      infected += continent.length;
    }
  }
  if (total === 0) {
    return 0;
  }
  return (infected / total) * 100;
}
