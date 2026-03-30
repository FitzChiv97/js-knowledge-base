// The Wide-Mouthed frog!
// https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89
const mouthSize = animal => animal.toLowerCase() === 'alligator' ? 'small': 'wide';


// Remove an exclamation mark from the end of string (2 solutions)
// https://www.codewars.com/kata/57fae964d80daa229d000126
const remove = (string) => (string[string.length - 1] === "!") ? string.slice(0, string.length - 1): string;
// const remove = (str) => str.endsWith('!')? str.slice(0, -1): str;
console.log(remove('hi!! Hi!!!'));


// Merge two sorted arrays into one
// https://www.codewars.com/kata/5899642f6e1b25935d000161
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2]
   .sort((a,b) => a - b)
   .filter((el,id,arr) => el !== arr[id+1]);
}
console.log(mergeArrays([1,2,5,4,12], [5,3,6,7,8,10]));


// Add Length
// https://www.codewars.com/kata/559d2284b5bb6799e9000047
const addLength = (str) => str.split(' ').map(el => el + ` ${el.length}`);
console.log(addLength('you will win'));


// Reversing Words in a String
// https://www.codewars.com/kata/57a55c8b72292d057b000594
const reverse = str => str.split(' ').reverse().join(' ');
console.log(reverse('you will win'));


// Grasshopper - Basic Function Fixer
// https://www.codewars.com/kata/56200d610758762fb0000002
const addFive = n => n + 5;


// Plural
// https://www.codewars.com/kata/52ceafd1f235ce81aa00073a
const plural = n => n !== 1;


// Capitalization and Mutability
// https://www.codewars.com/kata/595970246c9b8fa0a8000086
const capitalizeWord = word => word[0].toUpperCase() + word.slice(1);


// Bin to Decimal
// https://www.codewars.com/kata/57a5c31ce298a7e6b7000334
const binToDec = bin => parseInt(bin, 2);


// Triple Trouble (2 solutions)
// https://www.codewars.com/kata/5704aea738428f4d30000914
function tripleTrouble(one, two, three){ 
  let output = '';

  for(let i = 0; i < one.length; i++) {
    output += one[i] + two[i] + three[i];
  }

  return output;
}
// const tripleTrouble = (one, two, three) => one.split('').map((char, id) => char + two[id] + three[id]).join('');


// Remove duplicates from list
// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
const distinct = arr => arr.filter((el, id, arr) => id === arr.indexOf(el));
console.log(distinct([1, 2, 1, 1, 3, 2]));


// Multiplication table for number (2 solutions)
// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
function multiTable(num) {
  let table = '';

  for(let i = 1; i <= 10; i++) {
    table += `${i} * ${num} = ${i * num}\n`;
  }

  return table.trim();
}
// function multiTable(num) {
//   return [...Array(10)].map((_, id) => `${id+1} * ${num} = ${(id+1) * num}`).join('\n');
// }
console.log(multiTable(5));


// Hello, Name or World!
// https://www.codewars.com/kata/57e3f79c9cb119374600046b
const hello = name => `Hello, ${name? name[0].toUpperCase() + name.slice(1).toLowerCase() + '!':'World!'}`
console.log(hello('aliCE'));


// A wolf in sheep's clothing
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
function warnTheSheep(queue) {
  return (queue.indexOf('wolf') == queue.length - 1) ? 
  "Pls go away and stop eating my sheep":
  `Oi! Sheep number ${queue.length - (queue.indexOf('wolf') + 1)}! You are about to be eaten by a wolf!`;
}
console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));


// No zeros for heroes
// https://www.codewars.com/kata/570a6a46455d08ff8d001002
function noBoringZeros(n) {
  let str = String(n);
  let i = str.length-1;
  
  while (str[i] === '0') {
    str = str.slice(0,i);
    i--;
 }
  return +str;
}


// Find the position!
// https://www.codewars.com/kata/5808e2006b65bff35500008f
function position(letter){
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}


// Exclusive "or" (xor) Logical Operator
// https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c
function xor(a, b) {
  return (a && b)? false: a || b;
}


// Get Nth Even Number
// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed
function nthEven(n){
  return (n - 1) * 2;
}


// Expressions Matter
// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    (a + b) * c,
    (a * b) + c,
    a + (b * c),
    a * (b + c),
    a * b * c);
}


// Drink about
// https://www.codewars.com/kata/56170e844da7c6f647000063
function peopleWithAgeDrink(old) {
  return (old >= 21)? "drink whisky":
  (old >= 18)? "drink beer":
  (old >= 14)? "drink coke":
  "drink toddy";
};


// What's the real floor?
// https://www.codewars.com/kata/574b3b1599d8f897470018f6
function getRealFloor(n) {
  return (n >= 13)? n-2:
  (n > 0)? n-1: n;
}


// Short Long Short
// https://www.codewars.com/kata/50654ddff44f800200000007
let solution = (a,b) => (a.length < b.length)? a+b+a: b+a+b;


// My head is at the wrong end!
// https://www.codewars.com/kata/56f699cd9400f5b7d8000b55
function fixTheMeerkat(arr) {
 return arr.reverse();
}


// get character from ASCII Value
// https://www.codewars.com/kata/55ad04714f0b468e8200001c
function getChar(c){
  return String.fromCharCode(c);
}


// Lario and Muigi Pipe Problem
// https://www.codewars.com/kata/56b29582461215098d00000f
function pipeFix(nums){
  let arr = [];

  for (let i = nums[0]; i <= nums.slice(-1);i++) {
    arr.push(i);
  };

  return arr;
}


// Name Shuffler
// https://www.codewars.com/kata/559ac78160f0be07c200005a
function nameShuffler(str){
  return str.split(' ').reverse(''). join(' ');
}


// Basic variable assignment
// https://www.codewars.com/kata/50ee6b0bdeab583673000025
let a = "code";
let b = "wa.rs";
const name = a + b;


// Well of Ideas - Easy Version
// https://www.codewars.com/kata/57f222ce69e09c3630000212
function well(x){
  let ideas = x.filter(idea => idea === 'good').length;
  return (ideas > 2)? 'I smell a series!':
  (ideas >= 1)? 'Publish!': 'Fail!';
}


// 5 without numbers !!
// https://www.codewars.com/kata/59441520102eaa25260000bf
function unusualFive() {
  return 'abcde'.length;
}


// Super Duper Easy
// https://www.codewars.com/kata/55a5bfaa756cfede78000026
function problem(x){
  return (typeof x === 'string')? 'Error': (x * 50) + 6;
}


// Reverse List Order
// https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b
let reverseList = (list) => list.reverse(); 


// Filter out the geese
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((el) => !geese.includes(el));
};
console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim"]));


// Training JS #7: if..else and ternary operator
// https://www.codewars.com/kata/57202aefe8d6c514300001fd
function saleHotdogs(n) {
  return n * (n < 5 ? 100: n < 10 ? 95: 90);
}
console.log(saleHotdogs(10));


// Function 2 - squaring an argument (3 solutions)
// https://www.codewars.com/kata/523b623152af8a30c6000027
let square = (num) => Math.pow(num, 2);
// let square = (n) => n * n;
// let square = (n) => n ** 2;


// Stringy Strings
// https://www.codewars.com/kata/563b74ddd19a3ad462000054
let stringy = (size) => ''.padStart(size, '10');
console.log(stringy(6));