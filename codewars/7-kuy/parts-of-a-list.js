// Parts of a list (2 solutions)
// https://www.codewars.com/kata/56f3a1e899b386da78000732

function partlist(arr) {
  let result = [];

  for(let i = 1; i < arr.length; i++) {
    let start = arr.slice(0, i).join(' ');
    let end = arr.slice(i).join(' ');
    
    result.push([start, end]);
  }

  return result;
}

// function partlist(arr){
//   return arr
//     .map((_,i) => [
//       arr.slice(0,i).join(' '), 
//       arr.slice(i).join(' ')
//     ])
//     .slice(1);
// }

console.log(partlist(["I", "wish", "I", "hadn't", "come"]));