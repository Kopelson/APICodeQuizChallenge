let tableEl = document.querySelector("#table");
let clearEl = document.querySelector("#clear");

//This renders the Highscores datatable
function renderTable() {
    //Clear table element
    removeAllChildNodes(tableEl);
    //Create new elements
    let row1 = document.createElement("tr");
    let tableHeader1 = document.createElement("th");
    let tableHeader2 = document.createElement("th");
    //Add text to the table header elements
    tableHeader1.textContent ="Initials";
    tableHeader2.textContent= "Score";
    //Add attributes to the table header elements
    tableHeader1.setAttribute("class", "p-2 border border-primary");
    tableHeader2.setAttribute("class", "p-2 border border-primary");
    //Append the table with a row, and table headers.
    tableEl.appendChild(row1);
    tableEl.appendChild(tableHeader1);
    tableEl.appendChild(tableHeader2);
    //Grab local storage and parse the JSON string
    if(localStorage.getItem("userData") !== null){
        let userData= JSON.parse(localStorage.userData);
        //render new table elements for each initials and score
        for (let i = 0; i < userData.length; i++){
            //sets the current index value for initials
            let initial = userData[i].initials;
            //sets the current index value for score
            let score = userData[i].score;
            //creates a table row, a table data for both initials and score
            let tableRow = document.createElement("tr");
            let tableDataInitials = document.createElement("td");
            let tableDataScore = document.createElement("td");
            //adds text and attribute to both elements
            tableDataInitials.textContent = initial;
            tableDataInitials.setAttribute("class", "p-2 border border-primary text-center text-uppercase");
            tableDataScore.textContent = score;
            tableDataScore.setAttribute("class", "p-2 border border-primary text-center text-uppercase");
            //appends the row and then appends the row to the table
            tableRow.appendChild(tableDataInitials);
            tableRow.appendChild(tableDataScore);
            tableEl.appendChild(tableRow);
        };
    };
};

//Adjust Quiz Settings
function settings() {
    const easy = 5;
    const moderate = 10;
    const hard = 15;
    let timer = 75;
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
   localStorage.setItem("timer", timer); 
   localStorage.setItem("difficulty", difficulty);
};

//Tutorial on how to remove all children elements https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

clearEl.addEventListener("click", function() {
    localStorage.removeItem("userData");
    renderTable();
})

renderTable();