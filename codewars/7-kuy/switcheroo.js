// Switcheroo
// https://www.codewars.com/kata/57f759bb664021a30300007d

function switcheroo(x){
  return x
    .split('')
    .map(el => (el === 'a')? 'b': (el === 'b')? 'a': el)
    .join('');
}

console.log(switcheroo('bbabcabb'));