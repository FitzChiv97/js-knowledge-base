// Coding Meetup #1 (3 solutions)
// https://www.codewars.com/kata/582746fa14b3892727000c4f
function countDevelopers(list) {
  let count = 0;
  
  for(let obj of list) {
    if(obj.continent == 'Europe' && 
       obj.language == 'JavaScript') count++;
  }
  
  return count;
}

/*
function countDevelopers(list) {
  return list.filter(obj => obj.continent == 'Europe' && 
  obj.language == 'JavaScript').length;
}

function countDevelopers(list) {
  return list.reduce((count, dev) => {
    return (dev.continent == 'Europe' && 
    dev.language == 'JavaScript')? ++count: count;
  }, 0);
}
*/