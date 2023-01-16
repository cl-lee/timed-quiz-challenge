// questions and answers
let questions = [
    {question: "question 1", choices: ["a1", "b", "c", "d"], correctAnswer: 1},
    {question: "question 2", choices: ["a2", "b", "c", "d"], correctAnswer: 1},
    {question: "question 3", choices: ["a3", "b", "c", "d"], correctAnswer: 1},
    {question: "question 4", choices: ["a4", "b", "c", "d"], correctAnswer: 1},
    {question: "question 5", choices: ["a5", "b", "c", "d"], correctAnswer: 1},
    {question: "question 6", choices: ["a6", "b", "c", "d"], correctAnswer: 1},
    {question: "question 7", choices: ["a7", "b", "c", "d"], correctAnswer: 1},
    {question: "question 8", choices: ["a8", "b", "c", "d"], correctAnswer: 1},
    {question: "question 9", choices: ["a9", "b", "c", "d"], correctAnswer: 1},
    {question: "question 10", choices: ["a10", "b", "c", "d"], correctAnswer: 1},
]

// define variables used in this page
let contentContainer = document.querySelector(".wrapper");
let startScreen = document.querySelector("#start-screen");
let questionsScreen = document.querySelector("#questions");
let endScreen = document.querySelector("#end-screen");
let choicesEL = document.querySelector("#choices");
let feedbackEL = document.querySelector("#feedback");
let initialsEL = document.querySelector("#initials");
let finalScore = document.querySelector("#final-score");
let submitInitials = document.querySelector("#submit");
let questionsIndex = -1;
let timeLeft = 90;

// codes for user interaction
// create an unordered list for containing the question choices
let ol = document.createElement("ol");         
choicesEL.appendChild(ol)
let olEL = document.querySelector("ol");

// Event listener for clicking on buttons;
contentContainer.addEventListener("click", function(event) {
  if(event.target.matches("button")) {
        
  // hide start-screen, unhide questions screen
  startScreen.setAttribute("class", "hide");
  questionsScreen.setAttribute("class", "");
  olEL.innerHTML = "";
  feedbackEL.setAttribute("class", "hide");
    
  // codes for rendering the question sets
  questionsIndex++;
    // renders the first question
  if (questionsIndex < questions.length) {
    document.querySelector("#question-title").textContent = questions[questionsIndex].question;
    // render the first question's answers
    for (let i = 0; i < questions[questionsIndex].choices.length; i++) {
    choice = questions[questionsIndex].choices[i];
    let button = document.createElement("button");
    button.textContent = choice;
    button.setAttribute("data-index", i);
    ol.appendChild(button);
    }

    let userAnswer = parseInt(event.target.getAttribute("data-index"));

    // codes for answer feedback and time penalty
    if (questionsIndex != 0) {
    feedbackEL.setAttribute("class", "feedback");
    }
    
    if(userAnswer === questions[questionsIndex].correctAnswer) {
      feedbackEL.innerHTML = "Correct!";
    } else if (questionsIndex != 0) {
      feedbackEL.innerHTML = "Wrong!"
      timeLeft -= 10;
    }
    feedbackTimer();
   
  } else {
      endQuiz();
    }

  }
})

// if user clicks on start quiz, countdown timer starts
timerEL = document.querySelector('#time');
startScreen.addEventListener("click", function(event) {
  if(event.target.matches("button")) {
    let timerInterval = setInterval(function() {
      // timer starts, subtract from time left
      timeLeft--;
      
      // display the time left
      timerEL.textContent = timeLeft;        

      // stops timer when times up
      if (timeLeft <= 0 || questionsScreen.getAttribute("class") === "hide") {
        clearInterval(timerInterval);
        timerEL.textContent = 0;
        endQuiz();
      }
    }, 1000);
  }
})

// function: render feedback
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
  localStorage.setItem("userInitials",initialsEL);
  window.location.href = "./highscores.html";
})


  // (after 1 second?), go to end screen




//  score = timeleft
//  store points in localStorage
//  += points

//  - [ ]  When the game ends, it should display their score and give the user the ability to save their initials and their score
            // display end screen
            // endScreen.setAttribute("class", "");

            // localStorage

// input actual questions and answers