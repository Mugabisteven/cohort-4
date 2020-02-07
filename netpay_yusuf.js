function take_home_salary(gross_pay,tax_rate)
{
let official_tax = gross_pay*tax_rate
let take_home = gross_pay - official_tax
console.log("With the goverment tax being " + official_tax + "your net pay is " + take_home)
}
take_home_salary(1000000,0.1)