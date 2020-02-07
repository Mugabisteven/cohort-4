// tax percentage for income tax and pay related insurence (prsi)tax
function taxPercentage(incomeTax,payRelatedInsurence)
    {
        // Total tax percentage
        let totalTaxPercentage =incomeTax+payRelatedInsurence
        console.log(totalTaxPercentage)
        return totalTaxPercentage
    }
    // monthly salary
    salary(8000000)

    function salary(netIncome) 
    {
        // total amount of pay as you earn
        let Paye =taxPercentage(10/100,20/100)*8000000
        console.log(Paye)
    }