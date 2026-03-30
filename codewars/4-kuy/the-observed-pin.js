// The observed PIN
// https://www.codewars.com/kata/5263c6999e0f40dee200059d

function getPINs(observed) {
  let adjecentDigits = {
    '1': [1,2,4],
    '2': [1,2,3,5],
    '3': [2,3,6],
    '4': [1,4,5,7],
    '5': [2,4,5,6,8],
    '6': [3,5,6,9],
    '7': [4,7,8],
    '8': [0,5,7,8,9],
    '9': [6,8,9],
    '0': [0, 8],
  }

  let array = observed.split('').map(el => {
    for(let key in adjecentDigits) {
      if (el === key) return adjecentDigits[key];
    }
  })

  return getCombinations(0, array);
}

function getCombinations(id = 0, array, combination = [], result = []) {
  if (id === array.length) {
    result.push([...combination].join(''));
    return result;
  }

  for(let el of array[id]) {
    combination.push(el);
    getCombinations(id + 1, array, combination, result);
    combination.pop();
  }

  return result;
}

console.log(getPINs('560198'));