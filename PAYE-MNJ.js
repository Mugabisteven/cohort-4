//A function to calculate PAYE tax
function PAYE(salary,taxRate) {
    //assign the product of salary and tax rate to variable name taxAmount
    let taxAmount = salary * taxRate
    //calculate netPay
    let netPay = salary - taxAmount

    //Print the tax amount
    console.log("The tax amount is =" ,taxAmount)
    //Print the net pay
    console.log("The net pay is =" ,netPay)
}

PAYE(10000000, 30/100)


