// Data Reverse (2 solutions)
function dataReverse(data) {
  let bytes = Array.from(Array(data.length / 8), byte => []);

  for(let byte of bytes) {
    byte.push(...data.splice(0, 8));
  }

  return bytes.reverse().flat();
} 

// function dataReverse(data) {
//   let bytes = [];

//   for(let i = 0; i < data.length; i += 8) {
//     bytes.unshift(...data.slice(i, i + 8));
//     console.log(bytes);
//   }
// }
console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));