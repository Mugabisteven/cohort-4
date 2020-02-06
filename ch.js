function wages()
{
let pay = 6000000// declared pay to 6000000
let rate = 0.3
let paye = rate*pay//calculated paye
console.log(paye)
}
wages

function tax(actpay,rate)
{
    //calculating the amount taken as tax
    console.log(" this is your paye")
let tax = actpay*rate
console.log(tax)
//calculating the netpay
console.log("dear custormer this is your net pay")
// declaring the the net pay
let netPay = actpay-tax
console.log(netPay)
}
//invocating the function tax
tax(6000000,0.3)