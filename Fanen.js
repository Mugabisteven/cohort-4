/* Defining a function name called "tests" with two argument,
test1 and test2 */
function tests(test1,test2)

// The curly braces represent blog of codes known as function
{

/*Comparing the two aguments (test1 and test2)
to know which test is greater */
let greater = test2>test1?test1:test2 

//Print/output the greatest value
return greater


}

//Defining the name of a function
 function coursework(cswork)
 {

    //Add cswork plus test with parameters (80,80) and store the value in a function name called "cursework"
 let coursework = cswork + tests(80,80)
 
 //Print out the result that is stored in coursework
 console.log(coursework)
return coursework

 }
 // Defining a function "avg" that takes the parameter "a"
function avg(a)
{
    //Computing the average
let avg =coursework(90)/a
return avg

}

//Defining a function called crsmark
function crsmark(a)
{
    /*Take avg(2) and multiply it by "a" (crsmark) then divide 
    by 100 to get exam */
let exm = avg(2)*(a/100)
 return exm 
}
//Defining a function name called exam
function exam(a)
{
    //Computing the final exam
let fexam = (60/100)*a
return fexam

}

function fnal()
{
    /*Add exam with a parameter 75 and crsmark with a parameter of 40 to 
    get the final mark and store the result in "fmark" (computing fmark)*/
let fmark = exam(75)+crsmark(40)

//Print the result of fmark
console.log(fmark)

}
//Invoking/calling "fnal"
fnal()

/* The above code is calculating the final results of students by computing
their tests, course work, average, exam and final mark */


