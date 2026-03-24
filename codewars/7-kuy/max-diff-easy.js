//max diff - easy (2 solutions)
function maxDiff(list) {
  let sorted = list.sort((a,b) => a - b);
  if (sorted.length > 1) return sorted.pop() - sorted.shift();
  else return 0;
}

function maxDiff(list) {
  return list.length? Math.max(...list) - Math.min(...list): 0; 
}
console.log(maxDiff([1, 2, 3, -4]));