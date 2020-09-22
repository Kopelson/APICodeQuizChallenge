
///intizlizing quiz settings:
let timer = 75;
let difficulty = 10;
let score=0;
//each difficulty will adjust the amount of seconds each wrong question will be taken away from the timer
const easy = 5;
const moderate = 15;
const hard = 20;

//setting up DOM elements that will need to be changed
const timerEl = document.querySelector("#timer");
const questionnaireEl = document.querySelector("#questionnaire");

function startQuiz() {
    //changes quiz settings if applicable
    if (sessionStorage.length !== 0){
    let newTimer = sessionStorage.getItem("timer", timer);
    timer = newTimer;
    console.log(newTimer);
    timerEl.textContent = "Timer: " + newTimer;
    };
    //This Generates a question
    generateQuestion();
    
    timerInterval = setInterval(function() {
        timer--;
        timerEl.textContent = "Timer: " + timer;
        if (timer < 0){
            clearInterval(timerInterval);
        }
    }, 1000);
};

function generateQuestion(){
    //this removes the elements in the jumbotron
    removeAllChildNodes(questionnaireEl);
    
    //These create new elements for the questionnaire
    let newH1 = document.createElement("h1");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");
    let button4 = document.createElement("button");
    let br1 = document.createElement("br");
    let br2 = document.createElement("br");
    let br3 = document.createElement("br");
    let br4 = document.createElement("br");
    let br5 = document.createElement("br");
    let br6 = document.createElement("br");

    //this styles on the new elements
    button1.setAttribute("class", "btn btn-primary m2 w-50");
    button2.setAttribute("class", "btn btn-primary m2 w-50");
    button3.setAttribute("class", "btn btn-primary m2 w-50");
    button4.setAttribute("class", "btn btn-primary m2 w-50");
    
    //This stores the random question
    let question = getQuestion();
    //this stores the correct answer index to the question *note the correct answer to a question is the same index on both arrays
    let answer = questions.indexOf(question);
    //These create text nodes to insert into the new elements
    let newQuestion = document.createTextNode(`${question}`);
    const newCorrectAnswer = document.createTextNode(`${answers[answer]}`);
    let newRandomAnswer1 = document.createTextNode(`${getRandomAnswer()}`);
    let newRandomAnswer2 = document.createTextNode(`${getRandomAnswer()}`);
    let newRandomAnswer3 = document.createTextNode(`${getRandomAnswer()}`);

    console.log(newCorrectAnswer);
    console.log(newRandomAnswer1);
    console.log(newRandomAnswer2);
    console.log(newRandomAnswer3);
   
    //this randomly picks where to put the elements
    let answerArray = [newRandomAnswer1, newRandomAnswer2, newRandomAnswer3, newCorrectAnswer];

    shuffle(answerArray);

    //this appends the text node to the different elements
    newH1.appendChild(newQuestion);
    button1.appendChild(answerArray[0]);
    button2.appendChild(answerArray[1]);
    button3.appendChild(answerArray[2]);
    button4.appendChild(answerArray[3]);

    // console.log(answers.indexOf(button1.innerHTML));
    // console.log(answers.indexOf(button2.innerHTML));
    // console.log(answers.indexOf(button3.innerHTML));
    // console.log(answers.indexOf(button4.innerHTML));
    // console.log(answer);
    //adds id's to correct answer buttons
        if(answers.indexOf(button1.innerHTML) === answer){
            button1.setAttribute("id", "correctAnswer");
        };

        if(answers.indexOf(button2.innerHTML) === answer){
            button2.setAttribute("id", "correctAnswer");
        };

        if(answers.indexOf(button3.innerHTML) === answer){
            button3.setAttribute("id", "correctAnswer");
        };

        if(answers.indexOf(button4.innerHTML) === answer){
            button4.setAttribute("id", "correctAnswer");
        };

    //adds an event listener to each button with the answer info
    button1.setAttribute("onclick", "checkAnswer()");
    button2.setAttribute("onclick", "checkAnswer()");
    button3.setAttribute("onclick", "checkAnswer()");
    button4.setAttribute("onclick", "checkAnswer()");


    //this appends the new elements and texts to the DOM Questionnaire
    questionnaireEl.appendChild(newH1);
    questionnaireEl.appendChild(button1);
    questionnaireEl.appendChild(br1);
    questionnaireEl.appendChild(br2);
    questionnaireEl.appendChild(button2);
    questionnaireEl.appendChild(br3);
    questionnaireEl.appendChild(br4);
    questionnaireEl.appendChild(button3);
    questionnaireEl.appendChild(br5);
    questionnaireEl.appendChild(br6);
    questionnaireEl.appendChild(button4);
};

//Checking to see if the seleced answer is correct and then adding points to score or deducting time. Then presenting a new question
function checkAnswer(){
    let x = document.getElementById("correctAnswer");
    console.log(x.innerHTML);
    console.log(this.event.target.innerHTML);
    if(this.event.target.innerHTML === x.innerHTML){
        score++;
        console.log("User answered correctly & the score is increased by 1");
        console.log(score);
        return generateQuestion();
    } else {
        timer = timer - difficulty;
        console.log("User answered incorrectly & the time is decreased by "+ difficulty);
        return generateQuestion();
    };
};

//Tutorial on how to shuffle an array https://javascript.info/task/shuffle#:~:text=Write%20the%20function%20shuffle(array,%2C%202%5D%20%2F%2F%20...
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    };
  };

//Tutorial on how to remove all children elements https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//This handles getting new questions
function getQuestion(){
    let getQuestionIndex = Math.floor(Math.random()*questions.length);
    return questions[getQuestionIndex];
};

//This handles selecting random answers for questions
function getRandomAnswer(){
    let getRandomAnswerIndex = Math.floor(Math.random()*answers.length);
    return answers[getRandomAnswerIndex];
}

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
    "What function is used to generate time based events after a certain time has passed?",
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

