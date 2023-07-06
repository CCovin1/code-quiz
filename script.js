const timerElement = document.getElementById("timer");
const resultContainer = document.getElementById("result-container");
const highScoreElement = document.getElementById("highScore");
//question section
const quizQuestions = [
  {
    question: "question 1 answer D",
    options: ["A","B","C","D"],
    answer: 3
  },
  {
    question: "question 2 answer A",
    options: ["A","B","C","D"],
    answer: 0
  },
  {
    question: "question 3 answer C",
    options: ["A","B","C","D"],
    answer: 2
  },
  {
    question: "question 4 answer D",
    options: ["A","B","C","D"],
    answer: 3
  },
  {
    question: "question 5 answer B",
    options: ["A","B","C","D"],
    answer: 1
  },
  {
    question: "question 6 answer A",
    options: ["A","B","C","D"],
    answer: 0
  },
  {
    question: "question 7 answer C",
    options: ["A","B","C","D"],
    answer: 2
  },
  {
    question: "question 8 answer D",
    options: ["A","B","C","D"],
    answer: 3
  },
  {
    question: "question 9 answer B",
    options: ["A","B","C","D"],
    answer: 1
  },
  {
    question: "question 10 answer A",
    options: ["A","B","C","D"],
    answer: 0
  },
];

//variables
let currentQuestion = 0;
let time = 60;
let timeInterval;
let highScore = 0;

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

  const quizResults = [];
  
  //end
  function endQuiz() {
    clearInterval(timerInterval);
    timer.style.display = 'none'
    questionElement.innerText = "Completed!";
  optionsElement.innerHTML = "";
  initialsInput.style.display = "block";
  submitButton.style.display = "block";
  localStorage.setItem("highScore", highScore.toString());
}
  function displayHighScore(){
    const storedHighScore = localStorage.getItem("highScore");
    if (storedHighScore){
      highScore = parseInt(storedHighScore);
    }

    const highScoreElement = document.getElementById("highScore");
    highScoreElement.textcontent = highScore.toString ();
}

//save score and initials 
submitButton.addEventListener("click", saveScore);
function saveScore(){
  const initials = initialsInput.value;
  console.log("initials: ", initials)
  console.log("Score: ",time);
}
  if (time > highScore) {
    highScore = time;
    console.log("New High Score ", highScore);
  highScoreElement.textContent = "High Score: " + highScore.toString();
  }
}
displayHighScore();

// Function to save the score and initials
function saveScore() {
  const initials = initialsInput.value;
  console.log("Initials: ", initials);
  console.log("Score: ", time);

  // Save the score and initials to a data structure (e.g., quizResults array)

  if (time > highScore) {
    highScore = time;
    console.log("New High Score: ", highScore);
    highScoreElement.textContent = "High Score: " + highScore.toString();
    localStorage.setItem("highScore", highScore.toString());
  }
}


// Function to display the high score
function displayHighScore() {
  const storedHighScore = localStorage.getItem("highScore");
  if (storedHighScore) {
    highScore = parseInt(storedHighScore);
  }

  highScoreElement.textContent = "High Score: " + highScore.toString();
}

// endQuiz function
function endQuiz() {
  clearInterval(timerInterval);
  timerElement.style.display = "none";
  questionElement.innerText = "Completed!";
  optionsElement.innerHTML = "";
  initialsInput.style.display = "block";
  submitButton.style.display = "block";
}


// Place the event listener for submitButton outside of the saveScore function
submitButton.addEventListener("click", saveScore);
