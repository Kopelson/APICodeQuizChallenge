
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


//Questions stored in an array called questions
let questions = [
    "JavaScript is used to add what to a web page?",
    "What element do you need to add JavaScript to your page?",
    "What attribute do you use inside a <script> tag to link a separate JavaScript file?",
    "What is the assignment operator in JavaScript?",
    "Which is an example of a string expression?",
    "Which is an example of a numeric expression?",
    "Which is an example of a boolean expression?",
    "Which kind of statements allow you to make decisions in your code?",
    "Which kind of statements allow you to execute code many times by looping?",
    "If console.log desplays messages to the console, where does alert display messages?",
    "What is an approximation of what your real code should do?",
    "Which answer is an example of a comparison operator?",
    "Which answer is an example of a logical operator?",
    "What function can you use to generate a random number between 0 and 1?",
    "What function allows you to round down a decimal number to the nearest integer?",
    "What JavaScript function shows a dialog with message and space for the user to enter a value?",
    "What is the keyword to declare a function?",
    "What syntax do you use to store parameters in a function?",
    "What syntax do you use to enclose the body of a function?",
    "What scope is visiable everwhere in your program?",
    "What scope is only visible to the function where they are declared?",
    "What is a good way to organize your code and create reusable chucks of code?",
    "What data structure are for ordered data?",
    "In an array, each set of item has its own what?",
    "What property on an array allows you to see a numer that represents the number of items in the array?",
    "If an item doesn't exist in an array, trying to access it will result in what?",
    "What is commonly used to iterate through arrays?",
    "What operator is used to increase a variable by one?",
    "What operator is used to decrease a variable by one?",
    "What can you use to add a new value to an array?",
    "What is a collection a properties?",
    "When accessing a property, using the name of the variable containing the object, then a period, then the name of the property is called what?",
    "What is the browser's internal representation of your web page?",
    "How can you grab an element from the DOM using its id?",
    "How can you set the value of an element's attribute?",
    "Numbers, strings, booleans, null and undefined are called what?",
    "What means 'no object'?",
    "What is a number that can't be represented in JavaScript?",
    "What function is used to generate time=based ecents after a certain time has passed?",
    "What type of functions are handled before your code is evaluated?",
    "What type of functions are evaluated at runtime with the rest of your code?",
    "What are nameless function expressions called?",
    "A function defined inside another function are called what?"
];
//Answers stored in an array called answers
let answers = [
    "behavior",
    "<script> tag",
    "src",
    "=",
    '"Hello, World"',
    "28",
    "true",
    "if/else",
    "while/for",
    "Users",
    "Pseudocode",
    "<",
    "&&",
    "Math.random",
    "Math.floor",
    "prompt",
    "function",
    "parentheses",
    "curly braces",
    "global",
    "local",
    "functions",
    "arrays",
    "index",
    "length",
    "undefined",
    "for loop",
    "++",
    "--",
    "push",
    "object",
    "dot notation",
    "DOM",
    "document.getElementById()",
    "setAttribute()",
    "primitives",
    "null",
    "NaN",
    "setInterval", 
    "declarations",
    "expressions",
    "anonymous",
    "nested"
];

