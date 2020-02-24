function formValidation(){
    var surname = document.registration.surname;
    var givenName = document.registration.givenName;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex;
    var phoneNumber = document.registration.phoneNumber;
    var nin = document.registration.nin;
    var address = document.registration.address;
    var occupation = document.registration.occupation;
    var amount = document.registration.amountDesired;
    
    
    if(validateSurname(surname)){
        if(validateGivenName(givenName)){
            if(validsex(umsex,ufsex)){
                if(validatePhone(phoneNumber)){
                    if(validateNin(nin)){
                        if(validateAddress(address)){
                            if(validateOccupation(occupation)){
                                if(validateAmount(amount)){

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
function validateSurname(name){
    var letters = /^[A-Za-z]+$/;
    if(name.value.match(letters)){
        return true;
    }
    else {
        alert('Surname must have alphabet characters only');
        name.focus();
        return false;
    }   
}
function validateGivenName(name){
    var letters = /^[A-Za-z]+$/;
    if(name.value.match(letters)){
        return true;
    }
    else {
        alert('Given name must have alphabet characters only');
        name.focus();
        return false;
    }   
}
function validatePhone(a){
    var numbers = /^[0-9]+$/;
    if(a.value.match(numbers)){
        return true;
    }
    else {
        alert('Phone number must have numeric characters only');
        a.focus();
        return false;
    }
}
function validateNin(x){
    var letters = /^[0-9a-zA-Z]+$/;
    if(x.value.match(letters)){
        return true;
    }
    else {
        alert('NIN must have alphanumeric characters only');
        x.focus();
        return false;
    }
}
function validsex(umsex,ufsex){
    x=0;
    if(umsex.checked){
        x++;
    }
    if(ufsex.checked){
        x++; 
    }
    if(x==0){
        alert('Select Male/Female');
        umsex.focus();
        return false;
    }
    else {
        
        return true;
    }
}
function validateAddress(x){
    var letters = /^[0-9a-zA-Z]+$/;
    if(x.value.match(letters)){
        return true;
    }
    else {
        alert('Address must have alphanumeric characters only');
        x.focus();
        return false;
    }
}
function validateOccupation(name){
    var letters = /^[A-Za-z]+$/;
    if(name.value.match(letters)){
        return true;
    }
    else {
        alert('Occupation must have alphabet characters only');
        name.focus();
        return false;
    }   
}
function validateAmount(a){
    var numbers = /^[0-9]+$/;
    if(a.value.match(numbers)){
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    }
    else {
        alert('Amount must have numeric characters only');
        a.focus();
        return false;
    }
}