//esreveR (2 solutions)
const reverse = arr => {
  let reversed = [];

  for(let i = arr.length-1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
}

// const reverse = arr => arr.reduceRight((acc, val) => (acc.push(val), acc),[]); 
console.log(reverse('word'.split('')));

/*The comma concatenates the statements and runs them both, but only returns the result of the last one, this accomplishes the same as writing {a.push(v); return a;}*/