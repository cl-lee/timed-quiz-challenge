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

// DEFINE VARIABLES
let startScreen = document.querySelector("#start-screen");
let questionsScreen = document.querySelector("#questions");
let endScreen = document.querySelector("#end-screen");
let choicesEL = document.querySelector("#choices");
let feedbackEL = document.querySelector("#feedback");
let initialsEL = document.querySelector("#initials");
let finalScore = document.querySelector("#final-score");
let submitInitials = document.querySelector("#submit");
let questionsIndex = 0;
let timeLeft = 90;

// CODES FOR USER INTERACTION
// create an unordered list for containing the question choices
let ol = document.createElement("ol");         
choicesEL.appendChild(ol)
let olEL = document.querySelector("ol");

// Event listener for clicking on the "Start Quiz" button
startScreen.addEventListener("click", function(event) {
  if(event.target.matches("button")) {
        
    // hide the start-screen, unhide the questions screen
    startScreen.setAttribute("class", "hide");
    questionsScreen.setAttribute("class", "");
    
    // renders the first question and choices
    renderQuestionSets();
  }
})

// Events when clicked on choices, 
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
timerEL = document.querySelector('#time');
startScreen.addEventListener("click", function(event) {
  if(event.target.matches("button")) {
    let timerInterval = setInterval(function() {
      // timer starts, subtract from time left
      timeLeft--;
      
      // display the time left
      timerEL.textContent = timeLeft;        

      // stops timer when times up or completed all questions
      if (timeLeft <= 0 || questionsScreen.getAttribute("class") === "hide") {
        clearInterval(timerInterval);
        timerEL.textContent = 0;
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

// ends the quiz: hides the questions screen and unhide the end screen
function endQuiz() {
  localStorage.setItem("score",timeLeft);
  questionsScreen.setAttribute("class", "hide");
  endScreen.setAttribute("class", "");
  finalScore.textContent = JSON.parse(localStorage.getItem("score"));
}

// - [ ] The quiz should end when all questions are answered or the timer reaches 0.
  // when user clicks on the final question's answer
    // final question: if questionsIndex > questions.length,
    // hide questions screen and unhide end screen
    // show final score from local storage

    
submitInitials.addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.setItem("userInitials",JSON.stringify(initialsEL.value.trim()));
  window.location.href = "./highscores.html";

  // logs current user initial and scores into the highscores array
  // saves user initals and highscores into the local storage
let highScoresList = JSON.parse(localStorage.getItem("highScores"));

let initials = JSON.parse(localStorage.getItem("userInitials"));
let score = JSON.parse(localStorage.getItem("score"));

let highScoreObject = {userInitials: initials, userScore: score};

highScoresList.push(highScoreObject);

localStorage.setItem("highScores",JSON.stringify(highScoresList));

})



// highScores = [{userInitials1, userScore1}, {userInitials2, userScore2}, ...]
  // (after 1 second?), go to end screen




//  score = timeleft
//  store points in localStorage
//  += points

//  - [ ]  When the game ends, it should display their score and give the user the ability to save their initials and their score
            // display end screen
            // endScreen.setAttribute("class", "");

            // localStorage

// input actual questions and answers