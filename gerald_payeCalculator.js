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

