function payee(income, taxPercentage){  //Define a function with 2 parameters

    let myPayee = income * taxPercentage    //Calculate payee

    let myNetPay = income - myPayee     //Calculate net pay

    console.log("Your payee is: " + myPayee + "/= and your net pay is: " + myNetPay + "/=")
}

payee()