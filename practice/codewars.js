// double each character in a string
// function doubleChar(str) {
//     return [...str].map(el => el.repeat(2)).join('');
// };
// console.log(doubleChar("Hello World"));


// // Logic Drills: Traffic light (3 solutions) 
// function updateLight(current) {   //green > yellow > red > green
//   let lights = {
//     "green": "yellow",
//     "yellow": "red",
//     "red": "green",
//   };

//   for(let key in lights) {
//     if (key === current) return lights[key];
//   }; 
// };

// function updateLight(current) {
//   return (current === 'yellow')? 'red':
//   (current === 'red')? 'green': 'yellow';
// };

// function updateLight(current) {
//   switch (current) {
//     case 'green':
//       return 'yellow';
//     case 'yellow':
//       return 'red';
//     default:
//       return 'green';
//   };
// };
// console.log(updateLight("green"));


// The Feast of Many Beasts (3 solutions)
// function feast(beast, dish) {
//   return beast[0] === dish[0] && 
//     beast[beast.length - 1] === dish[dish.length - 1];
// };

// function feast(beast, dish) {
//   return beast.startsWith(dish[0]) &&
//   beast.endsWith(dish[dish.length - 1]);
// };

// function feast(beast, dish) {
//   return beast[0] === dish[0] &&
//   beast.slice(-1) === dish.slice(-1);
// };
// console.log(feast('great blue heron', 'garlic naan'));


// Count the Monkeys! (2 solutions)
// function monkeyCount(n) {
//   let monkeys = [];

//   for(let i = 1; i <= n; i++) {
//     arr.push(i);
//   }

//   return monkeys;
// }

// function monkeyCount(n) {
//   let monkeys = [...Array(n)];
//   monkeys = monkeys.map(function(_, index) {
//     return index + 1;
//   })
//   return monkeys;
// };
// console.log(monkeyCount(7));


// Sum Mixed Array (2 solutions)
// function sumMix(x){
//   return x.reduce(function(sum, element) {
//     console.log("sum: " + sum);
//     console.log("element: " + Number(element));
//     return sum + Number(element);
//   }, 0);
// };

// function sumMix(x) {
//   return x.map(el => Number(el)).reduce((sum, el) => {
//     return sum + el;
//   });
// };
// console.log(sumMix(['9', 3, '7', '3', 3]));


// Quarter of the year(4 solutions)
// function quarterOf(month) {
//   return (month <= 3)? 1:
//   (month <= 6)? 2:
//   (month <= 9)? 3: 4;
// }

// function quarterOf(month) {
//   switch (month) {
//     case 1:
//     case 2:
//     case 3:
//       return 1;
//     case 4:
//     case 5:
//     case 6:
//       return 2;
//     case 7:
//     case 8:
//     case 9:
//       return 3;
//     default:
//       return 4;
//   }
// }

// function quarterOf(month) {
//   for(let i = 12; month <= i; i--) {
//     if(!(month > 3)) return 1;
//     else if(!(month > 6)) return 2;
//     else if(!(month > 9)) return 3;
//     else return 4; 
//   };
// }

// const quarterOf = m => Math.ceil(m/3);
// console.log(quarterOf(9));


// function removeExclamationMarks(s) {
//   // return s.replaceAll("!", "");     //OR
//   return s.split("!").join("");
// }
// console.log(removeExclamationMarks("!Hello ! World!"));


// Third Angle of a Triangle
// function otherAngle(a, b) {
//   return 180 - (a + b);
// }
// console.log(otherAngle(43, 78));


// Total amount of points(2 solutions)      you can also use .map() or for()
// function points(games) {
//   let results = [];
//   games.forEach(el => results.push(el.split('')));

//   return results.reduce(function(sum, item) {
//     if(item[0] > item[2]) return sum + 3;
//     else if (item[0] < item[2]) return sum + 0;
//     else return sum + 1;
//   }, 0);
// }

// function points(games) {
//   return games.reduce(function(sum, current) {
//     return  sum += (current[0] > current[2])? 3:
//     (current[0] === current[2])? 1: 0; 
//   }, 0);
// }
// console.log(points(["1:0","2:0","3:0", "4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));


// Transportation on vacation(2 solutions)
// function rentalCarCost(d) {
//   let sum = 0;
//   for(let i = 1; i <= d; i++) {
//     sum += 40;
//   }

//   let discount = (d >= 7)? 50:
//   (d >= 3)? 20: 0; 

//   return sum - discount;
// }

// function rentalCarCost(d) {
//   return d * 40 - ((d > 6)? 50: (d > 2)? 20: 0);
// }
// console.log(rentalCarCost(8));


// Reversed Words
// reverseWords = str => str.split(" ").reverse().join(" ");
// console.log(reverseWords("yoda doesn't speak like this"));


// Array plus array
// function arrayPlusArray(arr1, arr2) {   // OR let arr = [...arr1, arr2];
//   return arr1.concat(arr2).reduce((sum, el) => sum += el, 0);
// };
// console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));


// Sum without highest and lowest number(2 solutions)
// function sumArray(array) {
//   if (array === null || array === 0 
//     || array === undefined || array.length < 2) return 0;
  
//   let min = array[0];
//   let max = array[0];

//   for(let i = 0; i < array.length; i++) {
//     if(array[i] > max) max = array[i];
//     if(array[i] < min) min = array[i];
//   };

//   array.splice(array.indexOf(max), 1);
//   array.splice(array.indexOf(min), 1);
//   return array.reduce((sum,el) => sum += el, 0);
// };

// function sumArray(array) {
//   if(!(Array.isArray(array)) || array.length <= 2) return 0;

//   let minMax = Math.min(...array) + Math.max(...array); 
//   let result = array.sort((a, b) => a - b).reduce((sum, el) => sum += el, 0);
  
//   return result - minMax;
// };
// console.log(sumArray([ 6, 2, 1, 1, 8, 10 ])); // 16


// calculate the downward rounded average of the marks array
// function getAverage(marks){
//   let total = marks.reduce((sum, el) => sum += el, 0);
//   return Math.floor(total / marks.length); 
// }
// console.log(getAverage([1,2,3,4,5]));

// Area or Perimeter
// const areaOrPerimeter = function(l , w) {
//   return (l === w)? l * w:
//   (l * 2) + (w * 2);
// };
// console.log(areaOrPerimeter(6, 10));


// Remove the minimum(3 solutions)
// function removeSmallest(numbers) {
//   if(numbers.length < 1) return numbers;

//   let copy = JSON.parse(JSON.stringify(numbers));
//   let lowest = copy[0];

//   for(let i = 1; i < copy.length; i++) {
//     if(!(lowest <= copy[i])) lowest = copy[i];
//   };

//   copy.splice(copy.indexOf(lowest), 1);
//   return copy;
// };

// function removeSmallest(numbers) {
//   let copy = [...numbers];
//   let smallest = Math.min(...copy);
//   let smallestIdx = copy.indexOf(smallest);
//   copy.splice(smallestIdx, 1);
//   return copy;
// };

// function removeSmallest(numbers) {
//   let min = Math.min(...numbers);

//   return numbers.filter((_, index, arr) => index !== arr.indexOf(min));
// }
// console.log(removeSmallest([2, 2, 1, 3, 1]));


// Find the divisors!
// function divisors(int) {
//   let divisors = [];

// for(let i = 2; i < int; i++) {
//   if(int % i === 0) divisors.push(i); 
// }

// return (divisors.length)? divisors:
//         `${int} is prime`;
// }
// console.log(divisors(12));


// Odd or Even?
// function oddOrEven(array) {
//   let sum = array.reduce((el, sum) => sum += el, 0);
//   return (sum % 2)? "odd": "even"; 
// }
// console.log(oddOrEven([]));


// Ones and Zeros (BINARY TO DECIMAL)
// let binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
// console.log(binaryArrayToNumber([1, 1, 1, 1]));


// Number of People in the Bus (2 solutions)
// let number = function(busStops){
//   let total = 0;
  
//   for(let i = 0; i < busStops.length; i++) {
//     total += busStops[i][0];
//     total -= busStops[i][1];
//   }

//   return total;
// }

// let number = function(busStops){  //using ARRAY DISTRUCTURING IN REDUCE
//   return busStops.reduce((sum, [on, off]) => sum + on - off, 0);
// }
// console.log(number([[10,0],[3,5],[5,8]]));


// String ends with?
// function solution(str, ending){
//   return str.endsWith(ending);
// }
// console.log(solution('abcde', 'cde'));


// // Friend or Foe?
// function friend(friends){
//   return friends.filter((el) => el.length === 4);
// }
// console.log(friend(["Ryan", "Jimmy", "123", "4", "Love", "Cool Man"]));

// Credit Card Mask(5 solutions)
// function maskify(cc) {
//   return [...cc].map((el, idx) => (idx < cc.length - 4)? "#": el).join('');
// };

// function maskify(cc) {
//   return [...cc].map((el, idx) => {
//     if (idx < cc.length - 4) return "#";
//     else return el;
//   }).join('');
// };

// function maskify(cc) {
//   return "#".repeat(Math.max(0, cc.length - 4)) + cc.slice(-4);
// }

// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
// }

// function maskify(cc) {
//   return cc.slice(-4).padStart(cc.length, "#") 
// }
// console.log(maskify("4556364607935"));


// Isograms          REMOVE DUPLICATE ELEMENTS 
// function isIsogram(str){                 //FILTER
//   let arr = str.toLowerCase().split('');

//   arr = arr.filter((el, idx) => {
//     return arr.indexOf(el) === idx;
//   })

//   return (arr.length === str.length);
// };
//console.log(isIsogram("mmOosee"));


// Jaden Casing Strings (capitalize each word)
// String.prototype.toJadenCase = function() {
//   return this.split(" ").map((el) => {
//     return el.charAt(0).toUpperCase() + el.slice(1);
//   }).join(" ");
// };

// let string = "How can mirrors be real if our eyes aren't real";
// console.log(string.toJadenCase());


// Printer Errors (3 solutions)
// function printerError(s) {
//   const errorLetters = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//   let errors = 0;
//   let letters = s.split("");

//   for(let i = 0; i < errorLetters.length; i++) {
//     letters.forEach(el => {if(el === errorLetters[i]) errors++});
//   }

//   return errors + "/" + letters.length;
// }

// function printerError(s) {             //ASCII character ordering comparing
//   let count = 0;
//   let letters = s.split("");

//   letters.forEach(el => {
//     if(el > 'm') count++;
//   });

//   return `${count}/${letters.length}`;
// }

// let printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
// console.log(printerError("aaawbbbbhaizjjjmx")); //(3/17)


// Growth of a Population
// function nbYear(p0, percent, aug, p) {
//   let years = 0;
//   do {
//     p0 = Math.floor(p0 + (p0 * (percent / 100)) + aug);
//     years++;
//   } while (p0 < p);
//   return years;
// }
// console.log(nbYear(1500, 5, 100, 5000));


// Is this a triangle?
// function isTriangle(a,b,c) {
//   return (a + b > c && b + c > a && a + c > b);
// }

// console.log(isTriangle(2,1,3));


// Find the next perfect square! (2 solutions)
// function findNextSquare(sq) {
//   if(!(Number.isInteger(Math.sqrt(sq)))) return -1;

//   do {
//     sq++;
//   } while (!(Number.isInteger(Math.sqrt(sq))));

//   return sq;
// }

// function findNextSquare (sq) {   //if(condition)? false, the num is NOT a perfect sq 
//   return (Math.sqrt(sq) % 1)? -1: Math.pow(Math.sqrt(sq) + 1, 2);
// }

// console.log(findNextSquare(121));

//Binary Addition
// let addBinary = (a,b) => (a + b).toString(2);
// console.log(addBinary(5,9));

// Beginner Series #3 Sum of Numbers(2 solutions)
// function getSum(a, b) {
//   let min = Math.min(a, b);
//   let max = Math.max(a, b);
//   let total = Math.min(a, b);

//   while (min < max) {
//     min++;
//     total += min;
//   }

//   // for(let i = min; i <= max; i++) {
//   //   total += i;
//   // }

//   return total;
// }
// console.log(getSum(-1, 2));


// Sum of odd numbers
// function rowSumOddNumbers(n) {
//   let arr = Array.from(Array(n), () => []);
//   let odd = 0;

//   for(let i = 0; i < n; i++) {
//     for(let j = ++odd; arr[i].length <= i; j++) {
//       if (j % 2 === 1) arr[i].push(j);
//       odd = j;
//     };
//   };

//   return arr[arr.length - 1].reduce((sum, el) => sum += el, 0);
// }

// console.log(rowSumOddNumbers(2));


// Sum of two lowest positive integers
// function sumTwoSmallestNumbers(numbers) {  
//   numbers = numbers.sort((a, b) => a - b);
//   return numbers[0] + numbers[1];
// }

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));


// Two to One
// function longest(s1, s2) {
//   let arr = Array.from(s1.concat(s2));

//   let sorted = arr.sort().filter((el, idx, arr) => {
//     if (idx === arr.lastIndexOf(el)) return el;
//   });

//   return sorted.join('');
// };
// console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));


// Greed is good
// const rules = {
//   "111": 1000,
//   "666": 600,
//   "555": 500,
//   "444": 400,
//   "333": 300,
//   "222": 200,
//   "1": 100,
//   "5": 50,
// };

// let dices = [1, 1, 1, 1, 1];
// let result = [];

// for(let i = 1; i <= 6; i++) {  //filter 3-number combination
//   let num = '';

//   dices.forEach(dice => {
//     if (dice === i) num += i;
//   });

//   if (num.length >= 3) result.push(num);
// };

// if(result[0]) result[0] = result[0].slice(0,3);      //slice if combination > 3
// // console.log(result);

// let oneDices = [];
// oneDices = dices.filter((el) => el === 1);           //filter 1 side dices
// // console.log(oneDices);

// let fiveDices = [];
// fiveDices = dices.filter((el) => el === 5);          //filter 5 side dices
// // console.log(fiveDices);

// if(oneDices.length > 3) oneDices.splice(0, 3);       // remove excessive 1 side dices
// if(fiveDices.length > 3) fiveDices.splice(0, 3);     // remove excessive 5 side dices

// // console.log(oneDices);
// // console.log(fiveDices);

// if(oneDices.length < 3) result = result.concat(oneDices);
// if(fiveDices.length < 3) result = result.concat(fiveDices);

// result = result.map(el => String(el));
// // console.log(result);

// let score = 0;
// for(let key in rules) {
//   result.forEach(el => {
//     if(key === el) score += rules[key];
//   });
// };
// console.log(score);


// Shortest Word (4 solutions)
// function findShort(s){
//   let arr = s.split(' ');
//   let shortest = arr[0];

//   for(let el of arr) {
//     if(el.length < shortest.length) shortest = el;
//   };

//   return shortest.length;
// };

// function findShort(s){
//   let arr = s.split(' ');
//   let shortest = null;
//   let count = 1;

//   while (!(shortest)) {
//     arr.forEach(el => {
//       if (el.length === count) shortest = el;
//     });
//     count++;
//   };

//   return shortest.length;
// };

// function findShort(s) {
//   return s.split(' ').sort((a, b) => b.length - a.length).pop().length;
// }

// function findShort(s) {
//   let arr = s.split(' ').map(el => el = el.length)
//   return Math.min(...arr);
// };

// function findShort(s) {
//   return s.split(' ').reduce((min, word) => Math.min(min, word.length), s[0]); //or Infinity
// }
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));


// Complementary DNA
// function dnaStrand(dna){
//   let arr = dna.split('');
//   return arr.map(el => {
//     return (el == "A")? "T":
//     (el == "T")? "A":
//     (el == "C")? "G": "C";
//   }).join('');
// }
// console.log(dnaStrand("ATTGC"));

// Exes and Ohs
// function XO(str) {
//   let arr = str.toLowerCase().split('');

//   let countX =arr.filter(el => el == "x");
//   let countO = arr.filter(el => el == "o");

//   return (countO.length == countX.length);
// };
// console.log(XO("zmnm"));

// Categorize New Member
// function openOrSenior(data){
//   return data.map((el) => {  //[age, handicap] destructuring can be user as a parameter 
//     return (el[0] > 54 && el[1] > 7)? "Senior":
//     "Open";
//   });
// };
// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));


// function gimme (triplet) {
//   let arr = triplet.slice();
//   arr.sort((a, b) => a - b);
//   return triplet.findIndex(el => el == arr[1]);
// }

// console.log(gimme([2, 3, 1]));


// Twice as old
// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - (sonYearsOld * 2));
// }
// console.log(twiceAsOld(55,30));


// Find the first non-consecutive number
// function firstNonConsecutive(arr) {
//   for(let i = 1; i < arr.length; i++) {
//     if (arr[i] - arr[i - 1] != 1) return arr[i];
//   }
//   return null;
// }
// console.log(firstNonConsecutive([1,2,3,4,7,8]));


// Correct the mistakes of the character recognition software
// function correct(string){
//   let corrected = string.split('');
//   return corrected.map(el => {
//     if(el == "5") return "S";
//     else if (el == "0") return "O";
//     else if (el == "1") return "I";
//     else return el;
//   }).join('');
// };
// console.log(correct("51NGAP0RE"));


// Cat years, Dog years
// function humanYearsCatYearsDogYears(humanYears) {
//   let catYears = 0;

//   for(let i = 1; i <= humanYears; i++) {
//     if(i == 1) catYears += 15;
//     else if(i == 2) catYears += 9;
//     else catYears += 4;
//   }

//   let dogYears = catYears;
//   if (humanYears !== 1) dogYears += humanYears - 2; 

//   return [humanYears, catYears, dogYears];
// }
// console.log(humanYearsCatYearsDogYears(1));


// Is it a palindrome?
// function isPalindrome(x) {
//   return (x.toLowerCase() === x.toLowerCase().split('').reverse().join('')); 
// }
// console.log(isPalindrome("Abba"));


// Powers of 2
// function powersOfTwo(n) {
//   let result = [];
//   let count = 0;

//   while(count <= n) {
//     result.push(Math.pow(2, count));
//     count++;
//   };
//   return result;
// }
// console.log(powersOfTwo(7));


// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// String.prototype.toAlternatingCase = function () {
//   return this.split('').map(el => {
//     return (el === el.toUpperCase())? el.toLowerCase(): el.toUpperCase();
//   }).join('');
// }
// console.log("1A2, b3c 4d5e".toAlternatingCase());


// What is between?
// function between(a, b) {
//   let array = [];
//   let count = a;
//   do {
//     array.push(count);
//     count++;
//   } while (count <= b);

//   return array;
// }
// console.log(between(3, 10));


//Don't give me five!
// function dontGiveMeFive(start, end) {
//   let arr = [];

//   for(let i = start; i <= end; i++) {
//     arr.push(i);
//   }

//   return arr.filter(el => !(String(el).includes("5"))).length;
// }
// // console.log(dontGiveMeFive(4,17));


// Breaking chocolate problem
// function breakChocolate(n,m) {
//   return (n * m < 2)? 0: (n * m) - 1;
// };
// console.log(breakChocolate(1, 1));


// Fix string case
// function solve(s){
//   let lowerCount = 0;
//   let upperCount = 0;

//   for(let i = 0; i < s.length; i++) {
//     if(s[i] === s[i].toUpperCase()) lowerCount++;
//     else upperCount++;
//   };

//   return (lowerCount >= upperCount)? s.toLowerCase(): 
//   s.toUpperCase();
// };
// console.log(solve("coDE"));


// Summing a number's digits (2 solutions)
// function sumDigits(number) {
//   let arr = Array.from(String(number), el => Number(el));
//   return arr.filter(el => el <= 9).reduce((sum, el) => sum += el);
// };

// function sumDigits(number) {
//   return Math.abs(number).toString().split("").reduce((sum, el) => +sum + +el);
// }
// console.log(sumDigits(-32));


// Love vs friendship
// function wordsToMarks(string){
//   let sum = 0;
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";

//   for(let i = 0; i < string.length; i++) {
//     for(let j = 0; j < alphabet.length; j++) {
//       if(string[i] == alphabet[j]) sum += (j + 1);
//     };
//   };

//   return sum;
// }
// console.log(wordsToMarks("love"));


// Count the Digit
// function nbDig(n, d) {
//   let arr = [];

//   for(let i = 0; i <= n; i++) {
//     arr.push(String(Math.pow(i, 2)));
//   };

//   let string = arr.join("");
//   let count = 0;

//   for(let char of string) {
//     if(char === String(d)) count++;
//   }

//   return count;
// }
// console.log(nbDig(10, 0));


// function nextPrime(n){
//   if (n == 0) n++;
//   nextPrime: for(let i = ++n; true; i++) {
//     for(let j = 2; j < i; j++) {
//       if(i % j == 0) continue nextPrime;
//       };
//     return i;
//     };
//   }

// console.log(nextPrime(2971));


// Count the divisors of a number
// function getDivisorsCnt(n){
//   let divisors = [];

//   for(let i = 1; i <= Math.sqrt(n); i++) {
//     if(n % i == 0) {
//       divisors.push(i);
//       if(i !== n / i) divisors.push(n / i);
//     }
//   }

//   return divisors;
// }

// function getDivisorsCnt(n){
//   let divisors = 0;

//   for(let i = 1; i <= Math.sqrt(n); i++) {
//     if(n % i == 0) {
//       divisors++;
//       if(i !== n / i) divisors++;
//     }
//   }

//   return divisors;
// }
// console.log(getDivisorsCnt(30));


// Exclamation marks series #11(3 solutions) 
// function replace(s) {                             //regexp
//   return s.replace(/[aeiou]/gi, "!");
// }

// function replace(s) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let result = [...s];
  
//   for(let char of vowels) {
//     result = result.map(el => {
//       return (el.toLowerCase() === char)? "!": el;
//     });
//   };

//   return result.join('');
// }

// function replace(s) {
//   let vowels = 'aAeEiIoOuU';
//   let result = '';

//   for(let i = 0; i < s.length; i++) {
//     if(vowels.indexOf(s[i]) === -1) {
//       result += s[i];
//     } else {
//       result += "!";
//     }
//   }

//   return result;
// }
// console.log(replace("abceIoua"));


// Moving Zeros To The End (4 solutions)
// function moveZeros(arr) { 
//   let zeros = arr.filter(function(el) {
//     return el === 0;
//   });

//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === 0) {
//       arr.splice(i, 1);
//       i--;
//     };
//   };

//   // let result = [];           //OR

//   // arr.forEach(el => {
//   //   if(el !== 0) result.push(el);
//   // })

//   return arr.concat(zeros);
// }

// function moveZeros(arr) {
//   return arr.filter(el => el !== 0).concat(arr.filter(el => el === 0));
// }

// function moveZeros(arr) {
//   return [
//     ...arr.filter(function(el) {return el !== 0}),
//     ...arr.filter(function(el) {return el === 0})
//   ];
// }

// function moveZeros(arr) {
//   let zeros = [];
//   for(let i = arr.length - 1; i >= 0; i--) {
//     if(arr[i] === 0) {
//       arr.splice(i, 1);
//       zeros.push(0);
//     };
//   };
//   return arr.concat(zeros);
// }
// console.log(moveZeros([0,0,1,0,0,10]));


// Simple Pig Latin
// function pigIt(str){
//   let array = Array.from(str.split(" "), word => [...word]);

//   for(let i = 0; i < array.length; i++) {
//     if (array[i][0].search(/[a-z]/gi) === 0) {
//       array[i].push(array[i][0] + "ay");
//       array[i].shift();
//     };
//   };

//   return array.map(el => el.join("")).join(" ");
// }
// console.log(pigIt('Pig latin is cool !'));


// Bit Counting (2 solutions)
// function countBits(n) {
//   let binaryNum = n.toString(2);
//   let array = Array.from(String(binaryNum));

//   return array.filter(el => el === "1").join("").length;
// };
// console.log(countBits(1234));

// let countBits = function(n) {
//   return n.toString(2).split("0").join("").length;
// };
// console.log(countBits(1234));


// Get key/value pairs as arrays
// function keysAndValues(data) {
//   let array = Array.from(Array(2), (el) => []);
//   for(let key in data) {
//     array[0].push(key);
//     array[1].push(data[key]);
//   }
//   return array;
// }
// console.log(keysAndValues({a: 1, b: 2, c: 3}));

// Sentences with Functions (a lot of callbacks! 7 kuy)

//[JS] Parse integers in array
// let parseNumbers = function(intStrs) {
//   return intStrs.map(el => parseInt(el));
// }
// console.log(parseNumbers(['2.48', '13']));


// Replace With Alphabet Position (2 solutions)        
// function alphabetPosition(text) {
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let position = [];

//   text.toLowerCase().split("").forEach(el => {
//     for(let char of alphabet) {
//       if(char == el) position.push(alphabet.indexOf(char) + 1);
//     }
//   })

//   return position.join(" ");
// }

// function alphabetPosition(text) {
//   return text.toLowerCase()
//     .split("")
//     .filter(el => el.match(/[a-z]/g))
//     .map(el => el.charCodeAt(el) - 96)
//     .join(" ");
// };
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));


// Persistent Bugger.
// function persistence(num) {
//   let array = Array.from(String(num));
//   let persistence = 0;

//   while(array.length > 1) {
//     let newNum = array.reduce((sum, el) => sum * el, 1);
//     array = Array.from(String(newNum));
//     persistence ++;
//   }

//   return persistence;
// }
// console.log(persistence(39));


// Convert string to camel case (2 solutions)
// function toCamelCase(str){
//   let array = str.replaceAll("-", "_").split("_");
//   let result = [array[0]];

//   for(let i = 1; i < array.length; i++) {
//     result.push(array[i][0].toUpperCase() + array[i].slice(1));
//   }

//   return result.join("");
// }

// function toCamelCase(str) {
//   let arr = str.split("");

//   for(let i = 0; i < arr.length; i++) {
//     let letter = arr[i];
//     if(letter == "-" || letter == "_") {
//       arr[i + 1] = arr[i + 1].toUpperCase();
//       arr[i] = "";
//     }
//   }

//   return arr.join('');
// }
// console.log(toCamelCase("the_stealt-warrior"));


// Find the unique number(2 solutions)
// function findUniq(arr) {
//   let unique = null;

//   arr.forEach((el, _, array) => {
//     if(array.indexOf(el) === array.lastIndexOf(el)) unique = el;
//   });

//   return unique;
// };

// function findUniq(arr) {
//   arr.sort((a,b) => a - b);
//   return (arr[0] == arr[1])? arr.pop(): arr.shift();
// }

// function findUniq(arr) {
//   return arr.find(el => arr.indexOf(el) === arr.lastIndexOf(el));
// }
// console.log(findUniq([ 3, 4, 3, 3, 3 ]));


// Sort Numbers
// function solution(nums){
//   return (nums)? nums.sort((a,b) => a - b): [];
// }
// console.log(solution(null));


// Round up to the next multiple of 5
// function roundToNext5(n){
//   while(n % 5 !== 0) n++;
//   return n;
// }
// console.log(roundToNext5(36));


// Remove anchor from URL(2 solutions)
// function removeUrlAnchor(url){
//   let id = url.indexOf("#");
//   return (id > 0)? url.slice(0, id): url;
// }

// function removeUrlAnchor(url){
//   return url.split("#").join("");
// }
// console.log(removeUrlAnchor('www.codewars.com/katas/?page=1about'));


// Find the capitals(2 solutions)
// function capitals(word) {
//   let result = [];
  
//   word.split("").forEach((el, id) => {
//     if(el.charCodeAt(el) < 91) result.push(id);
//   })

//   return result;
// };

// function capitals(word) {
//   let result = [];

//   for(let i = 0; i < word.length; i++) {
//     if(word[i].toUpperCase() == word[i]) result.push(i);
//   }

//   return result;
// };
// console.log(capitals('CodEWaRs'));


//Small enough? - Beginner
// function smallEnough(a, limit){
//   return a.every(el => el <= limit);
// }
// console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));


// Tribonacci Sequence(3 solutions)
// function tribonacci(signature, n){
//   if(n == 0) {
//     return [];
//   } else if(n == 1) {
//     let arr = [];
//     arr.push(signature[0]);
//     return arr;
//   } else if (n == 2) {
//     signature.pop();
//     return signature;
//   }

//   let arr = signature;

//   for(let i = 0; i < n - 3; i++) {
//     arr.push(arr[i] + arr[i + 1] + arr[i + 2]);
//   };

//   return arr;
// }

// function tribonacci(signature, n){
//   for(let i = 0; i < n - 3; i++) {
//     signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
//   };

//   return signature.slice(0, n);
// }

// function tribonacci(signature, n){
//   const result = signature.slice(0, n);

//   while(result.length < n) {
//     result[result.length] = result.slice(-3).reduce((a, b) => a + b, 0);
//   };

//   return result;
// }
// console.log(tribonacci([1,1,1], 7));


// Regex validate PIN code
// function validatePIN (pin) {
//   const result = pin.split("").map(el => String(+el)).join("");

//   return (result == pin && 
//     (result.length == 4 || result.length == 6));
// };
// console.log(validatePIN("00.012"));


// Count Odd Numbers below n
// const oddCount = n => Math.floor(n/2) 
// console.log(oddCount(15));


// Find numbers which are divisible by given number
// function divisibleBy(numbers, divisor){
//   return numbers.filter(el => el % divisor == 0);
// }
// console.log(divisibleBy([1,2,3,4,5,6], 3));


// Welcome!
// function greet(language) {
//   let map = new Map([ 
//     ["english", "Welcome"],
//     ["french", "Bienvenue"],
//     ["german", "Willkommen"],
//     ["irish", "Failte"],
//     ]);

//     return (map.has(language))? map.get(language): map.get("english");
// }
// console.log(greet("irish"));


// Two Oldest Ages
// function twoOldestAges(ages){
//   return ages.sort((a,b) => a - b).slice(-2);
// }
// console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));


// Two fighters, one winner.
// function Fighter(name, health, damagePerAttack) {
//   this.name = name;
//   this.health = health;
//   this.damagePerAttack = damagePerAttack;
//   this.toString = function() { return this.name; }
// };

// let thief = new Fighter("Garolt", 38, 8);
// let wizard = new Fighter("Gandalf", 17, 14);

// console.log(wizard);
// console.log(wizard.toString())
// console.log("Gandalf" == wizard);

// function declareWinner(fighter1, fighter2, firstAttacker) {
//   if(firstAttacker == fighter1) {
//     while (fighter1.health > 0 || fighter2.health > 0) {
//       fighter2.health -= fighter1.damagePerAttack;
//       if(fighter2.health <= 0) break;
//       fighter1.health -= fighter2.damagePerAttack;
//       if(fighter1.health <= 0) break;
//     }
//   } else {
//     while (fighter1.health > 0 || fighter2.health > 0) {
//       fighter1.health -= fighter2.damagePerAttack;
//       if(fighter1.health <= 0) break;
//       fighter2.health -= fighter1.damagePerAttack;
//       if(fighter2.health <= 0) break;
//     }
//   } 
//     return (fighter1.health > fighter2.health)? fighter1.name: fighter2.name;
// }
// console.log(declareWinner(wizard, thief, "Gandalf"));


// Grasshopper - If/else syntax debug
// let checkAlive = (health) => health > 0;


// T.T.T.22: Left? Right? Both?
// function leftRightOrBoth(text){
//   let leftPart = `1!2@3#4$5%QqWwEeRrTtAaSsDdFfGgZzXxCcVvBb`.split("");
//   let rightPart = `6^7&8*9(0)YyUuIiOoPpHhJjKkLl;:'NnMm,<.>/?`.split("");

//   if(text.trim().length === 0) return "";

//   let leftMatch = text.split("").some(el => leftPart.includes(el));
//   let rightMatch = text.split("").some(el => rightPart.includes(el));

//   return (leftMatch == rightMatch)? "Both":
//   (leftMatch)? "Left": "Right";
// }
// console.log(leftRightOrBoth(`ABC`));


// RGB To Hex Conversion
// function rgb(r, g, b) {
//   return toHex(r) + toHex(g) + toHex(b);
// }

// function toHex(d) {
//   if(d < 0) return "00";
//   if(d > 255) return "FF";
//   return ("0" + d.toString(16)).toUpperCase().slice(-2);
// }
// console.log(rgb(-7, 22, 349));


// I love you, a little , a lot, passionately ... not at all
// function howMuchILoveYou(nbPetals) {
//   while(nbPetals > 6) {
//     if(nbPetals > 6) nbPetals -= 6;
//   }
  
//   switch(nbPetals) {
//     case 1:
//       return "I love you";
//     case 2:
//        return "a little";
//     case 3:
//       return "a lot";
//     case 4:
//       return "passionately";
//     case 5:
//       return "madly";
//     case 6:
//       return "not at all";
//   }
// }
// console.log(howMuchILoveYou(13));


// Split Strings(2 solutions)
// function solution(str){
//   let arr = [];
  
//   for(let i = 0; i < str.length; i += 2) {
//     let second = str[i + 1] || "_";
//     arr.push(str[i] + second);
//   };

//   return arr;
// }

// function solution(str){
//   let n = 0;
//   let arr = [];

//   if(str.length % 2 !== 0) str = str + "_";

//   while(n < str.length) {
//     arr.push(str[n] + str[n + 1]);
//     n += 2;
//   }

//   return arr; 
// }
// console.log(solution("abcdefghi"));


// Highest Scoring Word
// function high(x){
//   let words = x.split(" ");
//   let data = Array.from(Array(words.length), () => []);

//   let highest = 0;

//   words.forEach((el, id) => {
//     let score = 0;

//     for(let i = 0; i < el.length; i++) {
//       score += el.charCodeAt(i) - 96;
//     };

//     if(score > highest) highest = score;

//     data[id].push(el);
//     data[id].push(score);
//   });

//   for(let i = 0; i < data.length; i++) {
//     if(data[i][1] == highest) return data[i][0];
//   }
// }

// console.log(high('what time are we climbing up the volcano'));


// Decode the Morse code
// const MORSE_CODE = {
//   '.-': 'A',
//   '-...': 'B',
//   '-.-.': 'C',
//   '-..': 'D',
//   '.': 'E',
//   '..-.': 'F',
//   '--.': 'G',
//   '....': 'H',
//   '..': 'I',
//   '.---': 'J',
//   '-.-': 'K',
//   '.-..': 'L',
//   '--': 'M',
//   '-.': 'N',
//   '---': 'O',
//   '.--.': 'P',
//   '--.-': 'Q',
//   '.-.': 'R',
//   '...': 'S',
//   '-': 'T',
//   '..-': 'U',
//   '...-': 'V',
//   '.--': 'W',
//   '-..-': 'X',
//   '-.--': 'Y',
//   '--..': 'Z',
// }

// let code = "       .... . -.--   .--- ..- -.. .     ";

// function decodeMorse(morseCode) {
//   const morseTable = new Map(Object.entries(MORSE_CODE));
//   // console.log(morseTable);

//   let array = morseCode.trim().split("   ");
//   // console.log(array);

//   let decode = Array.from(Array(array.length), () => []);
//   // console.log(decode);

//   for(let i = 0; i < array.length; i++) {
//     let letters = array[i].split(" ");

//     for(let j = 0; j < letters.length; j++) {
      
//       for(let key of morseTable.keys()) {
//         if(key === letters[j]) decode[i].push(morseTable.get(key));
//       }
//     }
//   }

//   return decode.map(el => el.join("")).join(" ");
// }

// console.log(decodeMorse(code));


// Form The Minimum
// function minValue(values){
//   return Number(values.sort().filter((el,id) => el != values[id + 1]).join(""));
// }
// console.log(minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]));


// Count characters in your string
// function count(string) {
//   let obj = {};

//   for(let i = 0; i < string.length; i++){
//     let letter = string[i];
//     let count = 0;

//     if(letter in obj) continue;

//     for(let j = i; j < string.length; j++) {
//       if(letter == string[j]) count++;
//     }

//     obj[letter] = count;
//   }

//   return obj;
// }
// console.log(count("abacc"));


// Maximum Multiple
// function maxMultiple(divisor, bound){
//   let number = bound;

//   while (number % divisor) {
//     number--;
//   }

//   return number;
// }
// console.log(maxMultiple(2, 7));


// Factorial
// function factorial(n) {
//   if(n > 12 || n < 0) return "RangeError";

//   let factorial = n;

//   for(let i = n - 1; i > 0; i--) {
//     factorial *= i;
//   }

//   return (factorial)? factorial: 1;
// }
// console.log(factorial(-1));


// Sum of Minimums!(2 solutions)
// function sumOfMinimums(arr) {
//   arr.forEach(el => {
//     el.sort((a, b) => a - b);
//   })

//   return arr.reduce((sum, el) => {
//     return sum += el[0];
//   }, 0);
// }

// function sumOfMinimums(arr) {
//   return arr.reduce((sum, el) => sum += Math.min(...el), 0);
// }
// console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));


// Build Tower
function towerBuilder(nFloors) {
  let tower = [];
  let str = "*";
  let strLength = 1;

  for(let i = 0; i < nFloors; i++) {
    tower.push(str.repeat(strLength));
    strLength += 2;
  }

  let length = tower[nFloors - 1].length;
  let spaces = " ";

  for(let i = 0; i < tower.length; i++) {
    let pads = spaces.repeat(Math.floor(length / 2));
    tower[i] = pads + tower[i] + pads;
    length -= 2;
  }

  return tower;
}
// console.log(towerBuilder(5));


// Alternate capitalization
function capitalize(s) {
  let even = s.split('');
  let odd = s.split('');

  for(let i = 0; i < s.length; i++) {
    if(i % 2 == 0) even[i] = even[i].toUpperCase();
    else odd[i] = odd[i].toUpperCase();
  }

  return [even.join(''), odd.join('')];
}
// console.log(capitalize("abcdefg"));


// function flattenAndSort(array) {
//   return array.flat(1).sort((a, b) => a - b);
// }
// console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]));


// Largest 5 digit number in a series
// function solution(digits){
//   let largest = 0;

//   for(let i = 0; i < digits.length; i++) {
//     let number = Number(digits.slice(i, i + 5));
//     if(number > largest) largest = number;
//   }

//   return largest;
// }
// console.log(solution('1234567898765'));


// Sort the odd (2 solutions)
// function sortArray(array) {
//   let odd = array.filter(el => el % 2).sort((a, b) => a - b);

//   let result = [...array].map(el => {
//     return (el % 2)? el = null: el;
//   });

//   for(let i = 0; i < result.length; i++){
//     if(result[i] === null) result[i] = odd.shift();
//   };

//   return result;
// }

// function sortArray(array) {
//   let odd = array.filter(x => x % 2).sort((a,b) => a - b);
//   return array.map(x => (x % 2)? odd.shift() : x);
// }
// console.log(sortArray([5, 3, 2, 8, 1, 4]));


// Delete occurrences of an element if it occurs more than n times
// function deleteNth(arr,n){
//   for(let i = 0; i < arr.length; i++) {
//     let count = 0;

//     for(let j = 0; j < arr.length; j++) {
//       if (arr[i] == arr[j]) count++;
//     }

//     while(count > n) {
//       arr.splice(arr.lastIndexOf(arr[i]), 1);
//       count--;
//     }
//   }

//   return arr;
// }
// console.log(deleteNth([1,1,3,3,7,2,2,2,2], 2));


// Break camelCase(3 solutions)
// function solution(string) {
//   let array = string.split('');
//   let indexes = [];

//   array.forEach((el, id) => {
//     if(el === el.toUpperCase()) indexes.push(id);
//   })

//   indexes.forEach(el => {
//     for(let i = 0; i < array.length; i++) {
//       if (i === el) array[i - 1] += " ";
//     }
//   })

//   return array.join("");
// }

// function solution(string) {
//   let array = string.split('').map(el => {
//     if (el === el.toUpperCase()) el = " " + el;
//     return el;
//   }).join('');

//   return array;
// }

// function solution(string) {
//   return [...string].map(function(el) {
//     return (el === el.toUpperCase())? ' ' + el: el;
//   }).join('');
// }
// console.log(solution('camelCasingTest'));


// Dominant array elements (2 solutions)
// function solve(arr) {
//   let dominant = [];

//   outer: for(let i = 0; i < arr.length; i++) {
//     for(let j = i + 1; j < arr.length; j++) {
//       if (arr[i] <= arr[j]) continue outer;
//     }
//     dominant.push(arr[i]);
//   }

//   return dominant;
// }

// function solve(arr) {
//   let dominant = [];

//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > Math.max(...arr.slice(i + 1, arr.length))) {
//       dominant.push(arr[i]);
//     }
//   }

//   return dominant;
// }
// console.log(solve([16,17,14,3,14,5,2]));


// Count the smiley faces!(3 solutions)
// function countSmileys(arr) {
//   const rules = [':', ';', '-', '~', ')', 'D'];

//   let result = arr.filter(face => {
//     return face.split('').every(item => rules.includes(item));
//   });

//   result = result.filter(face => {
//     return (face.length <= 3) && 
//     (face[0] == rules[0] || face[0] == rules[1]) &&
//     (face[face.length-1] == rules[4] || face[face.length-1] == rules[5]);
//   });

//   return result.length;
// }

// const faces = new Set();

// for(let eyes of [':',';']) {
//   for(let nose of ['-','~','']) {
//     for(let mouth of [')','D']) {
//       faces.add(eyes+nose+mouth);
//     }
//   }
// }
// console.log(faces);

// function countSmileys(arr) {
//   return arr.filter(face => faces.has(face)).length;
// }

// function countSmileys(arr) {
//   const rules = {
//     eyes: [':',';'],
//     noses: ['-','~',''],
//     mouths: [')','D'],
//   };

//   return arr.reduce((acc, face) => {
//     let eye = face[0];
//     let nose = (face.length > 2)? face[1]: '';
//     let mouth = (face.length > 2)? face[2]: face[1];

//     rules.eyes.includes(eye) && 
//     rules.noses.includes(nose) && 
//     rules.mouths.includes(mouth) && 
//     acc++;

//     return acc;
//   }, 0);
// }
// console.log(countSmileys([':)',':(',':D',':O', '))', ':;', ':--)']));


// Consecutive strings (3 solutions)
// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return '';

  let longest = '';

  for(let i = 0; i < strarr.length; i++) {
    let str = strarr.slice(i, i + k).join('');
    if(str.length > longest.length) longest = str;
  } 

  return longest;
}

/*
function longestConsec(strarr, k) {
  let longest = '';

  for(let i = 0; k > 0 && i < strarr.length - k; i++) {
    let str = strarr.slice(i, i + k).join('');
    if(str.length > longest.length) longest = str;
  } 

  return longest;
}

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return '';
  
  return strarr.reduce((base, el, id) => {
    let str = strarr.slice(id, id + k).join('');
    return (str.length > base.length)? str: base;
  }, '');
}
*/

let consec = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
console.log(longestConsec(consec, 4));