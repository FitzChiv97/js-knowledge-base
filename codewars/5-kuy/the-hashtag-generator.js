// The Hashtag Generator
// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
  if (!str.trim()) return false;
  let arr = str.trim().split('');

  let line = arr.map((el, id, arr) => {

    if(arr.indexOf(' ', id-1) === id-1) {
      return el.toUpperCase();
    } else {
      return el;
    }
  }).join('').replaceAll(' ', '');

  return (line.length < 1 || line.length > 139)? false: '#' + line;
}
console.log(generateHashtag("code wars is good "));
console.log(generateHashtag(""));