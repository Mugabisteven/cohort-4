//Timothy and Ashe
//Defining a method formValidation which validates user input
function formValidation() {
    // Accessing and Storing dom elements to be used in validation rules
  var uid = document.registration.userid;
  var passid = document.registration.passid;
  var uname = document.registration.username;
  var uadd = document.registration.address;
  var ucountry = document.registration.country;
  var uzip = document.registration.zip;
  var uemail = document.registration.email;
  var umsex = document.registration.msex;
  var ufsex = document.registration.fsex;
  //Checking whether validation functions evaluates true or false
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
        }+
      }
    }
  }
  //All the validation methods return false
  return false;
}
/**Defining the userid_validation method which ensures that
 *  the userid field is not empty and is between 
 * the range specified by mx and my parameters*/
function userid_validation(uid, mx, my) {
/**Declaring the variable uid_len and assigning it the length of the uid value*/
  var uid_len = uid.value.length;
 /* Checking whether the uid_len is equal to zero or 
 it is greater or equal to my argument or it is less than mx argument */
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
     //Alert message to the user if uid_len doesn't meet the validation rule 
    alert(
      "User Id should not be empty / length be between " + mx + " to " + my
    );
    //Gives the username field focus
    uid.focus();
    //Returns false if usid doesn't meet the validation rule
    return false;
  }
  //Returns true if usid meets the validation rule
  return true;
}


/**Defining the passid_validation method which ensures that
 *  the password field is not empty and is between 
 * the range specified by mx and my parameters*/
function passid_validation(passid, mx, my) {
    /**Declaring the variable passid_len and assigning it the length of the passid value*/
  var passid_len = passid.value.length;
   /* Checking whether the passid_len is equal to zero or 
 it is greater or equal to my argument or it is less than mx argument */
  if (passid_len == 0 || passid_len >= my || passid_len < mx) {
//Alert message to the user if passid_len doesn't meet the validation rule  
    alert(
      "Password should not be empty / length be between " + mx + " to " + my
    );
 //Gives the password field focus
    passid.focus();
//Returns false if the password doesn't meet the validation rule 
    return false;
  }
  //Returns true if password meets the validation rule
  return true;
}

/**Defining the allLetter method which ensures that
 *  the username field contains only alphabets*/
function allLetter(uname) {
    /**Declaring the variable letters and assigning it regular expession for alpabets only */ 
  var letters = /^[A-Za-z]+$/;
   /* Checking whether the value stored in uname matches the regular esxpression stored in letters */
  if (uname.value.match(letters)) {
      //returns true if uname contains alaphabets only
    return true;
  } else {
       //Alert message to the user if the username doesn't meet the validation rule 
    alert("Username must have alphabet characters only");
     //Gives the username field focus
    uname.focus();
    // returns false if uname doesnot contain only alphabets
    return false;
  }
}

/**Defining the alphanumeric method which ensures that
 *  the address field contains alphanumeric characters only*/
function alphanumeric(uadd) {
    /**Declaring the variable letters and assigning it a regular expression*/ 
  var letters = /^[0-9a-zA-Z]+$/;
   /* Checking whether the value stored in uadd matches the regular esxpression stored in letters */
  if (uadd.value.match(letters)) {
       //returns true if uname contains alaphabets only
    return true;
  } else {
       //Alert message to the user if address doesn't meet the validation rule 
    alert("User address must have alphanumeric characters only");
     //Gives the address field focus
    uadd.focus();
    // returns false if uadd doesnot contain only alphanumeric
    return false;
  }
}

/**Defining the countryselect method which ensures that
 *  the country field contains a country name*/
function countryselect(ucountry) {
     /* Checking whether the ucountry value contains string Default */
  if (ucountry.value == "Default") {
       //Alert message to the user if no country selected
    alert("Select your country from the list");
     //Gives the country field focus
    ucountry.focus();
    // returns false if no country selected
    return false;
  } else {
      //Return true if user selects a country
    return true;
  }
}

/**Defining the allnumeric method which ensures that
 *  the zipcode field contains a valid zip code*/
function allnumeric(uzip) {
     /**Declaring the variable numbers and assigning it a regular expression*/ 
  var numbers = /^[0-9]+$/;
   /* Checking whether the value stored in uzip matches the regular esxpression stored in numbers */
  if (uzip.value.match(numbers)) {
      //returns true if uzip is in a valid format
    return true;
  } else {
       //Alert message to the user if ZIP code field doesn't meet the validation rule 
    alert("ZIP code must have numeric characters only");
     //Gives the ZIP code field focus
    uzip.focus();
    return false;
  }
}

/**Defining the ValidEmail method which ensures that
 *  the email field contains a valid email address*/
function ValidateEmail(uemail) {
    /**Declaring the variable mailformat and assigning it a regular expression*/ 
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  /* Checking whether the value stored in uemail matches the regular esxpression stored in mailformat */
  if (uemail.value.match(mailformat)) {
      //returns true if uemail is in a valid format
    return true;
  } else {
       //Alert message to the user if email field doesn't meet the validation rule 
    alert("You have entered an invalid email address!");
     //Gives the email field focus
    uemail.focus();
    return false;
  }
}

/**Defining the validsex method which ensures that
 *  the gender button is checked */
function validsex(umsex, ufsex) {
  x = 0;
//Increament variable x if a checkbox is checked
  if (umsex.checked) {
    x++;
  }
  if (ufsex.checked) {
    x++;
  }
// If the variable x is equal to zero, present alert message
  if (x == 0) {      
    alert("Select Male/Female");
     //Gives the checkboxes focus
    umsex.focus();    
    return false;
  } else {
       //Alert message to the user if all fields are valid
    alert("Form Succesfully Submitted");
    window.location.reload();
    return true;
  }
}
