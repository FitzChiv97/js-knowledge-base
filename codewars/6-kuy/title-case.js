// Title Case
// https://www.codewars.com/kata/5202ef17a402dd033c000009

function titleCase(title, minorWords) {
  // if (!title) return title;
  let exceptions = minorWords ? minorWords.toLowerCase().split(' '): [];
  
  return title.toLowerCase().split(' ').reduce((str, word, id) => {
    return str += (!exceptions.includes(word) || id == 0)? word[0].toUpperCase() + word.slice(1) + ' ':
    word + ' ';
  }, '').trim();
}
console.log(titleCase('a clash of KINGS', 'a an the of'));

console.log('180'.charCodeAt(0));
console.log('180'.charCodeAt(0));