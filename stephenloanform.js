/*
    This file demonstrates validation in Javascript for the different types of entries in the form.
    The tests are a series of nested 'if' statements where progression depends on the success of the 
    prior statement. For each failure, it guides the user on the expectation through an alert and
    takes the focus to the affected input field. On successful validation of the whole form, it 
    concludes with an alert of "Form Succesfully Submitted"
   
    The tests carried out for each field are listed below:
    User id - length not equal to 0 or empty but greater than 5 and less than or equal to 12
    Password - length not equal to 0 or empty but between 7 to 12, inclusive
    Name - all should be alphabetical characters
    Address - all should be alphabetical characters
    Country - country has to be selected
    ZIP Code - all should be numerical characters
    Email - Validity of email address format
    Sex - one of the two but not both options has to be selected
    Language - can select multiple languages 
*/

//Main method controlling all form execution.
function formValidation() {
    var fullname = document.registration.fname;
    var datemonth = document.registration.month;
    var dateday = document.registration.day;
    var dateyear = document.registration.year;
    var marrystat = document.registration.mstatus;
    var cemail = document.registration.email;
    var pnum = document.registration.phoneno;
    var nid = document.registration.nin;
    var uadd = document.registration.address;
    var loanp = document.registration.lpurpose;
    var loana = document.registration.lamount;

    var durat = document.registration.duration;
    var moninc = document.registration.mincome;
    var collnam = document.registration.cname;
    var collval = document.registration.cvalue;
    
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex; 
    
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var ucountry = document.registration.country;
    if (fullname_validation(fname)) {
        if (monthselect(datemonth)) {
            if (dayselect(dateday)) {
                if (yearselect(dateyear)) {
                    if (validsex(umsex, ufsex)) {
                        if (pickselect(marrystat)) {
                            if (ValidateEmail(cemail)) {
                                if (allnumeric(pnum)) {
                                    if (alphanumeric(nid)) {
                                        if (alphanumeric(uadd)) {
                                            if (alphanumeric(loanp)) {
                                                if (allnumeric(loana)) {
                                                    if (pickselect(durat)) {
                                                        if (allnumeric(moninc)) {
                                                            if (alphanumeric(collnam)) {
                                                                if (allnumeric(collval)) {
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
                    }

                }
            }
        }
        // if (passid_validation(passid, 7, 12)) {
        //     if (allLetter(uname)) {
        //         if (alphanumeric(uadd)) {
        //             if (countryselect(ucountry)) {
        //                 if (allnumeric(uzip)) {
        //                     if (ValidateEmail(uemail)) {
        //                         if (validsex(umsex, ufsex)) {
        //                         }
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }
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

function fullname_validation(fname) {
    var twowords = /^[A-Za-z]+$/;
    if (fname.value.match(twowords)) {
        return true;
    }
    else {
        alert('Full name must have alphabet characters only');
        uname.focus();
        return false;
    }
}

function alphanumeric(numword) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (numword.value.match(letters)) {
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    }
    else {
        alert('Your entry must have alphanumeric characters only');
        numword.focus();
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

function pickselect(selectstat) {
    if (selectstat.value == "Default") {
        alert('Please select from the list');
        selectstat.focus();
        return false;
    }
    else {
        return true;
    }
}

function monthselect(datemonth) {
    if (datemonth.value == "Default") {
        alert('Select the month from the list');
        datemonth.focus();
        return false;
    }
    else {
        return true;
    }
}

function dayselect(dateday) {
    if (dateday.value == "Default") {
        alert('Select the day from the list');
        dateday.focus();
        return false;
    }
    else {
        return true;
    }
}

function yearselect(dateyear) {
    if (dateyear.value == "Default") {
        alert('Select the year from the list');
        dateyear.focus();
        return false;
    }
    else {
        return true;
    }
}

function allnumeric(nums) {
    var numbers = /^[0-9]+$/;
    if (nums.value.match(numbers)) {
        return true;
    }
    else {
        alert('Your entry must have numeric characters only');
        nums.focus();
        return false;
    }
}

function ValidateEmail(cemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (cemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        cemail.focus();
        return false;
    }

} 

function validsex(umsex, ufsex) {
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
        //newFunction();
        return true;
    }

    function newFunction() {
        alert('Form Succesfully Submitted');
        window.location.reload();
    }
}