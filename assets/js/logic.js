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

// define elements used in this page
let contentContainer = document.querySelector(".wrapper");
let startScreen = document.querySelector("#start-screen");
let questionsScreen = document.querySelector("#questions");
let endScreen = document.querySelector("#end-screen");

// Start quiz function (activates when the "Start Quiz" button is clicked on)
   
    // declare the timer element: 
    timerEL = document.querySelector('#time');
    // define time left 
    let timeLeft = 91;
    
    // Event listener: click on "start quiz" button;
    startScreen.addEventListener("click", function(event) {
        
        if(event.target.matches("button")) {
        
            // clear start-screen
            startScreen.setAttribute("class", "hide");

            // calls function to loop through each question and answers
            renderQuestions();
            
            // timer: countdown function
            // let timeInterval = 
            
            setInterval(function() {

            // timer starts, subtract from time left
            timeLeft--;

            // if wrong answer, subtract (x) amount of time from timeLeft


            // display the time left
            timerEL.textContent = timeLeft
            }, 1000);

        }

    })
    
    // function to clear the start screen and display the questions
    function quizStart() {

        // display #questions instead of #start-screen
        questions.setAttribute("class", "");

        // call function to loop through and render questions and answers

    }

    // Eventlistener: when answer is clicked, provide feedback for previous question and go to the next question



    // function to loop through and render the question sets
    function renderQuestions() {

        // for loop
        for (let i = 0; i < questions.length; i++) {
            
            document.querySelector("#question-title") = questions[i].question;
            
            // insert an ordered list for each question
            let ol = document.createElement("ol");
            choices.appendChild(ol);

            // for loop for rendering the choices 
            for (let j = 0; j < 3; j++) {
                
                let choice = questions[i].choices[j];

                let li = document.createElement("li");
                li.textContent = choice;
                
                let button = document.createElement("button");
                li.appendChild(button);
                                
                ol.appendChild(li);
             
            }

        }
            


    }


                     
            // When answer is clicked, the next question appears
            // if user has clicked on a correct answer, go to the next question
            // addEventListener
            
            // map question to "#question-title" in index.html
            // map choices to "#choices" in index.html
            
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


