```js
//Example with mutation of accumulator:
let primes = [2, 2, 2, 2, 2, 5, 7, 7, 11];

let combinedNums = primes.reduce((acc, el) => { 
    let lastGroup = acc[acc.length-1];

    if (lastGroup && lastGroup[0] === el){
      acc[acc.length-1].push(el);
    } else {
      acc.push([el]);
    }
    return acc;
  }, []);

console.log(combinedNums);

//Example with immutable approach: (check it later)
let combinedNums = primes.reduce((acc, el) => {
  const lastGroup = acc[acc.length-1] || [];

  if (lastGroup[lastGroup.length-1] === el) {
    // create a new accumulator with a new last group
    return [...acc.slice(0, -1), [...lastGroup, el]];
  } else {
    return [...acc, [el]];
  }
}, []);
```

Key lessons about *reduce*:

1. Always return the accumulator
2. Every iteration must produce a value of the same type that the accumulator expects.
3. Forgetting to return acc on any branch → *undefined* → runtime errors.
4. *Mental shortcut*: mutate → then return acc; create a new array → return the new array.
5. Accessing last values inside nested arrays:

```js
let lastGroup = acc[acc.length-1];
let lastValue = lastGroup[lastGroup.length-1];
```

Common mistakes (from this session):
* Returning acc.push(el) is a trap because push returns a *number*, not the array.
* Return value confusion
    1. Returning push() → *number*
    2. Returning nothing → *undefined*