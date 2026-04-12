// Directions Reduction (2 solutions)
// https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr){
  let path = [
    ["NORTH","SOUTH"], ["SOUTH", "NORTH"],
    ["EAST", "WEST"], ["WEST", "EAST"]
];

for(let i = 0; i < arr.length; i++) {

  for(let j = 0; j < path.length; j++) {
    if(arr[i] === path[j][0] && arr[i+1] === path[j][1]) {
      arr.splice(i, 2);
      i -= 2;
    }
  }
}

return arr;
}

/*
function dirReduc(arr){
  const dirs = {
    "NORTH": "SOUTH",
    "EAST": "WEST",
    "SOUTH": "NORTH",
    "WEST": "EAST"
  }
  
  const path = [];
  for(let i = 0; i < arr.length; i++) {
    if(path[path.length - 1] === dirs[arr[i]]) {
      path.pop();
    } else {
      path.push(arr[i]);
    }
    console.log(path);
  }

  return path;
}
*/

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));