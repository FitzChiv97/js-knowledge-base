// Scramblies(2 solutions)
// https://www.codewars.com/kata/55c04b4cc56a697bb0000048

function scramble(str1, str2) {
  let obj = {};

  for(let char of str2) {
    (char in obj)? obj[char] += 1: obj[char] = 1;
  }

  console.log(obj);
  //created an obj with character count of str2

  let set = new Set(str1);
  
  set.forEach(char => {
    if(!(char in obj)) set.delete(char);
  })

  console.log(set);
  //removed chars that are not in str2

  if (set.size < Object.keys(obj).length) return false;

  for (let char of set) { 
    console.log(char);
    let count = str1.split('').filter(el => el === char).length;
    if (count < obj[char]) return false;
  }

  return true;
}

// function scramble(str1, str2) {
//   let occurences = str1.split("").reduce((arr, cur) => { 
//     arr[cur] ? arr[cur]++ : arr[cur] = 1;
//     return arr; 
//   }, {});

//   return str2.split("").every((character) => {
//     return --occurences[character] >= 0;
//   });
// }

console.log(scramble('javasssttppp', 'jjavas'));