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

function addSquare(){
    let newSquare = document.createElement("div");
    newSquare.className = "mySquare d-flex justify-content-center align-items-center";
    newSquare.id = squareNum;

    myMain.appendChild(newSquare);

    newSquare.addEventListener("mouseover", function(){
        newSquare.textContent = newSquare.id;
    });
    newSquare.addEventListener("mouseout", function(){
        newSquare.textContent = "";
    });

    squareNum++;
}




// Add 50 squares for prototyping --
for (let index = 0; index < 50; index++) {
    addSquare();
}