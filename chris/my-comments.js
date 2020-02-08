/**
 * this function checks if a number is greater than the other, 
 * then it returns the smaller one
 * @param {Float} test1 
 * @param {Float} test2 
 */
function tests(test1,test2)
{
    //checks if test2 is greater than test1
    //if true, returns test1
    //if false return test2
    //store the result in a variable called greater
let greater = test1>test2?test1:test2;

//return the value stored in greater
return greater


}

/**
 * this function adds the coursework marks to test marks
 * it logs the total marks on the console
 * then returns the total marks for the two
 * @param {Float} cswork 
 */
 function coursework(cswork)
 {
     //adding course work mark to the test mark
     //store the result in the variable called coursework
 let coursework = cswork + tests(80,80)
 
 //log the total coursework in console
 console.log(coursework)
 //return the total mark for coursework and test 
return coursework

 }
/**
 * this function calculate the average of the coursework and test marks
 * @param {Float} a 
 */
function avg(a)
{
    //divide the total coursework and test by the given parameter
let avg =coursework(90)/a
//return the average for coursework and test
return avg

}

/**
 * this function calculate the final coursemark 
 * @param {Float} a 
 */
function crsmark(a)
{
    //convert the final coursemark to percentage
let exm = avg(2)*(a/100)
//return the percentage got in coursework
 return exm 
}
/**
 * this calculate the percentage got in the exam
 * @param {Float} a 
 */
function exam(a)
{
//multiply the exam mark by 60/100 
let fexam = (60/100)*a
//return the final exam mark based on 60/100
return fexam

}
/**
 * this function compute the final mark obtained in the coursework and exam
 */
function fnal()
{
    //adding exam marks plus coursework marks
let fmark = exam(75)+crsmark(40)
//log the sum in console
console.log(fmark)


}

fnal()
