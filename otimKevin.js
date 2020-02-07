//function name is netPay
//taxRate is equal to 30%
//netpay is equal to grossPay-net_pay
function netPay(gross){
    let taxRate = 0.3;
    let net_pay = gross -(taxRate*gross)
    console.log(net_pay)
}
netPay(1000000)// calling netPay function and setting grossPay to 1000000