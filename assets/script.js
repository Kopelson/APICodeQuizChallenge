
///intizlizing quiz settings:
let timer = 75;
let difficulty = 10;
//each difficulty will adjust the amount of seconds each wrong question will be taken away from the timer
const easy = 10;
const moderate = 15;
const hard = 20;

//setting up DOM elements that will need to be changed
let timerEl = document.querySelector("#timer");

function startQuiz() {
    if (sessionStorage.length !== 0){
    let newTimer = sessionStorage.getItem("timer", timer);
    timer = newTimer;
    console.log(newTimer);
    timerEl.textContent = "Timer: " + newTimer;
    };

    timerInterval = setInterval(function() {
        timer--;
        timerEl.textContent = "Timer: " + timer;
        if (timer < 0){
            clearInterval(timerInterval);
        }
    }, 1000);
};

//This updates the quiz settings when the settings is saved:
function settings() {
    timer = document.querySelector("#timerLength").value;
    difficulty = document.querySelector("#difficulty").value;
    if (difficulty === "easy"){
        difficulty = easy;
    } else if (difficulty === "moderate"){
        difficulty = moderate;
    } else if (difficulty === "hard"){
        difficulty = hard;
    } else {
        console.log("Error user did not select a valid difficulty.");
    };
    console.log("New settings: Timer is set to " + timer + " and difficulty is set to " + difficulty);
   sessionStorage.setItem("timer", timer); 
   sessionStorage.setItem("diffculty", difficulty);
   console.log("data has been stored");
};

