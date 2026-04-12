// The Coupon Code
// https://www.codewars.com/kata/539de388a540db7fec000642

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode === correctCode) {
    let months = {
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      November: 10,
      December: 11,
    }

    let date1 = currentDate.replaceAll(',', '').split(' ');
    let date2 = expirationDate.replaceAll(',', '').split(' ');

    for(let [key, value] of Object.entries(months)) {
      if(key === date1[0]) date1[0] = value;
      if(key === date2[0]) date2[0] = value;
    }

    return new Date(`${date1[2]}-${date1[0]}-${date1[1]}`) <=
    new Date(`${date2[2]}-${date2[0]}-${date2[1]}`);
  };
  return false;
}

console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"));