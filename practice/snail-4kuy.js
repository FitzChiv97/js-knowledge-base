// let array = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10], 
//   [11,12,13,14,15], 
//   [16,17,18,19,20],
//   [21,22,23,24,25]
// ];

let array = [
  [1, 2, 3],  
  [4, 5, 6],
  [7, 8, 9]
];

let result = [];

result.push(...array.shift());
array.map(row => result.push(row.pop()));
array.reverse().map(row => row.reverse());

console.log(array);

// while(array.length) {
// }

// while(array.length) {
//   result = result ? result.concat(array.shift()) : array.shift();
  
//   for(let i = 0; i < array.length; i++) {
//     result.push(array[i].pop());
//   }

//   result = result.concat((array.pop() || []).reverse()); //[] is used to prevent undefined

//   for(let i = array.length - 1; i >= 0; i--) {
//     result.push(array[i].shift());
//   }
// }

console.log(result);

// let array = [[]];

function snail(array) {
  let clockwiseSnail = [];
  
  while (array.length !== 0) {

    for(let x = 0; x < array.length; x++) {
      if (array[0].length > 0) {
        do {
          clockwiseSnail.push(array[0].shift());
        } while (array[0].length !== 0);
      } else {
        clockwiseSnail.push(array[x].pop());
      };
    };

    for(let y = array.length - 1; y > 0; y--) {
      if (y === array.length - 1) {
        do {
          clockwiseSnail.push(array[y].pop());
        } while (array[y].length !== 0);
      } else {
        clockwiseSnail.push(array[y].shift());
      };
    };

    array.splice(0, 1);
    array.splice(array.length - 1, 1);
  };

  return (clockwiseSnail[0] == undefined)? []: clockwiseSnail;
}

console.log(snail(array));