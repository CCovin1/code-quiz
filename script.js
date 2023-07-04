const timerElement = document.getElementById("timer");
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
  displayQuestion();
}

//function to start quiz 
function displayQuestion(){
  const currentQuizData = quizQuestions[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  optionsElement.innerHTML = "";

  for (let i = 0; i < currentQuizData.options.length; i++) {
    const option = document.createElement("li");
    option.textContent = String.fromCharCode(65 + i) + ". " + currentQuizData.options[i];
    option.addEventListener("click", () => checkAnswer(i));
    optionsElement.appendChild(option);
  }
}

//check answers
function checkAnswer(answerIndex) {
  const currentQuizData = quizQuestions[currentQuestion];
  if (answerIndex === currentQuizData.answer){
    //right answer
    currentQuestion++;
    if (currentQuestion < quizQuestions.length){
      displayQuestion();
    } else {
      endQuiz ();
    }
  } else {
    //wrong answer 
    time -= 10; //lose 10 seconds on timer for a wrong answer 
  }
}

//update time
function updateTimer() {
  time--;
  if (time <= 0) {
    endQuiz ();
  }
  timerElement.innerText = time;
}

//end
function endQuiz() {
  clearInterval(timerInterval);
  questionElement.innerText = "Completed!";
  optionsElement.innerHTML = "";
  initialsInput.style.display = "block";
  submitButton.style.display = "block";
}

//save score and initials
submitButton.addEventListener("click", saveScore);
function saveScore() {
  const initials = initialsInput.value;
  // Save the initials and score to a data structure
  console.log("Initials: ", initials);
  console.log("Score: ", time);
}