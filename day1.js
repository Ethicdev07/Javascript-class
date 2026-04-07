//ways of returning an output in js

// alert('testing...');'

console.log('testing')

//we have two categories of 
//js is single thread
//1. synchronous js
//2. asychronous js

//VARIABLES--are containers for storing information...

let myInfo = 'Toheeb is a chelsea fan.';

console.log(myInfo);

//Naming of variables in programming
//1.Pascal Naming
//2. snake case
//3. kebab case
//4. hungarain case
//5. camel case-- is the best variabme convention in js e.g myAge, userDetails, myScore, userScore...


//Declaration of variables..
//we have 3 ways of declaring variables

//1. using let keyword---that variable can be redeclared and reassigned.

let myScore = 10;
console.log(myScore);

myScore = 20;
console.log(myScore);


//2. using const keyword---const simply means constant. It means you cannot redeclare neither can you reassign a value to such variable.

const userName = 'John Doe';
console.log(userName);

//3. using var keyword

//DATA TYPES
//we have 2 categories

//A. PRIMITIVE DATA TYPES--They are immuatable i.e they cnnot be chnaged

//i. String--are characters/digits wrapped in quotes('', "") or backtick(``)

let userPhoneModel = `Samsung`;
console.log(userPhoneModel);
console.log(typeof userPhoneModel);


//ii. Number -- are float, digit, decimals, etc

let userPhoneYear = 2025;
console.log(userPhoneYear);
console.log(typeof userPhoneYear);

//concatination
let userGadgetDetails = 'my name is ' + userName + '. ' + 'My phone brand is ' + userPhoneModel + ' and it was produced in year ' + userPhoneYear;

console.log(userGadgetDetails);

userGadgetDetails = 'my name is' + ' ' + userName + '.' + ' ' + 'My phone brand is' + ' ' + userPhoneModel + ' ' + 'and it was produced in year' + ' ' + userPhoneYear;
console.log(userGadgetDetails);

//Template Literal--here we make use of backtick(``) and make variables are identified using identifier-${}

userGadgetDetails = `my name is ${userName}. My phone brand is ${userPhoneModel} and it was produced in year ${userPhoneYear}`;

console.log(userGadgetDetails);


//iii. Boolean--returns true or false

let isDark = false;
console.log(isDark);
console.log(typeof isDark);


isDark = true;

let status = isDark ? 'dark' : 'light';
console.log(status);


//iv. Undefined---is when a variable is declared without assigning a value to it.

let myTechSchool;
console.log(myTechSchool);

//v. Null- empty

let isUserCount = null;
console.log(isUserCount);

isUserCount = 40;
console.log(isUserCount);

isUserCount = '';
console.log(isUserCount);

//B. NON-PRIMITIVE DATA TYPES--mutable i.e they can be changed...

//vi. Object---is a key-value pair/ key-pair value.
//an object is denoted with a curly braces {}

let studentDetails = {
    name: 'Johnny Evans',
    age: 90,
    hisHeight: '174cm',
    hisWeight: '70lbs',
    gender: 'male'
};
console.log(studentDetails);
console.log(typeof studentDetails);

//2ways to manipulate and object

//1. using dot notation
console.log(studentDetails.age);
console.log(studentDetails.name);

//2. using bracket notation

console.log(studentDetails['hisHeight']);


//vii. Array -- is a collection of items or values.
//arrays are bigger than object but they are type of an object
//every item inside an array must have numeric identity called index
//are denoted with square bracket []

let studentList = [
    {name: 'Alade Olushola', gender: 'male', relationStatus:'Married', color: ['yellow', 'blue', 'green']},
    {name: 'Owoeye Mosope', gender: 'male', relationStatus: 'situationships', color:['blue', 'gray', 'black']},
    {name: 'Toheeb Osuolale', gender: 'female', relationStatus: 'single', color:['purple', 'orange', 'pink']},
    {name: 'Abdulkadir Abdulrasheed', gender: 'male', relationStatus: 'talking stage', color: ['ash', 'black', 'white']},
    {name: 'William Ojije', gender: 'male', relationStatus: 'engaged',  color: ['red', 'black', 'blue']},
    {name: 'Ayomide Olusina', gender: 'male', relationStatus: 'complicated', color: ['red', 'black', 'white']},
    {name: 'Salami Fahd', gender: 'male', relationStatus: 'engaged',  color: ['green', 'crimson', 'aliceblue']}

];
console.log(studentList);
console.log(typeof studentList);

console.log(studentList[0].name);
console.log(studentList[3].relationStatus);

console.log(studentList[1,3,4,5].color[2]);


















