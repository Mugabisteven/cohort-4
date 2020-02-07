//  A function of tests with parameters test1 and test2
function tests(test1,test2)
{

    // Assigning greater variable to the statement(test1>test1?test1:test2)
    // checking whether test2 is greater than test1 and if true/yes, confirm with the value of test11 otherwise print value of test2
let greater = test2>test1?test1:test2
// returning to the calling value
return greater


}

// the coursework function with the cswork variable
 function coursework(cswork)
 {
    //  Assigning the summation of cswork and the arguments to coursework
 let coursework = cswork + tests(80,80)
//  print or output coursework
 console.log(coursework)
//  returning to the calling value
return coursework

 }
// the avg(average) function with (a) as the variable
function avg(a)
{
    // Assigning the formula that includes the return value coursework to courseork
let avg =coursework(90)/a
// returning to the calling value
return avg

}

// A function crsmark with another character(a) as the variable
function crsmark(a)
{
    // assigning the multipliction of the average of a/100 and the returned average avg to the exam (exm)
let exm = avg(2)*(a/100)
// returning to the calling value
 return exm 
}
// a function exam with (a) as the variable 
function exam(a)
{
    // assigning the multiplication of variable a and (60/100) to final exam ...fexam
let fexam = (60/100)*a
// returning to the calling value fmark
return fexam

}
// a function fnal with another memory space with no value
function fnal()
{
    // assigning the summation of the exam mark and coursemark to the final mark
let fmark = exam(75)+crsmark(40)
// print or output the final mark
console.log(fmark)

}
// calling the function fnal
fnal()