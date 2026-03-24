//The Wide-Mouthed frog!
const mouthSize = animal => animal.toLowerCase() === 'alligator' ? 'small': 'wide';


//Remove an exclamation mark from the end of string (2 solutions)
const remove = (string) => (string[string.length - 1] === "!") ? string.slice(0, string.length - 1): string;
// const remove = (str) => str.endsWith('!')? str.slice(0, -1): str;
console.log(remove('hi!! Hi!!!'));


//Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2]
   .sort((a,b) => a - b)
   .filter((el,id,arr) => el !== arr[id+1]);
}
console.log(mergeArrays([1,2,5,4,12], [5,3,6,7,8,10]));


// Add Length
const addLength = (str) => str.split(' ').map(el => el + ` ${el.length}`);
console.log(addLength('you will win'));


// Reversing Words in a String
const reverse = str => str.split(' ').reverse().join(' ');
console.log(reverse('you will win'));


// Grasshopper - Basic Function Fixer
const addFive = n => n + 5;


// Plural
const plural = n => n !== 1;


// Capitalization and Mutability
const capitalizeWord = word => word[0].toUpperCase() + word.slice(1);


//Bin to Decimal
const binToDec = bin => parseInt(bin, 2);


//Triple Trouble (2 solutions)
function tripleTrouble(one, two, three){ 
  let output = '';

  for(let i = 0; i < one.length; i++) {
    output += one[i] + two[i] + three[i];
  }

  return output;
}
// const tripleTrouble = (one, two, three) => one.split('').map((char, id) => char + two[id] + three[id]).join('');


//Remove duplicates from list
const distinct = arr => arr.filter((el, id, arr) => id === arr.indexOf(el));
console.log(distinct([1, 2, 1, 1, 3, 2]));


//Multiplication table for number (2 solutions)
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


//Hello, Name or World!
const hello = name => `Hello, ${name? name[0].toUpperCase() + name.slice(1).toLowerCase() + '!':'World!'}`
console.log(hello('aliCE'));