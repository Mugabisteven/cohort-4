//A function that calculates and outputs PAYE (Pay As You Earn)
// and the Net Salary
function paye(){                    //the funtion name
    let mySalary = 3000000
    let p = 30/100                  //calcuating the percentage of tax
    let t = mySalary * p            // paye amount
    let d = mySalary - t            // actual salary
    console.log("Payee = " + t)
    console.log("Net Salary = "+ d)
}
paye()