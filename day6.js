//Events---are actions that can be carried out by an element to perform a specific task on the web page.

//For event to run, it needs an handler, hence called the function name

//commonly used events are:
//onclick
//onmouseover
//ondrag
//oninput
//oncancheck
//oncanplay

function getUsername() {
  console.log("usrname");
}

function getUsers() {
  console.log("users");
}

getUsers();

function changeUiColor() {
  document.body.style.backgroundColor = "crimson";
}

//DOM--DOCUMENT OBJECT MODEL
//DOM -is a model created for js to identify elements in the HTML Document sitted in the web browser.
//methods used for identifying elements in the dom based on the identity given to the element.

//using method getElementById if the target elements is given an id.

let myHeader = document.getElementById("header");

console.log(myHeader);

//properties for writing text or strings on web page using js are;
//1. innerHTML
//2. innerText
//3. textContent

myHeader.innerHTML = "the farm is 2km away";

//using method getElementByClassName---this give you and HTMLCollection whcih is an issue

//but in place of this, a method querySelelector can be used.

let myHelloBtn = document.getElementsByClassName("hello");
console.log(myHelloBtn);

myHelloBtn.textContent = "Hey";

myHelloBtn = document.querySelector(".hello");
console.log(myHelloBtn);

myHelloBtn.textContent = "Hey";

let listItems = document.querySelectorAll(".list-items");
console.log(listItems);

listItems.forEach((item) => {
  console.log(item);

  item.innerHTML = "items";
});

let paragraph = document.querySelector(".paragraph");
console.log(paragraph);

// function changeText() {
//   paragraph.innerHTML = "I dey gbadun javascript";
//   paragraph.style.color = "green";
//   paragraph.style.fontSize = "2em";
// }

// changeText();

function getInter() {
  setInterval(() => {
    paragraph.innerHTML = "I dey gbadun javascript";
    paragraph.style.color = "green";
    paragraph.style.fontSize = "2em";
  }, 2000);
}


function getSum(){
    let inp1 = document.getElementById('input').value;
    let inp2 = document.getElementById('input2').value;
    let answer = document.getElementById('answer');
    console.log(answer);

    let sum = Number(inp1) + Number(inp2);
    

    answer.innerHTML = `answer is: ${sum}`;


    
}