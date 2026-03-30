// Reverse or rotate?
// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

function revrot(str, sz) {
  if (sz <= 0 || str === '') return '';

  let arr = str.split('');
  let chunks = [];

  while (arr.length >= sz) {
    chunks.push(arr.splice(0, sz));
  }

  return chunks.map(chunk => {
    let sum = chunk.reduce((sum,el) => {
      return sum += Number(el);
    }, 0);
    
    (sum % 2) ? chunk.push(chunk.shift()): chunk.reverse();

    return chunk.join('');
  }).join('');
}

console.log(revrot("733049910872815764", 5));