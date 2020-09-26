//initalizing needed selectors
let tableEl = document.querySelector("#table");
let clearEl = document.querySelector("#clear");
//this renders the high scores data table
function renderTable() {
    //clear table element
    removeAllChildNodes(tableEl);
    //create new elements
    let row1 = document.createElement("tr");
    let tableHeader1 = document.createElement("th");
    let tableHeader2 = document.createElement("th");
    //add text to the table header elements
    tableHeader1.textContent ="Initials";
    tableHeader2.textContent= "Score";
    //add attributes to the table header elements
    tableHeader1.setAttribute("class", "p-2 border border-primary");
    tableHeader2.setAttribute("class", "p-2 border border-primary");
    //append the table with a row, and table headers
    tableEl.appendChild(row1);
    tableEl.appendChild(tableHeader1);
    tableEl.appendChild(tableHeader2);
    //grabs local storage and parse the JSON string
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
//adjust quiz settings
function settings() {
    //initialize variables
    const easy = 5;
    const moderate = 10;
    const hard = 15;
    let timer = 75;
    //grabs elements by ids
    timer = document.querySelector("#timerLength").value;
    difficulty = document.querySelector("#difficulty").value;
    //sets difficulty to user setting
    if (difficulty === "easy"){
        difficulty = easy;
    } else if (difficulty === "moderate"){
        difficulty = moderate;
    } else if (difficulty === "hard"){
        difficulty = hard;
    } else {
        //this should never happen but logs error
        console.log("Error user did not select a valid difficulty.");
    };
    //sets the timer and difficulty settings in local storage
   localStorage.setItem("timer", timer); 
   localStorage.setItem("difficulty", difficulty);
};
//removes all children elements
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};
//adds an event listener to the clear id element and removes userData from local storage, then renders a new high score table
clearEl.addEventListener("click", function() {
    localStorage.removeItem("userData");
    renderTable();
})
//renders new table when page loads
renderTable();