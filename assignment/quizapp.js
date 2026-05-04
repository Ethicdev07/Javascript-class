let index = 0;
let questions = [
  {
    question: "Who is your javascript instructor?",
    option: ["Teslim", "Ben", "Dammy", "Mike"],
    answer: "Dammy",
    choosen: "",
  },
  {
    question: "Who is the president of Nigeria?",
    option: ["Tinubu", "Ben", "Dammy", "Mike"],
    answer: "Tinubu",
    choosen: "",
  },
  {
    question: "What is a Nonu?",
    option: ["Teslim", "Name of .....", "Dammy", "is an action or doing word"],
    answer: "Name of .....",
    choosen: "",
  },
  {
    question: "Capital of Nigeria?",
    option: ["Lagos", "Kebbi", "Abuja", "Mike"],
    answer: "Abuja",
    choosen: "",
  },
  {
    question: "Capital of Oyo?",
    option: ["Ibadan", "Ben", "Dammy", "Mike"],
    answer: "Ibadan",
    choosen: "",
  },
  {
    question: "What is the capital of Egypt?",
    option: ["Cairo", "Abuja", "Accra", "Pretoria"],
    answer: "Cairo",
    choosen: "",
  },
];


function showQuestion() {
  if (index < 0) index = 0;
  if (index >= questions.length) index = questions.length - 1;

  document.getElementById("oshow").innerHTML = "";
  let questionDisplay = document.getElementById("qshow");
  questionDisplay.innerHTML = questions[index].question;


  document.getElementById("progress").innerHTML =
    `Question ${index + 1} of ${questions.length}`;

  questions[index].option.forEach((el, elIndex) => {
   
    
    document.getElementById("oshow").innerHTML += `<p>
                    <span>${elIndex + 1}.</span>
                    <input  type="radio" name="option" onclick="handleCheck('${el}')" ${el == questions[index].choosen ? "checked" : ""}> ${el}
                    </p>`;
  });
}

function controls(direction) {
  console.log(direction);

  if (direction === "next" && index < questions.length - 1) {
    index++;
  } else if (direction === "prev" && index > 0) {
    index--;
  } else {
    alert("No more question");
  }
  showQuestion();
};

function handleCheck(answer) {
  questions[index].choosen = answer;
};



function mySubmit() {
  let unanswered = questions.some((q) => q.choosen === "");
  if (unanswered) {
    alert("Please answer all questions before submitting.");
    return;
  }

  let score = questions.filter((el) => el.answer === el.choosen).length;
  console.log(score);
  
  document.getElementById("scores").innerHTML =
    `Your score is ${score} / ${questions.length}`;
}

showQuestion();
