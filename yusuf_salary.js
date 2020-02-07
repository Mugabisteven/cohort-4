//here i have used the function key to assign a function name take_home_salary 
//which is the final salary i will take home after the revenue has been deducted.
function take_home_salary()
//so i will have to create a variable that is going to calculate the money i pay in tax.
//the tax rate is 30%. that mean i have to divide 100 by 30.
//then i subtract the tax from my gross salary to get the remaining salary shich is the salary i take home.
{
    //gross is the variable name to store salary i get before deducting the tax.
    var gross = 1000000
    //tax_rate is the variable name to store the tax percentage taken from my salary which is 30%
    var tax_rate = 30/100
    //tax_amount is the variable name to store the amount of money given in as tax. 
    var tax_amount = gross*tax_rate
    //to finally get my salary to take home, i will subtract my tax amount from my gross salary.
    var take_home = gross-tax_amount
    //finally i have to declare a key word to print out my final salary.
    console.log(take_home)
}
//this then becomes my function with my take home salary so i have to call it out to print the money i take home.
take_home_salary()