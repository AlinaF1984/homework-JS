"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x = 0;
  let x1 = 0;
  let x2 = 0;

  let D = (Math.pow(b, 2)) - 4 * a * c;
  if (D < 0) {
  } else if (D === 0) {
      x = (-b) / (2 * a)
      arr.push(x);
    } else {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        arr.push(x1);
        x2 = (-b - Math.sqrt(D)) / ( 2 * a);
        arr.push(x2);
      } 
  return arr;
}       
console.log(solveEquation(1, -1, 0))

  

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  "use strict" 
        if (isNaN(percent)) {
          return false;
      }
      if(isNaN(contribution)) {
          return false;
      }
      if(isNaN(amount)) {
          return false;
      }
      if(isNaN(countMonths)) {
          return false;
      }
  
  let interestRate = percent / 100 / 12;
  let credit = amount - contribution;
  let paymentPerMonth = credit * (interestRate + (interestRate / (((1 + interestRate) ** countMonths) - 1)));
  let totalAmount= paymentPerMonth * countMonths ;
   return Number(totalAmount.toFixed(2));
}
console.log(calculateTotalMortgage (10, 0, 50000, 12));
