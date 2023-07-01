//question section
const quizQuestions = [
  {
    question: "question 1",
    options: ["A","B","C","D"],
    answer: 3
  },
  {
    question: "question 2",
    options: ["A","B","C","D"],
    answer: 0
  },
  {
    question: "question 3",
    options: ["A","B","C","D"],
    answer: 2
  },
  {
    question: "question 4",
    options: ["A","B","C","D"],
    answer: 3
  },
  {
    question: "question 5",
    options: ["A","B","C","D"],
    answer: 1
  },
];

//variables
let currentQuestion = 0;
let time = 60;
let timeInterval;

//elements
const startButton = document.getElementById("start-button");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-button");
const initialsInput= document.getElementById("initials");

//start quiz
startButton.addEventListener("click",startQuiz);

//make start button work 
function startQuiz (){
  startButton.style.display = "none";
  timerInterval = setInterval(updateTimer, 1000);
  displayQuestion
}

//function to start quiz 
function displayQuestion(){
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  optionsElement.innerHTML = "";
}