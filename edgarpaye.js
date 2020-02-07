
    //initiate the gross salary variable
    let salary=2000000
    //initiate the tax percentage variable
    let tax=30/100
    //initiate the tax rate variable applied on gross salary
    let taxrate=tax*salary
    //initiate the netpay based on the tax rate
    let netpay=salary-taxrate
//the function that calls the paye tax rate
    function paye ()
    {
        let pay=[netpay]
        console.log ("this is your net pay") //arguments
        console.log (netpay)      //function definition
    }
    paye()                       //function invocation 

    function add(a,b)      //parameters (can be dynamic)
    {
        let c=a+b
        console.log (c)
    }
    add (20,10)
    add (40,50)

    function sum (a,b)
    {
        let c=a+b
        return c  //function that calls must have a returning value
    }
    function avg (a)
    {
        let d=sum (20,30)/a
        console.log (d)
    }
avg (2)


