// WeIrD StRiNg CaSe (2 solutions)
// https://www.codewars.com/kata/52b757663a95b11b3d00062d

function toWeirdCase(string) {
  return string
    .split(' ')
    .map(word => {
      let weird = '';
      for(let i = 0; i < word.length; i++) {
        weird += (i % 2)? word[i].toLowerCase(): word[i].toUpperCase();
      }
      return weird;
    })
    .join(' ');  
}

// function toWeirdCase(string) {
//   return string.split(' ').map(word => {
//     return word.split('').map((letter, id) => {
//       return (id % 2)? letter.toLowerCase(): letter.toUpperCase();
//     }).join('');
//   }).join(' ');
// }

console.log(toWeirdCase("This is a test"));