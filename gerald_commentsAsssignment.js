// declaring the function "tests"
function tests(test1, test2) {
   // checking if test2 is greater than test1, if that is true, then take test1 and if not, test2 is then declared
   let greater = test2 > test1 ? test1 : test2
   // returns the greater number of the two - making it accessible to other functions
   return greater
}

// declaring the function "coursework" 
function coursework(cswork) {
   // invoking coursework function and adding it to test scores as using the assigned parameters
   // assigning coursework to the sum
   let coursework = cswork + tests(80, 80)
   // printing the coursework value onto the screen
   console.log(coursework)
   // making the coursework value acessible to other functions
   return coursework
}

// function to calculate the average coursework score
function avg(a) {
   // assigning avg to the coursework function and divided by the value assigned to avg
   let avg = coursework(90) / a
   // returns avg to be accessible to other functions
   return avg
}

// declaring the function "crsmark"
function crsmark(a) {
   // assigning exm to avg(2) and multiplying it to paramenter "a" divided by 100
   let exm = avg(2) * (a / 100)
   // returns exm accessible for other functions
   return exm
}

// declaring the function "exam"
function exam(a) {
   // assigning fexam to be the product of exm mark as a percentage of exam mark
   let fexam = (60 / 100) * a
   // returning fexam value for later functions
   return fexam

}

// declaring the function "fnal"
function fnal() {
   //assigning the summation of exam and crsmark to fmark	
   let fmark = exam(75) + crsmark(40)
   // printing out the fmark
   console.log(fmark)
}
// calling the function "fnal"
fnal()