// a function that calculates the PAYE you earn for 1000000
function paye()
{
// assign gross income to 1000000
gross=1000000
// assign tax to 30% of gross income to calculate taxes
tax = 1000000*0.3
// display the taxes as tax
console.log(tax)
// assign net to the difference between gross income and  tax to obtain net pay
net=gross-tax
// display the net pay as net
console.log(net)
}
paye()