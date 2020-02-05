function paye()
{
    //initialising gross income
    let grossIncome = 2500000
    //initialising taxrate
    let taxRate = 30/100

    //assigning the product of gross income and taxrate
    let tax = grossIncome * taxRate
    //assigining the difference of gross income and taxrate
    let netPay = grossIncome - tax

    //prints out the product
    console.log(tax)
    //prints out the difference
    console.log(netPay)
}
paye()