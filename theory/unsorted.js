// Object.keys(), Object.values(), Object.entries()

// function sumSalaries(obj) {
//   let sum = 0;
  
//   for(let value of Object.values(obj)) {
//     sum += value;
//   }
  
//   return sum; 
// }

// function sumSalaries(obj) {
//   return Object.values(obj).reduce((sum, el) => sum + el, 0);
// }

// console.log(sumSalaries(salaries));

function countKeys(obj) {
  let count = 0;
  
  for(let key of Object.keys(obj)) {
    console.log(key);
    count++;
  }
  
  return count;
}

// function countKeys(obj) {
//   let count = 0;
  
//   for(let key of obj) {    // obj is not iterable
//     count++;
//   }
  
//   return count;
// }

function countKeys(obj) {
  return Object.keys(obj).length;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
}

// console.log(countKeys(salaries));



//Destructuring arrays, objects

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
}

function topSalary(salaries) { 
  let maxSalary = 0;
  let name = null;

  for(let [user, value] of Object.entries(salaries)) {
    if(value > maxSalary) {
      maxSalary = value;
      name = user;
    };
  }
  
  return name;
}

topSalary(salaries);

//recursion

// function sumTo(n) {
//   let sum = 0;
//   for(let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// function sumTo(n) {
//   return (n == 1)? n: (n + sumTo(n-1));
// }

//  function sumTo(n) {
//   let array = Array.from(Array(n), (el, id) => id+1);
//   return array.reduce((sum, el) => sum + el, 0);
// }

// //arithmetic progression formula
// function sumTo(n) { 
//   return n * (n + 1) / 2;
// }
// console.log(sumTo(100));


//function factorial(n) {
//   return (n === 1)? n: (n * (factorial(n - 1)));
// }
// console.log(factorial(5));


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      }
    }
  }
}

// function printList(list) {  //logging only values, no inner objects
//   console.log(list.value);
//   if(list.next) printList(list.next)
// }

// function printList(list) { //TypeError: Cannot convert undefined or null to object
// Object.values(null) is an error
//   for(let value of Object.values(list)) {
//     console.log(value);
//     if (typeof value === 'object') printList(value);
//   }
// }

// function printList(list) {  //in reversed order
//   let tmp = list;
//   while(tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// }

// function printList(list) {
//   if (list.next) printList(list.next);
//   console.log(list.value);
// }

// function printList(list) {
//   let arr = [];
//   let tmp = list;
  
//   while(tmp) {
//     arr.push(tmp.value);
//     tmp = tmp.next;
//   }
  
//   for(let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }

// console.log(printList(list));


//Hashtag Generator 
function generateHashtag(str) {
  let arr = str.split('');
  console.log(arr);
  let line = arr.map((el, id, arr) => {
   console.log(`current id: ${id}`);
   console.log(`start from: ${arr.indexOf(' ', id-1)}`);
   console.log(arr.indexOf(' ', id-1) === id-1);
    if(arr.indexOf(' ', id-1) === id-1) {
      // console.log(arr.indexOf(' ', id-1));
      // console.log(el);
      return el.toUpperCase();
    } else {
      return el;
    };
  }).join('').replaceAll(' ', '');
  let num = line.length;
  return (num < 1 || num > 139)? false: '#'+line;
}
console.log(generateHashtag('a bb ccc'));
// console.log(generateHashtag('hello world'));
// console.log(generateHashtag('code wars'));
// console.log(generateHashtag(''));


//SCOPE
function makeCounter() {
  let count = 0;

  return function() {
    return ++count; // есть доступ к внешней переменной "count"
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());
console.log(counter2());


//currying
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

// Partial application
const addFive = curriedAdd(5);
console.log(String(addFive))

const addFiveAndTen = addFive(10);
console.log(String(addFiveAndTen))

const finalResult = addFiveAndTen(3); 
console.log(String(finalResult))
// 18 (5 + 10 + 3)


//IN BETWEEN 
let arr = [1, 2, 3, 4, 5, 6, 7];

arr.filter(function(el, id, arr) {
  let filtered = inBetween(1, 3);
  return filtered(el);
});

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  }
}


//IN ARRAY 
function inArray(arr){
  return function(x){
    return arr.includes(x);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

arr.filter(el => {
  let compare = inArray([1,2,7]);
  return compare(el);
});


//CLOSURE EXPLANATION


//точечная запись не работает! повтори ОБЪЕКТЫ

let users = [
  { name: "Иван", age: 20 },
  { name: "Пётр", age: 18 },
  { name: "Анна", age: 19 }
];

// users.sort((a, b) => a.name > b.name ? 1 : -1);
// users.sort((a, b) => a.age > b.age ? 1 : -1);

function byField(field) {
  return function(a, b) {
    return a[field] > b[field] ? 1: -1;
  }
}

users.sort(byField('age'));


function sumSeq(begin, end, step) {
  if (begin > end) return 0;
  return begin + sumSeq(step + begin, end, step);
}

/*
    begin end step
sumSeq(1, 13, 3);
  return 1 + sumSeq(3 + 1, 13, 3); 1 + 34 returned

sumSeq(4, 13, 3);
  return 4 + sumSeq(3 + 4, 13, 3); 4 + 30 returned

sumSeq(7, 13, 3);
  return 7 + sumSeq(3 + 7, 13, 3); 7 + 23 returned

sumSeq(10, 13, 3);
  return 10 + sumSeq(3 + 10, 13, 3);  10 + 13 returned

sumSeq(13, 13, 3);
  return 13 + sumSeq(3 + 13, 13, 3);  13 + 0 

sumSeq(16, 13, 3);
  return 0;
*/

