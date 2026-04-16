//Scope--is the behaviour/nature of a variable bsed on where it is been declared.

//we have two scopes

//1. global scope variables are variables declared outiside a function block. Hence, they can reference in any part of our codes.

//2. local scope variables are variables declared within a function a block and they limited within that function block.

let userNumber = 90; //global


let updatedCarBrand;
function getUserNumber(){
    let userCarBrand = 'Lexus'; //local
    console.log(userCarBrand);



    userCarBrand = 'Toyota';
    console.log(userCarBrand); //toyota
    

    updatedCarBrand = userCarBrand;
    
    console.log(userNumber);

    userNumber = 80;

    console.log(userNumber);
    
    
};
getUserNumber()



console.log(userNumber);

function getUpdatedNumber(){
    console.log(userNumber); //80

    
    console.log(updatedCarBrand); //

    
    
};
getUpdatedNumber()





userNumber = 70;
// console.log(userNumber);


//ARGUMEMTS AND PARAMETERS
//Parameter are variables association with a function. They are limited within the function block. hence, you do not need variable declaration such let, const and vr before setting a paramater.

//Arguments are values sent to a corrwsponding parameter.
//PS; we can have one paramter for many arguments


function getName(firstName, lastName){
    console.log(firstName, lastName);
    
};
getName('Doe', 'john');
getName('Toe');
getName('Damilola', 'Paul')


function getSum(num1, num2){
   return num1 + num2;
}
console.log(getSum(10, 20));

//ASSIGNMENT

//WRITE A JAVASCRIPT PROGRAM THT SIMULATES AN ATM WITHDRAWAL PROCESS USING AN ANONYMOUS FUNCTION STORED INSIDE A VARIABLE.
//YOUR PROGRAM SHOULD:
//1. CREATE AN ANONMOUS FUNCTION AND STORE IN A VARIABLE
//2. THE FUNCTION SHOULD ACCEPT TWO VALUES:
//THE CURRENT AMOUNT BALANCE
//THE AMOUNT THE USER WANTS TO WITHDRAW
//3. USE CONDITIONAL STATEMENTS TO CHECK THE WITHDRAWAL REQUEST THAT MUST INSUFICIENT FUNDS, WITHDRAWAL SUCCESSFUL AND REMAINING BALANCE
//4. CALL THE FUNCTION AND TEST IT WITH DIFFERENT VALUES.