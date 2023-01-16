let clearHighScore = document.querySelector("#clear");
let highScoresEL = document.querySelector("#highscores");


// logs current user initial and scores into the highscores array, and save into local storage
let highScoresList = JSON.parse(localStorage.getItem("highScores")) || [];
let initials = JSON.parse(localStorage.getItem("userInitials"));
let score = JSON.parse(localStorage.getItem("score"));
let highScoreObject = {userInitials: initials, userScore: score};
highScoresList.push(highScoreObject);
localStorage.setItem("highScores",JSON.stringify(highScoresList));

// render highscores
for (let i = 0; i < highScoresList.length; i++) {
let renderScore = highScoresList[i].userInitials + " - " + highScoresList[i].userScore;
let li = document.createElement("li");
li.textContent = renderScore;
highScoresEL.appendChild(li);
}

// clear highscores
clearHighScore.addEventListener("click", function(event) {
    if(event.target.matches("button")) {
        highScoresList = [];
        localStorage.setItem("highScores",JSON.stringify(highScoresList))
        highScoresEL.innerHTML = "";
    }
})
