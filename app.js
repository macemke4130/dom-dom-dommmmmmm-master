// Add Bootstrap CSS Stylesheet with DOM --
const bootstrap = document.createElement("link");
const rel = "stylesheet";
const href = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
const integrity = "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO";
const crossorigin = "anonymous";

bootstrap.rel = rel;
bootstrap.href = href;
bootstrap.integrity = integrity;
bootstrap.crossOrigin = crossorigin;

document.head.appendChild(bootstrap);

// Gives classes to the <body> --
document.body.className = "container";

// Creates <div> for the <button> --
const btnDiv = document.createElement("div");
btnDiv.className = "d-flex justify-content-center"
document.body.appendChild(btnDiv);

// Creates <button> --
const btn = document.createElement("button");
const btnTxt = document.createTextNode("Add Square");
btn.appendChild(btnTxt);
btn.className = "flex-item btn btn-lg btn-info";
btnDiv.appendChild(btn); // Places <button> in btnDiv --

let squareNum = 1;

// Creates <main> for the Squares --
let myMain = document.createElement("main");
myMain.className = "d-flex flex-wrap";
document.body.appendChild(myMain);


btn.addEventListener("click", function () {
    addSquare();
});

function addSquare() {
    let newSquare = document.createElement("div");
    newSquare.className = "mySquare d-flex justify-content-center align-items-center";
    newSquare.id = squareNum;

    myMain.appendChild(newSquare);

    newSquare.addEventListener("mouseover", function () {
        newSquare.textContent = newSquare.id;
    });
    newSquare.addEventListener("mouseout", function () {
        newSquare.textContent = "";
    });
    newSquare.addEventListener("click", function () {
        newSquare.style.background = bgSwap();
    });
    newSquare.addEventListener("dblclick", function () {
        let totalSquares = document.getElementsByClassName("mySquare");
        let lastSquare = totalSquares.length - 1;
        let lastCheck = totalSquares[lastSquare].id;
        console.log(lastCheck);

        let squareid = newSquare.id;
        let toRemove = newSquare;

        oddOrEven(squareid, lastCheck, toRemove);
    });

    squareNum++;
}

function bgSwap() {
    let a = Math.floor(Math.random() * colors.length); // Random number between 0 and 8 --
    return colors[a];
}

let colors = ["red", "blue", "green", "yellow", "pink", "orange", "brown"];

function oddOrEven(squareId, lastCheck, toRemove) {
    let a = squareId % 2;
    if (a == 0) {
        removeNextSquare(squareId, lastCheck, toRemove);
    } else {
        //removePreviousSquare(x);
    }
}

// Clean up these three function pass variables and I think the answer is in here! --
function removeNextSquare(squareId, lastCheck, toRemove) {
    if(squareId == lastCheck){
        alert("This is the last Square. \nCan not remove next.");
    } else {
        toRemove.remove();
    }
}

function removePreviousSquare(x) {
    if (x == 1) {
        alert("This is the first Square. \nCan not remove previous.");
    } else {
        let a = document.getElementById(x);
        a.previousElementSibling.remove();
    }
}

// Add 10 squares for prototyping --
for (let index = 0; index < 10; index++) {
    addSquare();
}