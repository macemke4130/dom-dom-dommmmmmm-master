// Add Bootstrap CSS Stylesheet with DOM --
const bootstrap = document.createElement("link");
const href = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
const integrity = "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO";
const crossorigin = "anonymous";

bootstrap.href = href;
bootstrap.integrity = integrity;
bootstrap.crossOrigin = crossorigin;

document.head.appendChild(bootstrap);

// Gives classes to the <body> --
document.body.className = "d-flex justify-content-start";

// Creates <div> for the <button> --
const btnDiv = document.createElement("div");
document.body.appendChild(btnDiv);

// Creates <button> --
const btn = document.createElement("button");
const btnTxt = document.createTextNode("Add Square");
btn.appendChild(btnTxt);
btn.className = "flex-item";
btnDiv.appendChild(btn);

let squareNum = 1;

// Creates <main> for the Squares --
let myMain = document.createElement("main");
myMain.className = "d-flex justify-content-start";
document.body.appendChild(myMain);

btn.addEventListener("click", function () {
    let newSquare = document.createElement("div");
    newSquare.className = "mySquare";
    newSquare.id = squareNum;

    myMain.appendChild(newSquare);

    newSquare.addEventListener("mouseover", function(){
        newSquare.textContent = newSquare.id;
    });
    newSquare.addEventListener("mouseout", function(){
        newSquare.textContent = "";
    });

    squareNum++;
});