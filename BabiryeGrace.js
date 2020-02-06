function paye(income, tax){ //function definition
  //let income = 1000000 //initialising the income pay
  //let tax = 30/100     //initialising the tax incurred
  let paye = income * tax  //formula for calculating paye
  console.log(paye)
}
paye(1000000,(30/100)) //calling the paye function
function add(a,b){
  let c = a+b
  return c
}
function avg(a){
  let d = add(20,30)/a
  console.log(d)
}
avg(2)
avg(3)
