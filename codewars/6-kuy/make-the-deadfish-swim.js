// Make the Deadfish Swim
// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

function parse(data) {
  let arr = [];

  data.split('').reduce((v, c) => {
    if (c == 'i') v++;
    if (c == 'd') v--;
    if (c == 's') v*=v;
    if (c == 'o') arr.push(v);

    return v;
  }, 0);

  return arr; 
}

console.log(parse("iiisdosodddxxxddiso"));