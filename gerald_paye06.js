function payeeCalc(grossPay, payePerc) {
   let tax = payePerc / 100
   let taxDeduct = grossPay * tax
   return taxDeduct
}

function netPay(grossPay, taxDeduct) {
   let salo = grossPay - taxDeduct
   console.log(salo)
}
let payee = payeeCalc(1000000, 20)
netPay(1000000, payee)
