function score(dice) {
  const rules = {
    "111": 1000,
    "666": 600,
    "555": 500,
    "444": 400,
    "333": 300,
    "222": 200,
    "1": 100,
    "5": 50,
  };
  
  let result = [];
  
  for(let i = 1; i <= 6; i++) {  //filter 3-number combination
    let num = '';
  
    dice.forEach(el => {
      if (el === i) num += i;
    });
  
    if (num.length >= 3) result.push(num);
  };
  
  if(result[0]) result[0] = result[0].slice(0,3);      //slice if combination > 3
  // console.log(result);
  
  let oneDices = [];
  oneDices = dice.filter((el) => el === 1);           //filter 1 side dices
  // console.log(oneDices);
  
  let fiveDices = [];
  fiveDices = dice.filter((el) => el === 5);          //filter 5 side dices
  // console.log(fiveDices);
  
  if(oneDices.length > 3) oneDices.splice(0, 3);       // remove excessive 1 side dices
  if(fiveDices.length > 3) fiveDices.splice(0, 3);     // remove excessive 5 side dices
  
  // console.log(oneDices);
  // console.log(fiveDices);
  
  if(oneDices.length < 3) result = result.concat(oneDices);    //3 num combination + single one side dices
  if(fiveDices.length < 3) result = result.concat(fiveDices);  //3 num combination + single five side dices
  
  result = result.map(el => String(el));
  // console.log(result);
  
  let score = 0;
  for(let key in rules) {                           //compare rules to dices combinations to get the score               
    result.forEach(el => {
      if(key === el) score += rules[key];
    });
  };

  return score;
}