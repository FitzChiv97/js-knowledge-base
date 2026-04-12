// Coding Meetup #2
// https://www.codewars.com/kata/58279e13c983ca4a2a00002a

let list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

function greetDevelopers(list) {
  list.forEach(dev => {
    return dev["greeting"] = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`;
  });

  return list;
}

/*
const greetDevelopers = list => list.map(
  dev => ({...dev, greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`})
);
*/

console.log(greetDevelopers(list1));