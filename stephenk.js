//Weekend Assignment to comment this code

function tests(test1,test2)
{
/* Defind a function called tests that takes on two parameters
Then, declare the greater variable and in it store the greater 
of two variables test1 & test2. Return the value in greater 
variable to any calling function **/
var greater = test1>test2?test1:test2 
return greater


}

 function coursework(cswork)
 {
/* Function courseword defined to compute the Course Work 
mark by taking one mandatory mark and the greater of two 
tests. Print out the value of the Coursework value and return
the same value to the calling function */
 var coursework = cswork + tests(80,80)
 console.log(coursework)
 return coursework

 }

function avg(a)
{
/* Initialise the variable avg to contain the returning value of the
function coursework divided by parameter a */
var avg =coursework(90)/a
return avg

}

function crsmark(a)
{
/* Define the function exm to take a percentage the value returned
by function avg then return the value to the calling function */
var exm = avg(2)*(a/100)
 return exm 
}

function exam(a)
{
/* Define the function exam to take 60% percentage of variable a 
and return the value to the calling function */
var fexam = (60/100)*a
return fexam

}

function fnal() 
{
/* Define a funciton fnal. Declare the variable fmark to hold the 
computation of the addition of feedback from the exam and crsmark 
functions. Finally display the result on the console */
var fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//Call the Function fnal 
fnal()

/*In conclusion; this program computes the final mark.
Firstly, the Coursework is computed from a mandatory mark 
and an avarage of two tests; the result of printed before 
furter manipulation through the average function.
Finally, a percentage of the courseork and exam marks are 
computed and added to achieve the Student's Mark out of 100%.
Lastly; the Final Mark is also printed out.