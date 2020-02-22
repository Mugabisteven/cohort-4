// Defining a method that will access elements within the form
function formValidation() {
   // Variables to access individual elements in the registration form by element name
   var uid = document.registration.userid;
   var passid = document.registration.passid;
   var uname = document.registration.username;
   var uadd = document.registration.address;
   var ucountry = document.registration.country;
   var uzip = document.registration.zip;
   var uemail = document.registration.email;
   var umsex = document.registration.msex;
   var ufsex = document.registration.fsex;

   //  Calling the specific function for each of the conditional statements
   if (userid_validation(uid, 5, 12)) {
      if (passid_validation(passid, 7, 12)) {
         if (allLetter(uname)) {
            if (alphanumeric(uadd)) {
               if (countryselect(ucountry)) {
                  if (allnumeric(uzip)) {
                     if (ValidateEmail(uemail)) {
                        if (validsex(umsex, ufsex)) {
                        }
                     }
                  }
               }
            }
         }
      }
   }
   // Return 
   return false;
}

// Defining a method to access the value of the object userid_validation
function userid_validation(uid, my, mx) {
   var uid_len = uid.value.length;
   // A statement to check if the value of uid element is empty / length between parameters my to mx
   if (uid_len == 0 || uid_len >= my || uid_len < mx) {
      alert("User Id should not be empty / length be between " + mx + " to " + my);
      uid.focus();
      return false;
   }
   return true;
}

// Defining a method to access the value of the object passid_validation
function passid_validation(passid, my, mx) {
   var passid_len = passid.value.length;
   // A statement to check if the value of passid element is empty / length between parameters my to mx
   if (passid_len == 0 || passid_len >= my || passid_len < mx) {
      alert("Password should not be empty / length be between " + mx + " to " + my);
      passid.focus();
      return false;
   }
   return true;
}

// Defining a method to access the value of the object allLetter with one parameter
function allLetter(uname) {
   // Declaring a variable letters that stores a regular expression that will be matched against
   var letters = /^[A-Za-z]+$/;
   // A statement to check if the value of uname is within the alphabet
   if (uname.value.match(letters)) {
      return true;
   }
   else {
      alert('Username must have alphabet characters only');
      uname.focus();
      return false;
   }
}

// Defining a method to access the value of the object alphanumeric and one parameter
function alphanumeric(uadd) {
   // Declaring a variable letters that stores a regular expression that will be matched against
   var letters = /^[0-9a-zA-Z]+$/;
   // A statement to check if the value of uname is alphanumeric
   if (uadd.value.match(letters)) {
      return true;
   }
   else {
      alert('User address must have alphanumeric characters only');
      uadd.focus();
      return false;
   }
}

// Defining a method to access the value of the object countryselect
function countryselect(ucountry) {
   if (ucountry.value == "Default") {
      alert('Select your country from the list');
      ucountry.focus();
      return false;
   }
   else {
      return true;
   }
}

// Defining a method to access the value of the object allnumeric
function allnumeric(uzip) {
   // Declaring a variable numbers that stores a regular expression that will be matched against
   var numbers = /^[0-9]+$/;
   // A statement to check if the value of uzip is numeric
   if (uzip.value.match(numbers)) {
      return true;
   }
   else {
      alert('ZIP code must have numeric characters only');
      uzip.focus();
      return false;
   }
}

// Defining a method to access the value of the object ValidateEmail
function ValidateEmail(uemail) {
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regular expression always start with /^
   // A statement to check if the value of uemail includes any symbols
   if (uemail.value.match(mailformat)) {
      return true;
   }
   else {
      alert("You have entered an invalid email address!");
      uemail.focus();
      return false;
   }
}

// Defining a method to access the value of the object validsex
function validsex(umsex, ufsex) {
   x = 0;
   // Statements to check if the option umsex or ufsex has been checked but not both
   if (umsex.checked) {
      x++;
   } if (ufsex.checked) {
      x++;
   }
   if (x == 0) {
      alert('Select Male/Female');
      umsex.focus();
      return false;
   }
   else {
      //Block of code executed if all conditions has been successfully met
      alert('Form Succesfully Submitted');
      window.location.reload()
      return true;
   }
}