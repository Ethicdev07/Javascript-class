//Functions--is a block of code that perform a specifc task.
//we can write  function by starting with the keyword function or a shorthand way of writing a function, followed by the function name.


//we have different types of functions


//1.Named or regular function--we start with function keyword, followed function name, then parenthesis and curly braces.

function getStarted(){   //anonymous
    console.log(`we are just getting started`);

    getUsername();
    
};

getStarted();//invoking of function

function getUsername(){
  let userName = 'Dolapa';

  if(userName == 'basell'){
    console.log('present');
    
  }else{
    console.log('absent');
    
  }
    
};


//2. Arrow function-- is a shorthand way of writing
// a function by using parenthesis (), fat arrow => and curly braces {}.
const getAllInfo = ()=>{
    console.log('hey');

    getUsername()
    
}
getAllInfo();

const getAllSpecialCharacters = function(){
    console.log('$', "&", "@", "?", '%');
    
}
getAllSpecialCharacters();


//3. callback Function()

//setInterval---it is used to run a callback function after a specific interval

const myInterval = setInterval(()=>{
  getAllSpecialCharacters();
}, 2000);

clearInterval(myInterval)

//setTimeout---it is used to run a callback fimction after a specific time set is reached

setTimeout(()=>{console.log('hello js ninjas');
}, 6000);