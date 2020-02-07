function PAYE() {
    let fig1 = 500000 // I am declaring the Initial gross pay for the worker as fig1
    let fig2 = 30/100 // I am declaring the rate percentile out of 100 as fig2
    let fig3 = fig1*fig2 // I am declaring fig3 as the gov't tax by multiplying fig1*fig2
    let fig4 = fig1 - fig3 // I am declaring fig4 as net pay for the worker by subtracting fig3 from fig1
    console.log(fig2)
    console.log(fig3)
    console.log(fig4)
}
PAYE()