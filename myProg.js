function paye()
{
    //This is the net pay for the worker
    let  netPaye = 2500000

    //decalaring the tax deducted from the worker
    let tax = 30/100

    //calculating for pay
    let paye = netPaye * tax

    //printing the result of pay in the console
     console.log(paye)
    
     //calculating how much the worker actaully takes home
     let takeHome = netPaye - paye

     //printing the takeHome amount in the console
     console.log(takeHome)
}
 paye()