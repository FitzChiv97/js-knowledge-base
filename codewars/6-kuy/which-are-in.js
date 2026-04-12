// Which are in? (2 solutions)
// https://www.codewars.com/kata/550554fd08b86f84fe000a58

function inArray(array1,array2){
  let result = [];

  result = array1.filter(substr => {
    for(let str of array2) {
      if(str.includes(substr)) return substr;
    }
  })

  return result.sort();
}

/*
function inArray(array1,array2){
  return array1.filter(substr => array2.find(str => str.includes(substr))).sort();
}
*/

console.log(inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"]));