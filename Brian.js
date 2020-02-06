//This is my file

//Calculate the payee
function getPayee(salary, rate) {
  let ratePercentage = rate / 100;
  let payee = salary * ratePercentage;
  return payee;
}

//Calculate the net salary
function getNetSalary(salary, payee) {
  let netSalary = salary - payee;
  return netSalary;
}

let theSalary = getNetSalary(2000000, getPayee(2000000, 30));

console.log("The net salary is : " + theSalary);
