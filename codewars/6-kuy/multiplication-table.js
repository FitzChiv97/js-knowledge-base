// Multiplication table
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

function multiplicationTable(size) {
  return Array.from(Array(size), (_, id) => {
    let arr = Array.from({length: size});

    arr = arr.map((_,numId) => {
      return (numId+1) * (id+1); 
    })

    return arr;
  });
}

console.log(multiplicationTable(9));