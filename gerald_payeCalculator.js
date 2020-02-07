// assuming gross pay is UGX 1,000,000
// PAYE calculation being 30% of net pay
// net pay is therefore gross pay less PAYE


function paye() {
   var grossPay = 1000000
   var perc = 30 / 100
   var tax = grossPay * perc
   var netPay = grossPay - tax
   console.log(netPay)
}
paye()


//February 6th 
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
