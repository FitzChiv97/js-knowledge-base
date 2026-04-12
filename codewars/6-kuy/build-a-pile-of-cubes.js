// Build a pile of Cubes
// https://www.codewars.com/kata/5592e3bd57b64d00f3000047

function findNb(m) {
  let num = 0;
  
  for(let i = 1; num < m; i++) {
    num += Math.pow(i, 3);
    if (num === m) return i;
  }

  return -1;
}

console.log(findNb(1071225));