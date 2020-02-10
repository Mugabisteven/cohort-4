/**Declaring function tests */
function tests(test1,test2)
{
    /**Assigning greater to test1 and test2 */
let greater = test1>test1?test1:test2
/**returning greater */
return greater


}
/**Declaring function coursework */

 function coursework(cswork)
 /**Assigning coursework to cswork and tests */
 {
 let coursework = cswork + tests(80,80)
/**print out coursework */
 console.log(coursework)
 /**return coursework */
return coursework

 }
/**Declaring function avg */
function avg(a)
{
    /**Assigning average avg to coursework */
let avg =coursework(90)/a
/**return avg */
return avg

}


function crsmark(a)
/**Calculating exam */
{
let exm = avg(2)*(a/100)
 return exm 
}
/**Declaring function function exam */
function exam(a)
{
    /**Assigning fexam to exam(a) */
let fexam = (60/100)*a
return fexam

}

function fnal()
/**claculating fmark */
{
let fmark = exam(75)+crsmark(40)
console.log(fmark)

}
/**calling function final() */
fnal()