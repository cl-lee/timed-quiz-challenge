

let highScores = JSON.parse(localStorage.getItem("highScores"))

let initials = JSON.parse(localStorage.getItem("userInitials"));
let score = JSON.parse(localStorage.getItem("score"));

let highScoreEL = {userInitials: initials, userScore: score};

highScores.push(highScoreEL);

localStorage.setItem("highScores",JSON.stringify(highScores));

