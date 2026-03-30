// The Supermarket Queue
// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(customers, n) {
  let tills = [...Array(n)].map(till => {
    return (customers.length !== 0)? [customers.shift()]: [0];
  });

  while (customers.length !== 0) {
      let shortest = tills
        .map(el => el.reduce((sum, el) => sum + el, 0))
        .sort((a,b) => a - b)[0];
    
      let shortestId = tills
        .map(el => el.reduce((sum, el) => sum + el, 0))
        .findIndex(el => el <= shortest);
    
      tills[shortestId].push(customers.shift()); 
  }

  return tills
    .map(el => el.reduce((sum, el) => sum + el, 0))
    .sort((a,b) => a - b)
    .pop();
}

console.log(queueTime([1,2,3,4,1,3,2,5,2,1], 3));