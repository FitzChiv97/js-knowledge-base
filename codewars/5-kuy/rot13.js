// Rot13
// https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(message){
  let rot = message.split('');

  return rot.map(el => {
    if ((el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 109) || 
      (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 77)) {
      return String.fromCharCode(el.charCodeAt(0) + 13); 
    };

    if ((el.charCodeAt(0) >= 110 && el.charCodeAt(0) <= 122) || 
      (el.charCodeAt(0) >= 78 && el.charCodeAt(0) <= 90)) {
      return String.fromCharCode(el.charCodeAt(0) - 13); 
    };

    return el;
  }).join('');
}

console.log(rot13('testTEST13$'));