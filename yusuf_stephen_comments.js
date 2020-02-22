
//by Yusuf Mugagga and Stephen Kasirye

/*
    This file demonstrates validation for the different types of entries in the form.
    The tests are nested in that if one fails, it doesn't proceed to the next.
    For each failure, it guides the user on the expectation through an alert.
   
    The tests carried for each field are listed below:
    User id - length not equal to 0, greater than 5 and less than or equal 12
    Password- length not equal to 0, greater than 7 and less than or equal 12
    Name - all should be alphabetical characters
    Address - all should be alphabetical characters
    Country - country has to be selected
    ZIP Code - all should be numerical characters
    Email - Validity of email address format
    Sex - one of the two but not both options has to be selected
    Language - one of the two but not both options has to be selected
    
    Submit button - Displays submission sucess on successful validation above
*/

//Main method controlling all form execution.
function formValidation() {
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex; 
    if (userid_validation(uid, 5, 13)) {
        if (passid_validation(passid, 13, 7)) {
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
    return false;

} 
function userid_validation(uid, mx, my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len > my || uid_len < mx) {
        alert("User Id should not be empty / length be between " + mx + " to " + my);
        uid.focus();
        return false;
    }
    return true;
}
function passid_validation(passid, mx, my) {
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len > my || passid_len < mx) {
        alert("Password should not be empty / length be between " + mx + " to " + my);
        passid.focus();
        return false;
    }
    return true;
}
function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    }
    else {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}
function alphanumeric(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (uadd.value.match(letters)) {
        return true;
    }
    else {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}
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
function allnumeric(uzip) {
    var numbers = /^[0-9]+$/;
    if (uzip.value.match(numbers)) {
        return true;
    }
    else {
        alert('ZIP code must have numeric characters only');
        uzip.focus();
        return false;
    }
}
function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
} function validsex(umsex, ufsex) {
    x = 0;

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
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    }
}