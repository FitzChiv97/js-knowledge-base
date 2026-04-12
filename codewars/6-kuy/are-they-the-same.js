// Are they the "same"?
// https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(arr1, arr2){
  if (arr1 === null || arr2 === null) return false;
  if (arr1.length < 1 && arr2.length > 1) return false;

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  return arr1.every((num, id) => {
    return arr2.indexOf(num * num, id) === id;
  })
};

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));