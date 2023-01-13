// *define elements used in this page
let contentContainer = document.querySelector(".wrapper");
let startScreen = document.querySelector("#start-screen");
let questionsScreen = document.querySelector("#questions");
let endScreen = document.querySelector("#end-screen");

// - [ ]  A start button that when clicked a timer starts and the first question appears.
    
    // Event listener: click on "start quiz" button;
        // 1) timer starts
    
        // declare the timer element: 
        // timerEL = document.getElementByID('time')

        // define time left 
        // let timeLeft = 90;
    
        // timer: countdown function
        // let timeInterval = setInterval(function() {

            // subtract from time left
            // timeLeft--;

            // display the time left
            // timerEL.textContent = timeLeft
            // }, 1000);
        
        // 2) first question appears & render questions

            // clear start-screen
            // startScreen.setAttribute("class", "hide");
            
            // display id: questions instead
            // questions.setAttribute("class", "");

            // function to loop through each question and answers
            
            
            //   - [ ] When answer is clicked, the next question appears
            // if user has clicked on a correct answer, go to the next question
            // addEventListener
            
            // map question to "#question-title" in index.html
            // map choices to "#choices" in index.html
            
            // - [ ] Questions contain buttons for each answer
            // display each choice as a button
            // for loop
            // for (let i = 0; i < questions.length; i++) {
                
                
            // }
            











//   - [ ] If the answer clicked was incorrect then subtract time from the clock
            // if wrong answer, subtract (x) amount of time from timeLeft
            // when timer reaches 0, clear timer
            // clearInterval(timeInterval)

// - [ ] The quiz should end when all questions are answered or the timer reaches 0.

//  - [ ]  When the game ends, it should display their score and give the user the ability to save their initials and their score
            // display end screen
            // endScreen.setAttribute("class", "");

            // localStorage


// questions and answers
let questions = [
    {question: "question 1", choices: ["1.", "2.", "3.", "4."], correctAnswer: 1},
    {question: "question 2", choices: ["2-1.", "2.", "3.", "4."], correctAnswer: 0},
    {question: "question 3", choices: ["3-1.", "2.", "3.", "4."], correctAnswer: 3},
    {question: "question 4", choices: ["4-1.", "2.", "3.", "4."], correctAnswer: 1},
    {question: "question 5", choices: ["5-1.", "2.", "3.", "4."], correctAnswer: 2},
    {question: "question 6", choices: ["6-1.", "2.", "3.", "4."], correctAnswer: 1},
    {question: "question 7", choices: ["7-1.", "2.", "3.", "4."], correctAnswer: 0},
    {question: "question 8", choices: ["8-1.", "2.", "3.", "4."], correctAnswer: 2},
    {question: "question 9", choices: ["9-1.", "2.", "3.", "4."], correctAnswer: 1},
    {question: "question 10", choices: ["10-1.", "2.", "3.", "4."], correctAnswer: 3},
]