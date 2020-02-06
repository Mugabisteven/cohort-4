

 // the assignment code
function paye(intSal,rate)
{
console.log("this is your paye")
//calculating the paye
    let payee = intSal*rate
    console.log(payee)// to print the paye
  
console.log("this is your net pay")
//calculating the net pay
    let netPay = intSal-payee
    console.log(netPay)
}
 paye(1000,0.3)
paye( 4000,0.3)