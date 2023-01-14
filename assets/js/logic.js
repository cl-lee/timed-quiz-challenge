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
let questionsIndex = 0;


// codes for user interaction
// create an unordered list for containing the question choices
let ol = document.createElement("ol");         
choicesEL.appendChild(ol)
let olEL = document.querySelector("ol");

// Event listener for clicking on buttons;
startScreen.addEventListener("click", function(event) {
    if(event.target.matches("button") && startScreen.getAttribute != "hide") {
        // hide start-screen
        startScreen.setAttribute("class", "hide");
        // unhide questions screen
        questionsScreen.setAttribute("class", "");
        // set countdown timer
        timerEL = document.querySelector('#time');
        let timeLeft = 90;    
        // let timeInterval = 
        setInterval(function() {
            // timer starts, subtract from time left
            timeLeft--;
            // if wrong answer, subtract (x) amount of time from timeLeft

            // display the time left
            timerEL.textContent = timeLeft
        }, 1000);
        // renders the first question
        document.querySelector("#question-title").textContent = questions[questionsIndex].question;
        // render the first question's answers
        for (let i = 0; i < questions[questionsIndex].choices.length; i++) {
        choice = questions[questionsIndex].choices[i];
        let button = document.createElement("button");
        button.textContent = choice;
        button.setAttribute("data-index", i);
        ol.appendChild(button);
        }
    }
})

renderQuestions();

// render the next questions and choices    
function renderQuestions() {questionsScreen.addEventListener("click", function(event) {
    if(event.target.matches("button")) {
        questionsIndex++;
        document.querySelector("#question-title").textContent = questions[questionsIndex].question;
        olEL.innerHTML = "";
        feedbackEL.setAttribute("class", "hide")

        for (let i = 0; i < questions[questionsIndex].choices.length; i++) {
            choice = questions[questionsIndex].choices[i];
            let button = document.createElement("button");
            button.textContent = choice;
            button.setAttribute("data-index", i);
            ol.appendChild(button);

            let userAnswer = parseInt(event.target.getAttribute("data-index"));
            feedbackEL.setAttribute("class", "feedback")

            if (userAnswer === questions[questionsIndex].correctAnswer) {
              feedbackEL.innerHTML = "Correct!";
            } else {
              feedbackEL.innerHTML = "Wrong!"
            }

            feedbackTimer();
        }
    }
})}  

// if user selected choice.getAttribute matches questions[questionsIndex].correctAnswer,



//  provide feedback = correct! or incorrect,
//  unhide feedbackEL for 1.5s(?)
//  hide feedbackEL after
// function: render feedback
function feedbackTimer() {
    let feedbackTimeLeft = 1;
    let feedbackTimeInterval = setInterval(function () {
      //subtract from time left
      feedbackTimeLeft--;
  
      //when 0 time left
      if (feedbackTimeLeft === 0) {
        
        // end the interval
        clearInterval(feedbackTimeInterval);
        
        // hide the feedback
        feedbackEL.setAttribute("class", "hide");
  
      }
  
        },700);
  }



//  correct answer is worth 10 points
//  store points in localStorage
//  += points




            

            
            // - [ ] Questions contain buttons for each answer
            // display each choice as a button



    // provide feedback for answers








//   - [ ] If the answer clicked was incorrect then subtract time from the clock
            // if wrong answer, subtract (x) amount of time from timeLeft
            // when timer reaches 0, clear timer
            // clearInterval(timeInterval)

// - [ ] The quiz should end when all questions are answered or the timer reaches 0.

//  - [ ]  When the game ends, it should display their score and give the user the ability to save their initials and their score
            // display end screen
            // endScreen.setAttribute("class", "");

            // localStorage


