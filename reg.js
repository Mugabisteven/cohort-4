function formValidation() {
  /** Accessing form elements by declaring variables*/
  var uid = document.loanform.firstid;
  var ulid = document.loanform.lastid;
  var ucountry = document.loanform.origin;
  var job = document.loanform.job;
  var uloan = document.loanform.amount;
  var uemail = document.loanform.email;
  var tel = document.loanform.tel;
  var uadd = document.loanform.address;
  var umsex = document.loanform.msex;
  var ufsex = document.loanform.fsex;
  var udate = document.loanform.date;
  var uabout = document.loanform.about;

  /**Invoking functions with arguments */
  if (firstid_validation(uid, 5, 12)) {
    if (lastid_validation(ulid, 5, 12)) {
      if (countryselect(ucountry)) {
        if (allLetter(job)) {
          if (validateEmail(uemail)) {
            if (allnumeric(tel)) {
              if (alphanumeric(uadd)) {
                if (allamount(uloan)) {
                  if (validsex(umsex, ufsex)) {
                    if (validateabout(uabout)) {
                      if (validdate(udate)) {
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return false;
}

//Defining method firstid_valiadtion with parameters
function firstid_validation(uid, mx, my) {
  //Accessing form element
  var uid_len = uid.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    alert(
      "Firstname should not be empty / length be between " + mx + " to " + my
    );
    uid.focus();
    return false;
  }
  return true;
}

//Defining method lastid_valiadtion with parameters
function lastid_validation(ulid, mx, my) {
  //Accessing form element
  var ulid_len = ulid.value.length;
  if (ulid_len == 0 || ulid_len >= my || ulid_len < mx) {
    alert(
      "Lastname should not be empty / length be between " + mx + " to " + my
    );
    ulid.focus();
    return false;
  }
  return true;
}

//Defining method countryselect with parameter
function countryselect(ucountry) {
  var letters = /^[A-Za-z]+$/;
  if (ucountry.value.match(letters)) {
    return true;
  } else {
    alert("Nationality must have alphabet characters only");
    ucountry.focus();
    return false;
  }
}

//Defining method allLetter with parameter
function allLetter(job) {
  var letters = /^[A-Za-z]+$/;
  if (job.value.match(letters)) {
    return true;
  } else {
    alert("Occupation must have alphabet characters only");
    job.focus();
    return false;
  }
}

//Defining method allamount with parameter
function allamount(uloan) {
  var numbers = /^[0-9]+$/;
  if (uloan.value.match(numbers)) {
    return true;
  } else {
    alert("Loan amount must have numeric characters only");
    uloan.focus();
    return false;
  }
}

//Defining method allnumeric with parameter
function allnumeric(tel) {
  var numbers = /^[0-9]+$/;
  if (tel.value.match(numbers)) {
    return true;
  } else {
    alert("Telephone code must have numeric characters only");
    tel.focus();
    return false;
  }
}

//Defining method alphanumeric with parameter
function alphanumeric(uadd) {
  var letters = /^[0-9a-zA-Z]+$/;
  if (uadd.value.match(letters)) {
    return true;
  } else {
    alert("User address must have alphanumeric characters only");
    uadd.focus();
    return false;
  }
}

//Defining method ValidateEmail with parameter
function validateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You must enter a valid email address!");
    uemail.focus();
    return false;
  }
}

//Defining method validateabout with parameter
function validateabout(uabout) {
  var letters = /^[A-Za-z]+$/;
  if (uabout.value.match(letters)) {
    return true;
  } else {
    alert("About must have alphabet characters only");
    uabout.focus();
    return false;
  }
}

//Defining method validdate with parameter
function validdate(udate) {
  var letters = /^[0-9a-zA-Z]+$/;
  if (udate.value.match(letters)) {
    alert("Form Succesfully Submitted");
    window.location.reload();
    return true;
  } else {
    alert("Date of issue must have alphanumeric characters only");
    udate.focus();
    return false;
  }
}

//Defining method validsex with parameters
function validsex(umsex, ufsex) {
  x = 0;

  if (umsex.checked) {
    x++;
  }
  if (ufsex.checked) {
    x++;
  }
  if (x == 0) {
    alert("Select Male/Female");
    umsex.focus();
    return false;
  } else {
    return true;
  }
}
