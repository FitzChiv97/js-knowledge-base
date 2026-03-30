// Simple Encryption #1 - Alternating Split
// https://www.codewars.com/kata/57814d79a56c88e3e0000786

function encrypt(text, n) {
  if (!text || !text.length || n < 0) return text;

  let array = text.split('');

  for (let i = 0; i < n; i++) {
    let odd = array.filter((_,i) => i % 2);
    let even = array.filter((_,i) => !(i % 2));
    array = odd.concat(even);
  }

  return array.join('');
}

function decrypt(encryptedText, n) {
  if (!encryptedText || !encryptedText.length || n < 0) return encryptedText;

  let array = encryptedText.split('');

  for (let i = 0; i < n; i++) {
    let odd = array.slice(0, Math.floor(array.length / 2));
    let even = array.slice(Math.floor(array.length / 2));

    array = [];

    let iterations = (even.length > odd.length) ? even.length: odd.length;

    for (let j = 0; j < iterations; j++) {
      array.push(even[j]);
      array.push(odd[j]);
    }

    array = array.filter(char => typeof char === 'string');
  }

  return array.join('');
}

console.log(encrypt('This is a test!', 1));
console.log(decrypt('This is a test!', 4)); 