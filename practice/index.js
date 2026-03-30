"use strict";
// while (true) {
//     let num = +prompt('Type more than 100');
//     if (num === 0) {
//         alert('Cancelled');
//         break;
//     } else if (num === NaN) {
//         alert('Type only number!')
//     } else if (!(num >= 1 && num <= 100)) {
//         alert('Correct');
//         break;
//     };
// };

// while (true) {
//     num = +prompt("Введите число больше 100?");
//     if (num === 0) {
//         alert("Cancelled");
//         break;
//     } else if (isNaN(num) == true) {
//         alert("Only numbers");
//         continue;
//     } else if (!(num >= 1 && num <= 100)) {
//         alert("Correct");
//         break;
//     }
// }

// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm('parental agreement needed');
//     };
// };

// let age = prompt('Type your age');

// function showMovie() {
//     if (!checkAge(age)) return alert('No movie');
//     alert('Yore watching movie');
// };

// showMovie();

// function showPrimes(a) {
//     for (let b = 2; b < a; b++) {
//       if (!isPrime(b)) continue;
//       alert(b);
//     };
//   };

//   function isPrime(b) {
//     for (let c = 2; c < b; c++) {
//       if ( b % c == 0) return false;
//     };
//     return true;
//   };

//   showPrimes(7);

// let age = prompt('your age?');
// function checkAge(age) {
//     return (age > 18)? true: confirm('parental agreement');
// };
// console.log(checkAge(age));

// let num = prompt('number?');
// function checkNum(num) {
//     if (num > 18 == true) return true || return confirm('parental agreement');
// };
// console.log(checkNum(num));

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     };
// };

// function min(a, b) {
//     return (a < b)? a: b;
// };

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// Напишите код, который выводит все простые числа из интервала от 2 до n.
// n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

// outer: for (let a = 2; a < 10; a++) {
//     for (let c = 2; c < a; c++) {
//     if (a % c == 0) continue outer;
//     };
//     console.log(a);
// };

// if (x != NaN || n != NaN) {
//     alert('type numbers only!');

// function pow(x,n) {
//     if ((x >= 1 && x <= 100) && (n >= 1 && n <= 100)) {
//         let result = x**n;
//         return result;
//     } else {
//         alert ('type numbers only!');
//     };
// };
// let x = prompt('x?');
// let n = prompt('n?');
// alert(pow(x,n));

// const multiply = (a,b) => {
//     if (!a || !b
//     || typeof a !== 'number'
//     || typeof b !== 'number') return 'error';
//     else return a * b;
// };
// console.log(multiply(NaN, 2));

// function makeNegative(num) {
//     if (num === 0) return num;
//     else if (num < 0) return num;
//     else return -num;
// };

// const makeNegative = num => {
//     return (num <= 0)? num: -num;
// };

// function makeNegative(num) {
//     return -Math.abs(num);
//   }
// console.log(makeNegative(0));

// const numberToString = num => String(num);

// function opposite(number) {
//   return (number === 0)? 0: -number;
// };

// console.log(opposite(-34));

// function repeatString(str, times) {
//   let res = '';
//   while (times > 0) {
//     res = res + str;
//     times--;
//   };
//   return res;
// };

// console.log(repeatString('Hi', 3));

// function repeatStr(n, s) {
//   let res = '';
//   for (let i = 0; i < n; i++) {
//     res += s;
//   };
//   return res;
// };

// console.log(repeatStr(3,'a'));

// const blackButton = {
//     width: 400,
//     text: 'buy',
//     color: 'black',
// };

// const redButton = {
//     height: 200,
//     color: 'red',
// };

// const button = {
//     ...redButton,
//     ...blackButton,
// };

// console.log(button);

// const name = 'Elia';
// const city = 'Minsk';
// const sentense = `My name is ${name}, I live in ${city}`;
// console.log(sentense);

// function hi() {
//     console.log('Hi');
// };

// hi();

// hi = 10;
// console.log(hi);

// const bye = () => {
//     console.log('bye');
// };

// console.log(bye);
// bye();

// function multiply(a, b = 2) {
//     return a * b;
// };
// console.log(multiply(1));

// const mult = function(a, b = 2) {
//     return a * b;
// };
// console.log(mult(2,10));

// const multByValue = (a, b = 2) => a * b;
// console.log(multByValue(3));

// let num = 8;
// const summation = (num) => {
//     let result = 0;
//     for (let i = 1; i <= num; i++) {
//         result += i;
//     };
//     return result;
// };
// console.log(summation(8));

// function basicOp(operation, value1, value2) {
//     switch(operation) {
//         case '+':
//             return value1 + value2;
//         case '-':
//             return value1 - value2;
//         case '*':
//             return value1 * value2;
//         case '/':
//             return value1 / value2;
//     };
// };
// console.log(basicOp('-', 15, 18));

// function booleanToString(b){
//     return b + '';
// };

// console.log(booleanToString(true));

// const newPost = (post, addedAt = Date()) => {
//     return  {
//         ...post,
//         addedAt,
//     };
// };

// const oldPost = {
//     id: 3,
//     author: 'Elia',
//     name: 'Breaking news',
// };

// console.log(newPost(oldPost));

// n = Math.PI;
// console.log(n);

// function lovefunc(flower1, flower2){
//     if ((flower1 % 2 == 0 && flower2 % 2 == 0) || (flower1 % 2 == 1 && flower2 % 2 == 1)) {
//       return false;
//       } else {
//       return true;
//       };
//     };
//     console.log(lovefunc(13,13));

// const newPost = (post, addedAt = Date()) => {
//     return {
//         ...post,
//         addedAt,
//     };
// };

// const firstPost = {
//     name: 'Breaking news',
//     author: 'Bogdan',
// };

// console.log(newPost(firstPost));

// const {name, author} = firstPost;
// console.log(author);

// const userProfile = {
//     name: 'Bogdan',
//     commentsQty: 23,
// };

// const userInfo = (profile) => {
//     const {name, commentsQty} = profile;
//     console.log(name);
//     console.log(commentsQty);
//     if (!commentsQty) {
//         console.log(`User ${name} has no comments`);
//     } else {
//         console.log(`User ${name} has ${commentsQty} comments`);
//     };
// };

// userInfo(userProfile);

// const email1 = 'nightlighter1997@gmail.com';
// const email2 = 'porter.morgan.97bb@gmail.com';
// const email3 = 'delta3807@yandex.ru';

// function createName (email) {
//     const userName = email.slice(0, email.indexOf('@'));
//     const domain = email.slice(email.indexOf('@') + 1);
//     console.log(userName, domain);
// };

// createName(email1);
// createName(email2);
// createName(email3);

// let line = 'frontend and backend development';
// console.log(line.match(/end/));

// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abc',
// };

// const objectKeys = Object.values(myObject);

// objectKeys.forEach(el => {
//     console.log(el, myObject);
// });

// function strCount(str, letter) {
// };

// strCount('Hello', 'l')

// const greeting = 'Hello';
// myArray = greeting.split('');
// let count = 0;
// myArray.forEach(el => {
//   if (el === 'l') {
//     count += 1;
//   };
// });

// console.log(myArray);
// console.log(count);

// let string = 'code';
// let myArray = [];

// for (let i = 0; i < string.length; i++) {
//   myArray.push(string[i]);
// }

// console.log(myArray);

// function getGrade (s1, s2, s3) {
//   const average = (s1 + s2 + s3) / 3;
//   if (average >= 90) {
//     return 'A';
//   } else if (average >= 80) {
//     return 'B';
//   } else if (average >= 70) {
//     return 'C';
//   } else if (average >= 60) {
//     return 'D';
//   } else {
//     return 'F';
//   };
// };

// console.log(getGrade(91, 92, 90));

// ROCK-PAPER-SCISSORS
// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return 'Draw!';
//   };

//   if (p1 === 'scissors' && p2 === 'paper') {
//     return 'Player 1 won!';
//   } else if (p1 === 'paper' && p2 === 'rock') {
//     return 'Player 1 won!';
//   } else if (p1 === 'rock' && p2 === 'scissors') {
//     return 'Player 1 won!';
//   } else {
//     return 'Player 2 won!';
//   };
// };

// let result = rps('paper', 'scissors');
// console.log(result);

// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return 'Draw!';
//   };

//   const rules = {
//     'rock':'scissors',
//     'scissors':'paper',
//     'paper':'rock',
//   };

//   for (const key in rules) {
//     if (p1 === key && p2 === rules.key) {
//       return 'Player 1 won!';
//     };
//   };

//   return 'Player 2 won!';
// };

// let result = rps('paper', 'scissors');
// console.log(result);

// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return 'Draw!';
//   };

//   const rules = {
//     'rock':'scissors',
//     'scissors':'paper',
//     'paper':'rock',
//   };

//   if (rules[p1] === p2) {
//       return 'Player 1 won!';
//   } else {
//     return 'Player 2 won!';
//    };
// };

// let result = rps('paper', 'rock');
// console.log(result);

// Return the number of vowels in the given string.

// function getCount(str) {
//   let vowelsCount = 0;
//   let regExp = /[aeiou]/g;
//   let result = str.match(regExp);
//   result.forEach(el => vowelsCount++);
//   return vowelsCount;
// };

// function getCount(str) {
//   let vowelsCount = 0;
//   let vowels = ['e', 'a', 'i', 'o', 'u'];
//   let array = [...str];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (vowels[j] === array[i]) {
//         vowelsCount += 1;
//         break;
//       };
//     };
//   };
//   return vowelsCount;
// };

// console.log(getCount('abracadabra'));

// function highAndLow(numbers){
//   // ...
// }

// let string = '1 2 3 4 5';
// let array = string.split('');
// console.log(array);
// for(let i = 0; i <= array.length; i++) {
//   array[i]
// }
// let max = Math.max(array);
// console.log(max);

// let str =  "This website is for losers LOL!".replace(/[eaiou]/gi,'');
// console.log(str);

// let str = '8 j 8   mBliB8g  imjB8B8  jl  B';
// let str2 = str.replace(/ /g, '');
// console.log(str2);

// function positiveSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++)
//     if (arr[i] > 0) {
//         sum += arr[i]
//     };
//     return sum;
// };

// console.log(positiveSum([1,-4,7,12]));

// function positiveSum(arr) {
//     return arr.reduce((a, b) => a + ((b > 0)? b : 0));
// };

// console.log(positiveSum([1,-4,7,12]));

// function countSheeps(sheep) {
//     let count = 0;
//     for (let i = 0; i < sheep.length; i++) {
//         if (sheep[i] === true) {
//             count += 1;
//         };
//     };
//     return count;
//   };

// function combat(health, damage) {
//     let newHealth = health - damage;
//     return (newHealth)? newHealth : 0;
//   };

// console.log(combat(10,11));

// let str = '9 years old';
// let str2 = str.substring(0,1);
// console.log(str2);
// console.log(typeof str2 === 'string');

// let array = [7, 7, 5, 9, 0, 3, 1, 9, 1];
// let n = 7;

// NOT MINE CODE
// const lengthOfSequence = (arr, n) => {
//     const count = arr.filter(val => val === n)
//     console.log(count);
//     if(count.length !== 2) return 0
//     if(arr.length === 2) return 2

//     return arr.lastIndexOf(n) - arr.indexOf(n) + 1
//   }
// console.log(lengthOfSequence(array, n));

// let lengthOfSequence = function (arr, n) {
//     let result = [];
//     arr.forEach((el, index) => {
//       if(el === n) {
//         result.push(index);
//       };
//     });
//     console.log(result);
//     if (result.length == 2) {
//       return result[1] - result[0] + 1;
//       } else {
//         return 0;
//       };
//   };

// console.log(lengthOfSequence(array, n));

// function testEven(n) {
//     return (n % 2 === true)? true: false;
// };

// HIGHEST AND LOWEST

// let numbers = ['-7', '-2', '-8', '-55', '-110'];
// let max = numbers.reduce((result, item) => {
//   return Math.max(result, item);
// });

// console.log(max); // Outputs: -2

// let numbers = "120 -9 3 -47 10 52 -71 134";

// function highAndLow(numbers) {
//   const array = numbers.split(' ');
//   console.log(array);

//   let order = array.sort((a, b) => b - a);
//   console.log(order);

//   let max = array[0];
//   let min = array[array.length - 1];

//   return `${max} ${min}`;
// };

// console.log(highAndLow(numbers));

// let numbers = "120 -9 3 -47 10 52 -71 134";

// function highAndLow(numbers){
//   const array = numbers.split(' ');
//   let max = array[0];
//   let min = array[0];

//   for(let i = 1; i < array.length; i++) {
//     if (+array[i] > max) {max = array[i]};
//     if (+array[i] < min) {min = array[i]};
//   };

//   return `${max} ${min}`;
// };
// console.log(highAndLow(numbers));

// How good are you really?
// function betterThanAverage(classPoints, yourPoints) {
//   let average = classPoints.reduce((a,b) => {return a + b}, 0) / classPoints.length;
//   return (classPoints > yourPoints)? false: true;
// };

// function betterThanAverage(classPoints, yourPoints) {
//   let num = 0;

//   for(let i = 0; i < classPoints.length; i++) {
//     num += classPoints[i];
//   };

//   let average = num / classPoints.length;

//   return yourPoints > average;
// };

// GOOD VS EVIL
// function goodVsEvil(good, evil) {

// const goodWorth = [{unit: 'Hobbits', worth: 1}, {unit: 'Men', worth: 2},
//                      {unit: 'Elves', worth: 3}, { unit: 'Dwarves', worth: 3},
//                      {unit:'Eagles', worth: 4}, {unit: 'Wizards', worth: 10}];

// const evilWorth = [{unit: 'Orcs', worth: 1}, {unit: 'Men', worth: 2},
//                      {unit: 'Wargs', worth: 2}, {unit: 'Goblins', worth: 2},
//                      {unit:'Uruk Hai', worth: 3}, {unit: 'Trolls', worth: 5},
//                      {unit:'Wizards', worth: 10}];

// let goodArmy = good.split(' ');
// let evilArmy = evil.split(' ');

// for(let i = 0; i < goodArmy.length; i++) {
//   goodArmy[i] *= goodWorth[i].worth;
// };

// for(let i = 0; i < evilArmy.length; i++) {
//   evilArmy[i] *= evilWorth[i].worth;

// };

// const goodMax = goodArmy.reduce((a, b) => {return a + b}, 0);
// const evilMax = evilArmy.reduce((a, b) => {return a + b}, 0);

// if (goodMax === evilMax) {
//   return "Battle Result: No victor on this battle field";
// };

// if (goodMax > evilMax) {
//   return "Battle Result: Good triumphs over Evil";
// } else {
//   return "Battle Result: Evil eradicates all trace of Good";
// };
// };

// console.log(goodVsEvil('11 7 3 2 4 5', '9 1 2 8 4 2 3'));

// Abbreviate Name
// function abbrevName(name){
//     const firstLetter = name.slice(0,1);
//     const secondLetter = name.slice(name.indexOf(' ') + 1, name.indexOf(' ') + 2);

//     const initials = firstLetter + '.' + secondLetter;
//     return initials.toUpperCase();
//   };

// let name = 'alan wake';

// function abbrevName(name) {
//     const arrayName = name.split(' ');
//     const initials = arrayName.map(el => el[0].toUpperCase());
//     return initials.join('.');
// };

// Descending Order
// function descendingOrder(n){
//     const numbers = Array.from(String(n), el => Number(el));
//     let sorted = numbers.sort((a, b) => b - a);
//     return Number(sorted.join(''));
// };

// descendingOrder(42145);
// parseInt(String(n).split('').sort().reverse().join('')); NOT MINE CODE

// function areYouPlayingBanjo(name) {
//     return (name[0] === 'r' || name[0] === 'R')?
//     `${name} plays banjo`:
//     `${name} does not play banjo`;
// };

// function past(h, m, s){
//     return (s + (m * 60) + (h * 3600)) * 1000;
// };

// Multiples of 3 and 5
// function solution(number) {
//     if (number <= 0) return 0;

//     let multiples = [];

//     for (let i = 1; i < number; i++) {
//         if (i % 3 == 0 || i % 5 == 0) {
//             multiples.push(i);
//     };
// };
//     return multiples.reduce((sum, item) => sum + item, 0);
// };

// Who likes it?
// function likes(names) {
//     switch(names.length) {
//         case 0:
//         return 'no one likes this';
//         break;
//         case 1:
//         return `${names[0]} likes this`;
//         break;
//         case 2:
//         return `${names[0]} and ${names[1]} like this`;
//         break;
//         case 3:
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//         break;
//         default:
//         return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//     };
// };
// console.log(likes([]));

// Counting Duplicates 2 WAYS TO ADD VALUES TO THE OBJECT
// function duplicateCount(text) {
//     const array = text.toLowerCase().split('');
//     // let itemsCnt = {};
//     let count = 0;

//     // array.forEach(val => {
//     //     return itemsCnt[val] = (itemsCnt[val] || 0) + 1;
//     // });

//     let itemsCnt = array.reduce((objectValues, item) => {
//         objectValues[item] = (objectValues[item] || 0) + 1;
//         return objectValues;
//     }, {});

//     for(const key in itemsCnt) {
//         if(itemsCnt[key] > 1) {
//             count += 1;
//         };
//     };

//     return count;
// };

// console.log(duplicateCount('aA11Cc2'));

// Find the int that appears an odd number of times
// function findOdd(array) {
//     let object = {};

//     array.forEach((item) => {
//         return object[item] = (object[item] || 0) + 1;
//     });

//     for (const key in object) {
//         if (object[key] % 2 === 1) {
//             return Number(key);
//         };
//     };
// };

// console.log(findOdd([1,1,7,7,4,4,2]));

// Stop gninnipS My sdroW!
// function spinWords(string){
//     let words = string.split(' ');

//     for(let i = 0; i < words.length; i++) {
//         if (words[i].length > 4) {
//         words[i] = words[i].split('').reverse().join('');
//         };
//     };

//     return words.join(' ');
// };

// console.log(spinWords("Hey fellow warriors"));

// Reverse words
// function reverseWords(str) {
//     return str.split(' ').map(el => {
//         return el.split('').reverse().join('');
//     }).join(' ');
// };

// console.log(reverseWords('double spaces'));

// // DIGITAL ROOT
// function digitalRoot(n) {
//     let str = String(n);
//     let arr = [];
//     let result;

//     for (let i = 0; i < str.length; i++) {
//         arr.push(Number(str[i]));
//     };

//     do {
//         result = arr.reduce((sum, el) => sum + el);
//         arr = Array.from(String(result), Number);
//     } while (String(result).length != 1);

//     return result;
// };

// console.log(digitalRoot(493193));

// function findOutlier(int) {
//     const oddEven = [];
//     let countEven = 0;
//     let countOdd = 0;

//     int.map(el => {
//         oddEven.push({number: el, value: (el % 2 === 0)? 'even': 'odd'});
//     });

//     for(let i = 0; i < oddEven.length; i++) {
//         (oddEven[i].value === 'even')? countEven++ : countOdd++;
//     };

//     if (countEven === 1) {
//         for(let i = 0; i < oddEven.length; i++) {
//             if (oddEven[i].value === 'even') {
//                 return oddEven[i].number;
//             };
//         };
//     };

//     if (countOdd === 1) {
//         for(let i = 0; i < oddEven.length; i++) {
//             if (oddEven[i].value === 'odd') {
//                 return oddEven[i].number;
//             };
//         };
//     };

// };

// console.log(findOutlier([7, 6, 4, 2, 0]));

// Remove all values from list a, which are present in list b keeping their order. NOT WORKING
// function arrayDiff(a, b) {
//     let result = [];

//     if(b[0] === undefined) {
//         return a;
//     };

//     for(let i = 0; i < a.length; i++) {
//         for(let j = 0; j < b.length; j++) {
//             if (a[i] !== b[j]) {
//               result.push(a[i]);
//             };
//         };
//     };

//     return result;
// };

// console.log(arrayDiff([1, 2, 3], [1, 2]));

// Your order, please
// function order(words) {
//     if (words.length === 0) return words;

//     let result = [];
//     let arr = words.split(' ');

//     for(let i = 1; i <= arr.length; i++) {
//         result.push(arr.find(el => el.match(i)));
//     };

//     return String(result.join(' '));
// };

// console.log(order(""));
// console.log(order("T4est Is1 thi2s 3a friend6 my5"));

// Duplicate Encoder
// function duplicateEncoder(word) {
//     const arr = word.toLowerCase().split('');
//     let encodedWord = [];

//     for(let i = 0; i < arr.length; i++) {
//         let count = 0;
//         arr.forEach(el => {
//             if (el === arr[i]) count++;
//         });
//         if (count > 1) encodedWord.push(')')
//         else encodedWord.push('(');
//     };

//     return encodedWord.join('');
// };

// console.log(duplicateEncoder('Success'));

// // Unique In Order - remember iterable can be a string or an array
// let uniqueInOrder = function(iterable) {
//     let array;
//     (typeof iterable === 'string')?
//     array = iterable.split(''): array = iterable;

//     let result = [];
//     if (iterable.length === 0) return result;
//     result.push(array[0]);

//     for(let i = 0; i < array.length; i++){
//         if (result[result.length - 1] !== array[i]) {
//             result.push(array[i]);
//         };
//     };

//     return result;
// };

// console.log(uniqueInOrder([])); 'AAAABBBCCDAABBB'; [1,2,2,3,3]

// How Many Unique Consonants?
// function countConsonants(str) {
//     const cons =  ['b','c','d','f','g','h','j','k',
//         'l','m','n','p','q','r','s','t','v','w','x','y','z'];
//     const arr = str.toLowerCase().split('');

//     const filteredCons = arr.filter(el => cons.includes(el));

//     let result = [];

//     for(let i = 0; i < filteredCons.length; i++) {
//             if (!result.includes(filteredCons[i])) {
//                 result.push(filteredCons[i]);
//         };
//     };

//     return result.length;
// };

// console.log(countConsonants('Count my unique consonants!!'));

// Ordering the words! Sort them based on their ASCII codes
// function orderWord(s) {
//     if (s === null || s.length === 0) return 'Invalid String!';

//     let array = [];

//     for(let i = 0; i < s.length; i++) {
//         array.push(s.charCodeAt(i));
//     };

//     return array.sort((a,b) => a - b)
//     .map(el  => String.fromCharCode(el))
//     .join('');
// };
// console.log(orderWord(''));

// Order of weight
// function arrange(arr){

// };
// console.log(arrange(["653G","4T","200KG","100KG","8T", "96G"]));

// Are the numbers in order? determine whether the numbers are in ascending order
// function inAscOrder(arr) {
//     let count = 0;

//     for(let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < arr[i+1]) count++;
//     };

//     return (count === arr.length - 1)? true: false;
// };
// console.log(inAscOrder([1]));

// Ordered Count of Characters
// const orderedCount = function (text) {
//   let array = [...text];
//   let result = [];

//     for (let i = 0; i < array.length; i++) {
//       let count = 0;
//         for(let j = 0; j < array.length; j++) {
//             if(array[i] === array[j]) count++;
//           };

//         if(array.indexOf(array[i]) === i)
//           result.push([array[i], count]);

//         // console.log(array[i], array.indexOf(array[i]), i, count, result);
//     };
//     return result;
// };
// console.log(orderedCount("abracadabra"));

// Take a Ten Minutes Walk
// function isValidWalk(walk) {
//     if(walk.length !== 10) return false;

//     const directions = {
//         'n': + 1,
//         's': - 1,
//         'w': + 0.5,
//         'e': - 0.5,
//     };

//     let distance = walk.map(el => {
//         for(let key in directions) {
//             if (el === key) return directions[key];
//         };
//     });

//     return (distance.reduce((sum, el) => sum + el, 0) === 0)? true: false;
// };

// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));

// Pete, the baker
// const recipe = {
//     sugar: 117,
//     eggs: 1,
//     flour: 200,
// };

// let arr = [];

// const ingridients = {
//     eggs: 2,
//     sugar: 500,
//     milk: 420,
//     flour: 1000,
// };

// function cakes(recipe, ingridients) {
//     const arr1 = Object.keys(recipe).map(key => [key, recipe[key]]);
//     const arr2 = Object.keys(ingridients).map(key => [key, ingridients[key]]);

//     let cooking = [];

//     outer: for(let i = 0; i < arr1.length; i++){
//         console.log(arr1[i]);
//         for(let j = 0; j < arr2.length; j++){
//             console.log(arr2[j]);
//             if (arr2[j][0] === arr1[i][0]) {
//                 console.log(true);
//                 cooking.push(Math.floor(arr2[j][1] / arr1[i][1]));
//                 console.log(cooking);
//                 continue outer;
//             };
//         };
//     };

//     const cakesQty = cooking.reduce((sum, el) => {
//         if (el < sum) sum = el;
//         return sum;
//     },cooking[0]);

//     return (!(cooking.length < arr1.length))? cakesQty: 0;
// };

// console.log(cakes(recipe, ingridients));

// OBJECTS BASICS PRACTICE

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// console.log(salaries);

// function salariesSum(obj) {
//     let sum = 0;

//     for(let key in obj){
//         sum += obj[key];
//     };

//     return sum;
// };

// const sum = salariesSum(salaries);
// console.log(sum);

// let object = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function muptiplyNumeric(obj){
//     for(let key in obj){
//         if(typeof obj[key] === 'number'){
//             obj[key] *= 2;
//         };
//     };
// };

// console.log(muptiplyNumeric(object));
// console.log(object);

// Find Maximum and Minimum Values of a List
// function max(list){
//     return Math.max(...list);
// };

// function min(list){
//     return Math.min(...list);
// };

// console.log(max([42, 54, 65, 87, 0]));
// console.log(min([42, 54, 65, 87, 0]));

// function countBy(x, n) {
//     let result = [];

//     for(let i = 1; i <= n; i++){
//       result.push(x * i);
//     };

//     return result;
// };

// console.log(countBy(2, 10));

// const reverseSeq = n => {
//     let result = [];

//     for (let i = n; i > 0; i--){
//     result.push(i);
//     };

//     return result;
// };

// console.log(reverseSeq(5));

// Calculate BMI
// function bmi(weight, height) {
//     let bmi = Math.round(weight / (height * heigth));
//     console.log(bmi);

//     if (bmi <= 18.5) return 'Underweight';
//     if (bmi > 18.5 && bmi <= 25) return 'Normal';
//     if (bmi > 25 && bmi <= 30) return 'Overweight';

//     return 'Obese';
// };

// console.log(bmi(80, 1.80));

// Fake Binary
// function fakeBinary(x){
//     return [...x].map(i => (i <= 5)? 0: 1).join('');
// };

// console.log(fakeBinary('45385593107843568'));

// function sum(numbers) {
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         console.log(sum);
//         console.log(numbers[i]);
//         sum += numbers[i];
//     };
//     return sum;
// };

// console.log(sum([1, 5.2, 4, 0, -1]));

// function countPositivesSumNegatives(input) {
//     if (input === null || input.length === 0) return [];

//     let count = 0;
//     let sum = 0;

//     input.forEach(el => {
//       if (el > 0) count++;
//       else sum += el;
//     });

//     return [count, sum];
// };

// let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// console.log(countPositivesSumNegatives(input));

// let array = [1,2,3];

// let result = maps(array);
// console.log(result);
// function maps(x) {
//    return x.map(el => el * 2);
// };

// Convert number to reversed array of digits
// function digitize(n) {
//     return Array.from(String(n), Number).reverse();
// };
// console.log(digitize(54321));

// Removing Every Second Element
// function removeEveryOther(arr){
//     return arr.filter((_,i) => i % 2 === 0);
// };

// let array = ["3","7","2","5","y","t","6","d","y","o","u","l","o","y","a","v","d","n","d"];
// console.log(removeEveryOther(array));

// Square Every Digit
// function squareDigits(num){
//     const array = Array.from(String(num), Number);
//     return Number(array.map(el => el * el).join(''));
// };

// console.log(squareDigits(765));

// Filter String from a list
// function filter_list(l) {
//     for(let i = 0; i < l.length; i++){
//         console.log(l[i]);
//         if(typeof l[i] === 'string') {
//             l.splice(i, 1);
//             i--;
//         };
//     };
//     return l;
// };

// function noStrings(item){
//     if (!(typeof item === 'string')) {
//         console.log(item);
//         return item;
//     };
// };

// function filter_list(l){
//     return l.filter(noStrings);
// };

// console.log(filter_list([0, 1,"a","b", 15]));

// Get the Middle Character
// function getMiddle(s){
//     if(s.length % 2 === 0) {
//         return s.slice((s.length / 2) - 1, (s.length / 2) + 1);
//     } else {
//         return s.slice(Math.floor((s.length / 2)), Math.floor(s.length / 2) + 1);
//     };
// };

// console.log(getMiddle('testings'));

// You're a square!
// let isSquare = function(n){
//     for(let i = 0; i <= n; i++){
//         if(i === Math.sqrt(n)) return true;
//     };
//     return false;
// };

// console.log(isSquare(9));

// function accum(s) {
//   let arr = s.split("");
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i].repeat(i + 1).toLowerCase());
//   }

//   console.log(result);

//   return result.map((el) => el[0].toUpperCase() + el.substring(1)).join("-");
// }

// console.log(accum("ZpzglnRxqenU"));


// let age = 11;

// // age в диапазоне

// if (age >= 14 && age <= 90) {
//     console.log('access granted');
// };

// // age ВНЕ диапазона

// if(age < 14 || age > 90) {
//     console.log(age);
// };

// if (!(age > 14) || !(age < 90)) {
//     console.log('no access');
// };

// if(!(age >= 14 && age <= 90)) {
//     console.log('no');
// };


// let num1 = 10;
// let num2 = 20;
// let result;
// result ??= (num1 ?? num2);
// console.log(result);


// let userName = prompt('login?');
// let password; 

// if (userName === 'admin') {
//     password = prompt('password?');
//     (password === 'boss') ? alert('welcome!'):
//     (password === null || password === "") ? alert('cancelled'):
//     alert('wrong password');
// } else if (userName === "" || userName === null) {
//     alert('no access');
// } else {
//     alert ('unknown user');
// };


// let browser = 'Safari';

// if (browser === "Edge") {
//     console.log("you've got the Edge");
// } else if (browser === 0 || "" || "Opera" || 0) {
//     console.log('Okay we support these browsers too');
// } else {
//     console.log('We hope that this page looks ok!');
// };

// console.log(browser === "Safari");


//В строгом режиме, когда Function Declaration находится в блоке {...}, 
// функция доступна везде внутри блока. Но не снаружи него.

// let age = 19;

// if (age < 18) {
//     welcome();
//     function welcome() {
//         console.log('hello');
//     }
// } else {
//     welcome();
//     function welcome() {
//         console.log('greeting');
//     }
// }

// пример выше

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNum(obj) {
//     for(let key in obj) {
//         console.log(typeof obj[key]);
//         if(typeof obj[key] === "number") {
//             obj[key] *= 2;
//         };
//     };
// };

// multiplyNum(menu);
// console.log(menu);


// function setAlarm(employed, vacation) {
//     return (employed > vacation)? true: false;
// }

// // OR

// function setAlarm(employed, vacation) {
//     return employed && !vacation;
// }


// function calculator(calculation) {
//   let arr = calculation.split(' ');
//   console.log(arr);
//   let base = +arr[0];

//   for(let i = 2; i < arr.length; i+=2) {
//     console.log(arr[i]);
//     if (arr[i-1] === '+') base += +arr[i];
//     if (arr[i-1] === '-') base -= arr[i];
//     if (arr[i-1] === '*') base *= arr[i];
//     if (arr[i-1] === '/') base /= arr[i];
//     console.log(base);
//   }

//   return base;
// }
// console.log(calculator('9.02 * 2.178 / 3.4 + 70.8796'));