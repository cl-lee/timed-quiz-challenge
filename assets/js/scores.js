let clearHighScore = document.querySelector("#clear");

// saves user initals and highscores into the local storage
let highScores = JSON.parse(localStorage.getItem("highScores"))

let initials = JSON.parse(localStorage.getItem("userInitials"));
let score = JSON.parse(localStorage.getItem("score"));

let highScoreEL = {userInitials: initials, userScore: score};

highScores.push(highScoreEL);

localStorage.setItem("highScores",JSON.stringify(highScores));

// clear high scores
clearHighScore.addEventListener("click", function(event) {
    if(event.target.matches("button")) {
        for (let i = 0; i < highScores.length; i++) {
        highScores.pop();
        }

        localStorage.setItem("highScores",JSON.stringify(highScores));
}
})