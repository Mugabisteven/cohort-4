// Defining the function "tests"
function tests(test1, test2) {
   // Checking if test2 is greater than test1, if that is true, then take test1 and if not, test2 is then declared
   let greater = test2 > test1 ? test1 : test2
   // Returns the greater number of the two - making it accessible to other functions
   return greater
}

// Defining the function "coursework" 
function coursework(cswork) {
   // Invoking coursework function and adding it to test scores as using the assigned parameters
   // Assigning coursework to the sum
   let coursework = cswork + tests(80, 80)
   // Printing the coursework value onto the screen
   console.log(coursework)
   // Making the coursework value acessible to other functions
   return coursework
}

// Function to calculate the average coursework score
function avg(a) {
   // Assigning avg to the coursework function and divided by the value assigned to avg
   let avg = coursework(90) / a
   // Returns avg to be accessible to other functions
   return avg
}

// Defining the function "crsmark"
function crsmark(a) {
   // Assigning exm to avg(2) and multiplying it to paramenter "a" divided by 100
   let exm = avg(2) * (a / 100)
   // Returns exm accessible for other functions
   return exm
}

// Defining the function "exam"
function exam(a) {
   // Assigning fexam to be the product of exm mark as a percentage of exam mark
   let fexam = (60 / 100) * a
   // Returning fexam value for later functions
   return fexam

}

// Defining the function "fnal"
function fnal() {
   // Assigning the summation of exam and crsmark to fmark	
   let fmark = exam(75) + crsmark(40)
   // Printing out the fmark
   console.log(fmark)
}
// Calling the function "fnal"
fnal()
