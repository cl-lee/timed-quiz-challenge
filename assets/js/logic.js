// questions and answers
let questions = [
    {question: "question 1", choices: ["a", "b", "c", "d"], correctAnswer: 1},
    {question: "question 2", choices: ["a", "b", "c", "d"], correctAnswer: 0},
    {question: "question 3", choices: ["a", "b", "c", "d"], correctAnswer: 3},
    {question: "question 4", choices: ["a", "b", "c", "d"], correctAnswer: 1},
    {question: "question 5", choices: ["a", "b", "c", "d"], correctAnswer: 2},
    {question: "question 6", choices: ["a", "b", "c", "d"], correctAnswer: 1},
    {question: "question 7", choices: ["a", "b", "c", "d"], correctAnswer: 0},
    {question: "question 8", choices: ["a", "b", "c", "d"], correctAnswer: 2},
    {question: "question 9", choices: ["a", "b", "c", "d"], correctAnswer: 1},
    {question: "question 10", choices: ["a", "b", "c", "d"], correctAnswer: 3},
]

// define elements used in this page
let contentContainer = document.querySelector(".wrapper");
let startScreen = document.querySelector("#start-screen");
let questionsScreen = document.querySelector("#questions");
let endScreen = document.querySelector("#end-screen");
let choicesEL = document.querySelector("#choices");

// temp

// Event listener for clicking on buttons;
startScreen.addEventListener("click", function(event) {

    if(event.target.matches("button") && startScreen.getAttribute != "hide") {
        
        // clear start-screen
        startScreen.setAttribute("class", "hide");
        // render questions screen
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


        // notes to self: let questionsIndex = 0
        document.querySelector("#question-title").textContent = questions[0].question;
        let button = document.createElement("button");
        button.textContent = "next question";
        document.querySelector("#question-title").appendChild(button);

        renderQuestions();
    }
})
        
// render the questions and choices    

function renderQuestions() {questionsScreen.addEventListener("click", function(event) {
    if(event.target.matches("button")) {
        let questionsIndex = 0;
        questionsIndex++;
    document.querySelector("#question-title").textContent = questions[questionsIndex].question;
    let button = document.createElement("button");
    button.textContent = "next question";
    document.querySelector("#question-title").appendChild(button);
    }

    // let ul = document.createElement("ul");         
    // choicesEL.appendChild(ul);
    //     for (let i = 0; i < questions[0].choices.length; j++) {
    //         choice = questions[0].choices[j];
    //         let button = document.createElement("button");
    //         button.textContent = choice;
    //         ul.appendChild(button);
    //     }
    })
}
    
    // render questions
    

    
    // function renderQuestions () {

    // document.querySelector("#question-title").textContent = questions[0].question;
        
    // let ul = document.createElement("ul");
                    
    // choicesEL.appendChild(ul);
        
    //     for (let i = 0; i < questions[0].choices.length; i++) {
            
    //         let choice = questions[0].choices[i];
    //         let button = document.createElement("button");
    //         button.textContent = choice;
    //         ul.appendChild(button);
            
    //     }
        
        // calls function to loop through each question and answers
        // quizStart();
        

    
    // // function to clear the start screen and display the questions
    // function quizStart() {

    //     // display #questions instead of #start-screen
    //     questionsScreen.setAttribute("class", "");

    //     // call function to loop through and render questions and answers
    //     renderQuestions();
    // }

    // // Eventlistener: when answer is clicked, provide feedback for previous question and go to the next question



    // // function to loop through and render the question sets
    // function renderQuestions() {

    //     // insert an ordered list for question choices
    //         let ol = document.createElement("ol");
    //         choices.appendChild(ol);

    //     // When answer is clicked, the next question appears
    //     questionsScreen.addEventListener("click", function(event) {
    //         if(event.target.matches("button")) {
    //             i++;               
    //         }
    //     })

    //     // for loop
    //     for (let i = 0; i < questions.length; i++) {
            
    //             document.querySelector("#question-title").textContent = questions[i].question;

    //         // for loop for rendering the choices 
    //         for (let j = 0; j < questions[i].choices.length; j++) {
                
    //             let choice = questions[i].choices[j];

    //             let li = document.createElement("li");
    //             li.textContent = choice;
                
    //             let button = document.createElement("button");
    //             li.appendChild(button);
                                
    //             ol.appendChild(li);
             
    //         }

    //     }
            


    // }


                     



            
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


