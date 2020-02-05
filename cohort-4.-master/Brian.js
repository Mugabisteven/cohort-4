//A function to calculate the paye of an employee
function payeCalculator() {
  //Define the employees salary
  let salary = 1000000;

  //Define the rate at which paye is calculated.
  let rate = 30 / 100;

  //Compute the paye from the rate and salary
  let paye = salary * rate;

  //Compute the final salary for the employee
  let actualSalary = salary - paye;

  //Print the results of the paye
  console.log("Paye: " + paye);

  //Print the results of final salary
  console.log("Final salary: " + actualSalary);
}

//Call the function to calculate the paye
payeCalculator();
