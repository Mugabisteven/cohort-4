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
    console.log("Your tax is : ")
    console.log(tax)
    //prints out the difference
    console.log("Your netPay is : ")
    console.log(netPay)
}
paye()

//parameterised function
function payeParam(grossIncome, taxRate)
{
  let tax = grossIncome * taxRate/100
  console.log("Your tax is : " + tax)
  let netPay = grossIncome - tax
  console.log("Your netPay is : " + netPay)
}
payeParam(2500000, 30)
