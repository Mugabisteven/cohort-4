//Function to compute test with the highest mark
function tests(test1, test2) {
  //assign mark of highest test to variable greater
  let greater = test1 > test1 ? test1 : test2;
  //return the highest mark
  return greater;
}

//Function to calculate sum of the coursework marks and
//best test
function coursework(cswork) {
  //Add the coursework mark done obtained and the highest
  // test mark
  let coursework = cswork + tests(80, 80);
  //display it in the console
  console.log(coursework);
  //return the final course mark
  return coursework;
}

//Function to calculate the average coursework mark
function avg(a) {
  //average course mark is the sum of test and coursework
  //divided by the number of mark entries
  let avg = coursework(90) / a;
  //return the average coursework mark
  return avg;
}

//Function to calculate the final course work mark
function crsmark(a) {
  //the course work mark is a given percentage of the
  //average coursework mark
  let exm = avg(2) * (a / 100);
  //return the computed mark
  return exm;
}

//The exam mark calculator
function exam(a) {
  //the exam mark is 60% of the result obtained in the
  //end of semsester exams
  let fexam = (60 / 100) * a;
  //return the computed result as final exam mark
  return fexam;
}

//Calculate the final mark of the student
function fnal() {
  //final mark is the sum of the  computed exam mark and
  //calculated course work
  let fmark = exam(75) + crsmark(40);
  //print the final mark in the console
  console.log(fmark);
}
fnal();

/**
 * The final program is used to calculate the final mark of a given
 *  subject in the given semster.
 * Following the procedure below:
 *
 * 1. Obtain the highest mark of the two tests done by student.
 * 2. Add the coursework mark and the highest done test mark.
 * 3. Find the average mark of the sum of the coursework and test.
 * 4. The final coursework mark is a percentage of the average coursework marks
 * 5. The final exam contributes 60% of the final mark of the semseter
 * 6. The final mark is a sum of the of 60% of the final exam and the 40% of the average coursework mark
 *
 */
