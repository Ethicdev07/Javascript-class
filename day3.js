//Operators--are symbols used in programming to derive some certain output.
//we have different types of operators in js

//1. Arithemetic operators --which are +,-,/,*,%,**
//under this category: we have:

//i. addition operator-- +
let num1 = 20;
let num2 = '20';
let num3 = 30;

let sum = num2 + num3;
console.log(sum);

sum = num1 + num3;
console.log(sum);

//ii. substraction-- -

sum = num2 - num3;
console.log(sum);

//iii. division--- /

sum = num3 / num2;
console.log(sum);

//iv. multiplication --*
sum = num1 * num2;
console.log(sum);

//v.modulus-- %

sum = num3 % num1;
console.log(sum);

//vi. Exponential-- **
sum = num1 ** 2;
console.log(sum);


//2. Assignment operator --- = is used to a assign a value to a variable

let myParagraph;

myParagraph ='Gideon is a mess';

//3. addition and substraction assignment operator-- +=, -=

console.log(sum);
//ECMAscript

sum += num1;
console.log(sum);

sum -= num2;
console.log(sum);


//4. Increment(++) which simply add one(1). We have two types of increment
//i. post increment-- increment after 

let totalApple = 10;
console.log(totalApple);

let incrementedApple = totalApple++;
console.log(incrementedApple);
console.log(totalApple);

let count = 0;
let newCount = count++;
console.log(count);


//ii. pre increment--before increment

let incomingApple = ++totalApple;
console.log(incomingApple);


//5. Comparison operators--they used to compare different set or conditions or values.
//they are ==,===,!=,!==,>,<,>=,<=, !

let color = 'red';
let newColor = 'red';
let updateColor = 'Red'

console.log(color == newColor); //double equals == checks for similar value

console.log(color != newColor);

console.log(color === updateColor);//strict equals checks for both data types and equal values

console.log(color !== updateColor);

let digit1 = '10';
let digit2 = 10;

console.log(digit1 === digit2);

console.log(digit1 > digit2);
console.log(digit1 >= digit2);

console.log(!digit1);

let condition = false;

console.log(!condition);


//6. Logical operator-- they are &&(and), ||(or)
//&&-both sides compared must be true before it can return true
console.log(false && false);
console.log(false && true);
console.log(true && false);
console.log(true && true);

//||--when one of the side is true, both will be rendered as true.

console.log(false || false);
console.log(true || false);
console.log(false || true);
console.log(true || true);

console.log(true || 1);

console.log(true || 1 && 0);

console.log(true || false && false && 1 || false || true && true);
console.log(1 && false || !true && false || true >= 1 && false || true);


//7.Ternary operator-- ? is an operator use to set a linear condition. More like a shorthand way of using a conditional statement.


let age = 18;
let isCitizen = false;

let isOldEnough;

isOldEnough = age <= 20 || isCitizen ? "Yes,you are old enough to vote" : "No, wait till you are old enough.";

console.log(isOldEnough);


//8. Conditional statement--using if(), else if() and else
//when the condition set inside the if block is true, it returns whatever is set inside the block.
//And this is applicable to else if()
//Else is only for false statement,when the if and else if block are not true, js runs else block

let colorWheel = 'Orange';

if(colorWheel === 'orange'){
    console.log(colorWheel);
    
    console.log('i am orange');
}
else{
    console.log(`i am not orange`);
    
}


//9. spread operator-- ... is use to make a shallow copy from a pre-existing object or array into a new object or array

let userObj = {
    name: 'Tokunbo Anjola',
    userAge: 90,
    gender: 'Female',
     address: {
        homeAddress: '123 main street',
        city: 'lagos',
        state: 'Lagos'
     },
     color: ['yello', 'green', 'blue', 'crimson'],
     userFind: 'apple'
    
};

console.log(userObj);

//DATA DESTRUCTURING--

let {name, userage, gender, address, userFind} = userObj;
console.log(userage);
console.log(address);
console.log(userFind);




let newUserObj = [1,2,3,4,5,6,7,8,9, {...userObj}];
console.log(newUserObj);


let newArr = [...newUserObj];
console.log(newArr);

let newObj = {...newArr};
console.log(newObj);



function getUpdatedRoot(){
    window.location.href = './day2.html'
}


//CLASSWORK

//CREATE AN EVEN OR ODD CHECKER
//1. CREATE VARIABLE NUMBER
//2.USE MODULUS % OPERATOR
//3. CHECK IF NUMBER IS EVEN OR ODD


let number = 12;

if(number % 2 == '0'){
    console.log('Even number');
    
}else{
    console.log('Odd number');
    
}


//create a shopping discount checker if the purchase amount is above 5000, apply a 10% discount.

let amount = 5000;
amount = 5500;

if(amount > 5000){
    console.log("apply 10% discount");
    
}
else{
    console.log("No discount");
    
}
//CREATE A VARIABLE CALLED numberCheck.
//check whether the numberCheck is
//1.postive
//2. negative
//3. zero
 
let numberCheck = -0;

if(numberCheck > 0){
    console.log(`number is positive`);
    
}
else if(numberCheck < 0){
    console.log(`number is negative`);
    
}
else{
    console.log(`number is zero`);
    
}


//ASSIGNMENT

//CHECK IF A PERSON CAN ENTER A CLUB:
//1. MUST BE 18+
//2. MUST HAVE AN ID CARD.









