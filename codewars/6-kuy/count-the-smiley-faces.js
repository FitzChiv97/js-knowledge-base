// Count the smiley faces!(3 solutions)
// https://www.codewars.com/kata/583203e6eb35d7980400002a
// tag: Set

function countSmileys(arr) {
  const rules = [':', ';', '-', '~', ')', 'D'];

  let result = arr.filter(face => {
    return face.split('').every(item => rules.includes(item));
  });

  result = result.filter(face => {
    return (face.length <= 3) && 
    (face[0] == rules[0] || face[0] == rules[1]) &&
    (face[face.length-1] == rules[4] || face[face.length-1] == rules[5]);
  });

  return result.length;
}

/*
const faces = new Set();

for(let eyes of [':',';']) {
  for(let nose of ['-','~','']) {
    for(let mouth of [')','D']) {
      faces.add(eyes+nose+mouth);
    }
  }
}
console.log(faces);

function countSmileys(arr) {
  return arr.filter(face => faces.has(face)).length;
}
*/

/*
function countSmileys(arr) {
  const rules = {
    eyes: [':',';'],
    noses: ['-','~',''],
    mouths: [')','D'],
  };

  return arr.reduce((acc, face) => {
    let eye = face[0];
    let nose = (face.length > 2)? face[1]: '';
    let mouth = (face.length > 2)? face[2]: face[1];

    rules.eyes.includes(eye) && 
    rules.noses.includes(nose) && 
    rules.mouths.includes(mouth) && 
    acc++;

    return acc;
  }, 0);
}
*/

console.log(countSmileys([':)',':(',':D',':O', '))', ':;', ':--)']));