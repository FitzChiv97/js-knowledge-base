// Give me a Diamond
// https://www.codewars.com/kata/5503013e34137eeeaa001648

function diamond(n){
  if (n <= 0 || n % 2 === 0) {
    return null;
  };

  let diamond = '';
  let spaces = Math.floor(n / 2);

  for (let i = 1; i < n; i += 2) {
    diamond += ' '.repeat(spaces) + '*'.repeat(i) + '\n';
    spaces--;
  };

  diamond += '*'.repeat(n) + '\n';

  for (let i = n - 2; i >= 1; i -= 2) {
    spaces++;
    diamond += ' '.repeat(spaces) + '*'.repeat(i) + '\n'; 
  }

  return diamond;
}

console.log(diamond(13));