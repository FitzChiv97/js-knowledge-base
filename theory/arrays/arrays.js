// CONVERTING STRING INTO AN ARRAY(5 WAYS)

let string = "Hello World";

function showArray(str) {
    console.log(str);
};

let str1 = string.split("");

let str2 = Array.from(string);

let str3 = Object.assign([], string);

let str4 = [...string];

let str5 = [];

for(let i = 0; i < string.length; i++) {
    str5.push(string[i]);
};


let monkeysCount = n => [...Array(n)].map((_, i) => i+1);
// Array(n) creates an array of length n with NO VALUES, 
// [...Array(n)] creates an array filled with undefined, 
// of length n.


// REMOVE DUPLICATE ELEMENTS FROM ARRAY
function isIsogram(str){                      //FILTER
  let arr = str.toLowerCase().split('');

  arr = arr.filter((el, idx) => {
    return arr.indexOf(el) === idx;
  })

  return (arr.length === str.length);
};

// function isIsogram(str) {                      //INDEXOF 
//   let arr = str.toLowerCase().split('');
//   let unique = [];

//   for(let i = 0; i < arr.length; i++) {
//       if(unique.indexOf(arr[i]) === -1) {
//         unique.push(arr[i]);
//     }
//   }
//   return (arr.length === str.length);
// }

// function isIsogram(str) {                       // FOREACH 
//   let arr = str.toLowerCase().split('');
//   let unique = [];

//   arr.forEach((el, idx) => {
//     if(unique.indexOf(el) === -1) {
//       unique.push(el);
//     }
//   })
//   return unique;
//   // return (arr.length === str.length);
// }

// function isIsogram(arr) {                  //FINDINDEX
//   let unique = [];
  
//   arr.forEach(item => {
//     if(unique.findIndex(el => el === item) === -1) {
//       unique.push(item);
//     }
//   })
//   return unique;
// }                  
                  
// console.log(isIsogram(["m", "m", "o", "s", "s", "e", "o", "e"])); 

// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('');
// longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") -> "abcdefklmopqwxy"


//SHALLOW COPYING OF AN ARRAY
// slice()
let array1 = [1, 2, 3, 4, 5];
// let array2 = array1.slice();
// let array3 = array1.slice(0, 2); //2nd idx isn't included!
// console.log(array2);
// console.log(array3);

// [...] spread operator - can also combine 2 or more arrays
let array2 = [...array1];
console.log(array2);

// How to Merge/Flatten an array of arrays in JavaScript
// array.flat(depth) method
// [].concat(...array)

//       ???
// return [...Array(n)];
// return  [...Array(n+1).keys()];


//create an array of 3 undefined items
let obj = {
  length: 3,
}
console.log(Array.from(obj));
console.log(Array(...Array(3)));
console.log([...Array(3)]);
console.log(Array.from({length: 3}));