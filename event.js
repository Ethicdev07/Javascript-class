//addEventListener --is a prebuilt js method for adding an event to an element in the DOM.
//it is takes 3 parameters : the event, callback function, data type

let audio = new Audio("./audio/Barry_Jhay_-_See_Me_See_God_SMSG__Tunesloaded.com.ng.mp3");

console.log(audio);


let playBtn = document.getElementById('playBtn');
console.log(playBtn);


playBtn.addEventListener('click', ()=>{
    audio.play()
});


let pauseBtn = document.getElementById('pauseBtn');

pauseBtn.addEventListener("click", ()=>{
    audio.pause()
});


let pausePlay = document.getElementById('playPauseBtn');

pausePlay.addEventListener('click', ()=>{
//    audio.paused ? audio.play() : audio.pause()

    if(audio.paused){
        audio.play()
    }
    else{
        audio.pause()
    }
})

let signUpForm = document.getElementById("signUpForm");

console.log(signUpForm);

let userArr = [];

let users;

signUpForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    let username = signUpForm.username.value;
    let email = signUpForm.email.value;

    if(!username || !email){
        alert('fill all fields');
        return;
    }
    

    users = {
        username: signUpForm.username.value,
        email: signUpForm.email.value
    };

    userArr.push(users);
    console.log(userArr);
    

})
