function payee(myIncome) {

  let myPayee = myIncome*0.3  //Calculate the payee by getting 30% of income

  let myNetPay = myIncome - myPayee //

  console.log(myPayee + "/=") //  print payee

  console.log(myNetPay + "/=")  //print net pay

}

payee(1000) //call the payee function