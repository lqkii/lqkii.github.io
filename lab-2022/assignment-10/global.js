// If hovered - Change class

let mouseCursor = document.querySelector(".cursor");
window.addEventListener("mousemove", cursor);


// Cursor load in & follow mouse position
function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.classList.remove("cursor-load")
    
}

// Declaring variables
let hoverText = document.querySelector(".title");
let line = document.querySelector(".line");
let number = document.querySelector(".number");
let test = document.querySelector(".test");
let invert = document.querySelector(".invert")

// Event listeners for hover & mouse leaving functions
hoverText.addEventListener("mouseover", hoverAnim)
hoverText.addEventListener("mouseleave", leaveAnim)

// On hover functions
function hoverAnim() {
    hoverText.classList.add("title-hover")
    line.classList.add("line-hover")
    number.classList.add("number-hover")
    test.classList.add("test-hover")
    mouseCursor.classList.add("cursor-hover")
    invert.classList.add("invert-hover")
    // console.log("cool")
}

// Mouse leaving functions
function leaveAnim() {
    hoverText.classList.remove("title-hover")
    line.classList.remove("line-hover")
    number.classList.remove("number-hover")
    test.classList.remove("test-hover")
    mouseCursor.classList.remove("cursor-hover")
    invert.classList.remove("invert-hover")
    // console.log("cool2")
}

