// *define elements used in this page
// let contentContainer = document.querySelector(".wrapper");
// let startScreen = document.querySelector("#start-screen");
// let questions = document.querySelector("#questions");
// let endScreen = document.querySelector("#end-screen");

// - [ ]  A start button that when clicked a timer starts and the first question appears.
    
    // Event listener: click on "start quiz" button;
        // 1) timer starts
    
        // declare the timer element: 
        // timerEL = document.getElementByID('time')

        // define time left 
        // let timeLeft = 60;
    
        // timer: countdown function
        // let timeInterval = setInterval(function() {

            // subtract from time left
            // timeLeft--;

            // display the time left
            // timerEL.textContent = timeLeft
            // }, 1000);
        
        // 2) first question appears

            // clear start-screen
            // startScreen.setAttribute("class", "hide");
            
            // display id: questions instead
            // questions.setAttribute("class", "");

// - [ ] Questions contain buttons for each answer





//   - [ ] When answer is clicked, the next question appears

//   - [ ] If the answer clicked was incorrect then subtract time from the clock
            // if wrong answer, subtract (x) amount of time from timeLeft
            // when timer reaches 0, clear timer
            // clearInterval(timeInterval)

// - [ ] The quiz should end when all questions are answered or the timer reaches 0.

//  - [ ]  When the game ends, it should display their score and give the user the ability to save their initials and their score
            // display end screen
            // endScreen.setAttribute("class", "");