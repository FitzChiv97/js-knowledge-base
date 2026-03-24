// Help the bookseller !
function stockList(books, categories) {
  if(!books.length || !categories.length) return '';

  let output = {};
  categories.forEach(cat => output[cat] = 0);

  //better approach
  for(let book of books) {
    const [code, qty] = book.split(' ');
    const category = code[0];

    if(category in output) {
      output[category] += Number(qty);
    }
  }

  /* my solution
  for(let cat in output) {
    for(let code of books) {
      if(cat === code[0]) {
        code = +code.slice(code.indexOf(' ')).trim();
        output[cat] += code;
      }
    }
  }
  */

  return Object.entries(output)
   .map(([cat, qty]) => `(${cat} : ${qty})`)
   .join(' - ');
}

console.log(stockList(
  ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], 
  ["A", "B", "C", "D"]));