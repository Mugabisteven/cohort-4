function PAYE() {
    // declare salary and assign 15 million to it
    let salary = 15000000
    //declare tax and assign 30% to it 
    let tax    = 30/100
    //calculate the tax amount
    let taxAmount = salary * tax
    //calculate netPay
    let netPay = salary - taxAmount

    console.log(taxAmount)
    console.log(netPay)
}

PAYE()