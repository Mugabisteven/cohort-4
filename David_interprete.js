
/**The object function called tests is created
 * with 2 parameters test1 and test2
 * The function declares that test1 compares to a previous value of test1
 * then assigns the greater value test1 to variable greater
 * Otherwise it returns the value of test2
 */

function tests(test1,test2)
{
let greater = test1>test1?test1:test2
return greater


}
/**The new object function called coursework is created
 * with 1 parameter cswork
 * coursework declares itself to be assigned the sum of cswork added
 * to the results of the function tests
 * where the parameters test1 = 80
 * and test2 = 80
 *then the result of the coursework calculation is printed to screen
 * then the function is called to return the present value
 * of coursework and hold it in memory
*/
 function coursework(cswork)
 {
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
return coursework

 }
/**The new object function called avg is created
 * with 1 parameter, the variable a
 * avg declares itself to be assigned the result of function coursework
 * with an input value of 90
 * divided the present value of a
 * then the function avg is called to return the present value
 * and hold it in memory
*/
function avg(a)
{
let avg =coursework(90)/a
return avg

}

/**The new object function called crsmark is created
 * with 1 parameter, the variable a
 * crsmark declares the new variable exm to be assigned the result of function avg
 * with an input value of 2
 * multiplied by the present value of a divided by 100
 * finally the result of the exm function is called to return the present value
 * and it is held it in memory
*/
function crsmark(a)
{
let exm = avg(2)*(a/100)
 return exm 
}

function exam(a)
{
let fexam = (60/100)*a
return fexam

}
/**The new object function called fnal is created
 * fnal declares that the new variable fmark to be assigned the result of function exam
 * with an input value of 75
 * added to the the result of function crsmark
 * with an input value of 40
 * the result of function fmark is then printed to screen
 * finally the function fnal is invokded and its final value
 * is held in memory
*/
function fnal()
{
let fmark = exam(75)+crsmark(40)
console.log(fmark)

}
fnal()