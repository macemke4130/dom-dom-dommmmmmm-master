// Build Bootstrap CSS Import --
const bootstrap = document.createElement("link");
const rel = "stylesheet";
const href = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
const integrity = "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO";
const crossorigin = "anonymous";

bootstrap.rel = rel;
bootstrap.href = href;
bootstrap.integrity = integrity;
bootstrap.crossOrigin = crossorigin;

// Add Bootstrap to the <head> --
document.head.appendChild(bootstrap);

// Gives class to the <body> --
document.body.className = "container";

// Creates <div> with classes for the <button> --
const btnDiv = document.createElement("div");
btnDiv.className = "d-flex justify-content-center"
document.body.appendChild(btnDiv);

// Creates <button> --
const btn = document.createElement("button");
const btnTxt = document.createTextNode("Add Square");
btn.appendChild(btnTxt);
btn.className = "btn btn-lg btn-info";
btnDiv.appendChild(btn); // Places <button> in btnDiv --

// Initial State Variable for naming the squares as they populate --
let squareNum = 1;

// Creates <main> for the Squares --
let myMain = document.createElement("main");
myMain.className = "d-flex flex-wrap";
document.body.appendChild(myMain);

// Calls addSquare() on each <button> click --
btn.addEventListener("click", function () {
    addSquare();
});

function addSquare() {
    // Creates newSquare, gives class names, and appends Square to the <main> --
    let newSquare = document.createElement("div");
    newSquare.className = "mySquare d-flex justify-content-center align-items-center";
    newSquare.id = squareNum;
    myMain.appendChild(newSquare);

    // Listener for displaying the Square ID --
    newSquare.addEventListener("mouseover", function () {
        newSquare.textContent = newSquare.id;
    });
    // Listener for removing the displayed ID --
    newSquare.addEventListener("mouseout", function () {
        newSquare.textContent = "";
    });
    // Listener for changing the background color of the Square --
    newSquare.addEventListener("click", function () {
        newSquare.style.background = bgSwap();
    });
    
    // Listener for removing squares --
    newSquare.addEventListener("dblclick", function () {
        // Get all Squares as elements and put into array on each double click event --
        let totalSquares = document.getElementsByClassName("mySquare");
        let lastSquare = totalSquares.length - 1;

        // Puts the ID of the final square in a variable --
        let lastCheck = totalSquares[lastSquare].id;

        // Puts the ID of the first square in a variable --
        let firstCheck = totalSquares[0].id;

        // Puts the ID of the targeted Square in a variable for easier function passing --
        let squareId = newSquare.id;
        //Puts the Square object in a variable for easier function passing --
        let kill = newSquare;

        // Even or Odd check function. 0 is Even and else is odd --
        let a = squareId % 2;
        if (a == 0) {
            removeNextSquare(squareId, lastCheck, kill);
        } else {
            removePreviousSquare(squareId, firstCheck, kill);
        }
    });

    // Increments squareNum for the next addSquare() call --
    squareNum++;
}

function removeNextSquare(squareId, lastCheck, kill) {
    if (squareId == lastCheck) {
        alert("This is the last Square. \nCan not remove next.");
    } else {
        kill.nextElementSibling.remove();
    }
}

function removePreviousSquare(squareId, firstCheck, kill) {
    if (squareId == firstCheck) {
        alert("This is the first Square. \nCan not remove previous.");
    } else {
        kill.previousElementSibling.remove();
    }
}

// Changes the background color of the targeted square --
let colors = ["red", "blue", "green", "yellow", "pink", "orange", "brown"];
function bgSwap() {
    let a = Math.floor(Math.random() * colors.length); // Random number between 0 and 8 --
    return colors[a];
}