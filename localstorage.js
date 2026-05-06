//localstorage--that takes key/value
//JSON-Javascript Object Notation
//json-- is lightweight interchange format that turns raw data into a plain text.


//1. setItem()--is method used to set items inside a localstorage

localStorage.setItem('userOne', 'Femi');

let userTwo = 'Tayo';

localStorage.setItem('user2', userTwo);
localStorage.setItem('userAge', 90);


//Json.stringify()--is a method used to convert raw object date into a sring value so that it can be save/stroe in the localstorage

let userArr = [];



let userObj = {
    name: 'pelumi',
    email: "testdev@dev.com",
    password: '1234566'
};

console.log(userObj);

userArr.push(userObj);
console.log(userArr);

let storedArr = localStorage.setItem('userArr', JSON.stringify(userArr));





//2. getItem()--is a method used retrieve data from localstorage by using the key

let userName = localStorage.getItem('user2');
console.log(userName);

let display = document.getElementById('display');

display.innerHTML = userName;

//To convert back to data type object, we have to make use of json.parse()








let signUpForm = document.getElementById('signUpForm');
console.log(signUpForm);



signUpForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    register()

    
});


function register(){
    let confirmMessage = document.getElementById('confirmmessage')
    let myUser = [];
    let users;

    let name = signUpForm.name.value;
    let email = signUpForm.email.value;
    let password = signUpForm.password.value;
    let confirmPassword = signUpForm.confirmpassword.value;

    if(!name || !email || !password || !confirmPassword){
        alert('Fill all fields');
        return;
    }

    if(confirmPassword !== password){
        confirmMessage.innerHTML = `Password does not match`;
        return;
    }

    confirmMessage.innerHTML = ''

    users = {
        name: signUpForm.name.value,
        email: signUpForm.email.value,
        password: signUpForm.password.value
    };

    myUser.push(users);

    let myStoreUser = localStorage.setItem('myUsers', JSON.stringify(myUser));

    console.log(myStoreUser);
}



//3 localStorage.clear()


//4. localStorage.removeItem()

// localStorage.removeItem('userOne');

//5. localstorage.key()

let mykeys = localStorage.key(1);
console.log(mykeys);
