let clearHighScore = document.querySelector("#clear");
let highScoresEL = document.querySelector("#highscores");
let highScoresList = JSON.parse(localStorage.getItem("highScores"))

renderHighscores();

// clear highscores
clearHighScore.addEventListener("click", function(event) {
    if(event.target.matches("button")) {
        highScoresList = [];
        localStorage.setItem("highScores",JSON.stringify(highScoresList))
        highScoresEL.innerHTML = "";
    }
})

// render highscores
function renderHighscores() {
    for (let i = 0; i < highScoresList.length; i++) {
    let renderScore = highScoresList[i].userInitials + " - " + highScoresList[i].userScore;
    let li = document.createElement("li");
    li.textContent = renderScore;
    highScoresEL.appendChild(li);
}}
