//Defining  a formValidation method
function formValidation() {

    /* Declaring variables (uid,passid,uname,uadd,ucountry,uzip,umsex and ufsex)
    which access the html file(document) specifically the form called registration
    by input names*/
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex;

    // Assigning the if conditions to the input names to check if the values are true or not
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
    //If the condition is not met then the method should return a false urgument 
    return false;

}
/*Defining a method called userid_validation with parameters (uid,mx,my) and declaring a variable
called uid_len which which checks the length if the user id is empty or is between a given range 
and if the condition is met return true otherwise false*/
function userid_validation(uid, mx, my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
        alert("User Id should not be empty / length be between " + mx + " to " + my);
        uid.focus();
        return false;
    }
    return true;
}
/*Definiong a method called passid_validation with parameters(passid,mx,my) and declaring a variable called 
passid_len which checks if the values of the input password are empty and meet the specified range of characters 
via name passid. If the condition is met return true otherwise false*/
function passid_validation(passid, mx, my) {
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
        alert("Password should not be empty / length be between " + mx + " to " + my);
        passid.focus();
        return false;
    }
    return true;
}
/* Defining a method called allLetter with parameter(uname) and declaring a variable called leters which sets 
a condition of values entered to be alphabets ony and not numbers*/
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
/* Defining a method called alphanueric with parameter(unadd) and declaring a variable called leters which sets
a condition of values entered to be alphabets ony and not alphabets*/
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
/*Defining a funtion countryselect with parameter ucountry which gives an alert if 
the country is not selected and return 'Select your country from the list'alert if the condition
is not meet or else it runs */
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
/*Defining a method called allnumeric and a variable numbers that sets a condition of values 
entered for Zip code to be only numbers from 0 to 9 otherwise it will return a 'ZIP code must have 
numeric characters only' alert */
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
/*Defining a method ValidateEmail and variable called mailformat that sets a condition for 
the email to be of an email format*/
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
}
/*Defining a validsex method with parameters umsex,ufsex that sets a condition for the user to either select
if he/she is male or female and if not selected a  'Select Male/Female' alert would be returned otherwise
the form would be submitted sucessfully  */
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
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    }
}