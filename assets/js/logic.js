// QUESTION AND ANSWERS SETS
let questions = [
    {question: "What does 1 + 1 = ?", choices: ["a. 1", "b. 11", "c. 2", "d. 4"], correctAnswer: 2},
    {question: "What does 2 ÷ 2 = ?", choices: ["a. 2", "b. 1", "c. 0", "d. 4"], correctAnswer: 1},
    {question: "John has 10 crates of 100 apples, how many apples does he have?", choices: ["a. 10", "b. 100", "c. 1000", "d. 90"], correctAnswer: 2},
    {question: "Suella had 10 pens, she gave away 3 pens. How many pens does she have left?", choices: ["a. 7", "b. 1", "c. 10", "d. 3"], correctAnswer: 0},
    {question: "What is 8 ^ 2?", choices: ["a. 16", "b. 10", "c. 6", "d. 64"], correctAnswer: 3},
    {question: "If a = 36, a + b = 70. What is the value of b?", choices: ["a. 34", "b. 36", "c. 2", "d. 106"], correctAnswer: 0},
    {question: "Please select the largest result from the following options.", choices: ["a. 10 ÷ 7", "b. 9 ÷ 3", "c. 8 ÷ 4", "d. 11 ÷ 7"], correctAnswer: 1},
    {question: "What is the approximate value of π?", choices: ["a. 3.14", "b. 4.13", "c. 1.34", "d. 3.41"], correctAnswer: 0},
    {question: "How many milliseconds are there in a second?", choices: ["a. 10", "b. 100", "c. 1000", "d. 10000"], correctAnswer: 2},
    {question: "What is the remainder of 12 ÷ 6?", choices: ["a. 2", "b. 0", "c. 1", "d. 6"], correctAnswer: 1},
]


// CODES FOR USER INTERACTION

// define questions index
let questionsIndex = 0;

// create an ordered list for containing the question choices
let choicesEL = document.querySelector("#choices");
let ol = document.createElement("ol");         
choicesEL.appendChild(ol)
let olEL = document.querySelector("ol");

// Event listener for clicking on the "Start Quiz" button
let startScreen = document.querySelector("#start-screen");
startScreen.addEventListener("click", function(event) {
  if(event.target.matches("button")) {
    
    // hide the start-screen, unhide the questions screen
    startScreen.setAttribute("class", "hide");
    questionsScreen.setAttribute("class", "");
    
    // renders the first question and choices
    renderQuestionSets();
  }
})

// Event listener when clicked on answer choices
let questionsScreen = document.querySelector("#questions");
questionsScreen.addEventListener("click", function(event) {
  event.preventDefault();
  if(event.target.matches("button") && questionsIndex < questions.length-1) {
    
    // clears the previous questions' choices
    olEL.innerHTML = "";
    
    questionsIndex++;
    renderQuestionSets();
    renderFeedback();
    
  } else if (!event.target.matches("button")) { 
    
  } else {
    // end quiz after the last question
    questionsIndex++;
    renderFeedback();
    endQuiz();
  }
})

// Quiz timer
let timeLeft = 90;
timerEL = document.querySelector('#time');
startScreen.addEventListener("click", function(event) {
  if(event.target.matches("button")) {
    let timerInterval = setInterval(function() {
      // timer starts, subtract from time left
      timeLeft--;
      
      // display the time left
      timerEL.textContent = timeLeft;        
      
      // stops timer when times up or completed all questions
      if (timeLeft <= 0 || questionsIndex === questions.length) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000);
  }
})

// function: render question sets
function renderQuestionSets() {
  document.querySelector("#question-title").textContent = questions[questionsIndex].question;
  for (let i = 0; i < questions[questionsIndex].choices.length; i++) {
    choice = questions[questionsIndex].choices[i];
    let button = document.createElement("button");
    button.textContent = choice;
    button.setAttribute("data-index", i);
    ol.appendChild(button);
  }
}

// function: render feedback (and enable penalty)
let feedbackEL = document.querySelector("#feedback");
function renderFeedback() {
  let userAnswer = parseInt(event.target.getAttribute("data-index"));
  
  // shows feedback for the previous question
  if (questionsIndex != 0) {
    feedbackEL.setAttribute("class", "feedback");
  }
  if(userAnswer === questions[questionsIndex-1].correctAnswer) {
    feedbackEL.innerHTML = "Correct!";
  } else if (questionsIndex != 0) {
    feedbackEL.innerHTML = "Wrong!"
    timeLeft -= 10;
  }
  feedbackTimer();
}

// function: limits feedback rendering to one second
function feedbackTimer() {
  let feedbackTimeLeft = 1;
  let feedbackTimeInterval = setInterval(function () {
    //subtract from time left
    feedbackTimeLeft--;
    
    // hides feedback and stop feedback timer after display time is up
    if (feedbackTimeLeft === 0) {
      clearInterval(feedbackTimeInterval);
      feedbackEL.setAttribute("class", "hide");
    }
  },1000);
}

// function: ends the quiz
let finalScore = document.querySelector("#final-score");
let endScreen = document.querySelector("#end-screen");
function endQuiz() {
  finalScore.textContent = timeLeft;
  localStorage.setItem("score",finalScore.value);
  questionsScreen.setAttribute("class", "hide");
  endScreen.setAttribute("class", "");
}

// end-screen events
let initialsEL = document.querySelector("#initials");
let submitInitials = document.querySelector("#submit");
let highScoresList = JSON.parse(localStorage.getItem("highScores")) || [];
submitInitials.addEventListener("click", function(event) {
  event.preventDefault();
  
  // saves user initials and scores to local storage
  localStorage.setItem("userInitials",JSON.stringify(initialsEL.value.trim()));
  let initials = JSON.parse(localStorage.getItem("userInitials"));
  let score = JSON.parse(localStorage.getItem("score"));
  let highScoreObject = {userInitials: initials, userScore: score};
  highScoresList.push(highScoreObject);
  localStorage.setItem("highScores",JSON.stringify(highScoresList));
  
  // redirect to highscores page upon clicking on "submit"
  window.location.href = "./highscores.html";
})