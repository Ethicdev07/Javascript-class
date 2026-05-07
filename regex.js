//Regex--commonly known a regular expression can be to test for string values.
//They are essential for tasks like input validation, data parsing, and text manipulation.

//[] - is use to search a range of characters in regex
//[0-9]+ matches one or more digits
//[0-9]* matches zero or more digits
//[0-9]? matches zero or one digit
//Curly braces {} specify the number of occurrences Examples:
//[0-9]{2} matches exactly 2 digits (like 42, 07)
//[0-9]{2,4} matches 2 to 4 digits (like 42, 123, 5678)
//[0-9]{2,} matches 2 or more digits


let pattern = /hello/;
console.log(pattern);


let newPattern = new RegExp("hello");
console.log(newPattern);

let text = 'hello world, how are is javasscriptsss treating you today?';

let result = /javasscriptsss/.test(text);
console.log(result);

let phoneInp = document.getElementById('phonenumber');


let phoneReg = /^\+234[0-9]{10}$/;

let emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

let emailInp = document.getElementById('emailinp');
console.log(emailInp);

let errorMessage = document.getElementById('errorMessage');
let password = document.getElementById('password');

let passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;


function canText(){
    if(phoneReg.test(phoneInp.value) && emailReg.test(emailInp.value) && passwordReg.test(password.value)){
        errorMessage.innerHTML = 'Valid credentials';
        errorMessage.style.color = 'green';
    }
    else{
        errorMessage.innerHTML = `invalid credentials, check all fields correctly`;
        errorMessage.style.color = 'red';
    }
    
};


