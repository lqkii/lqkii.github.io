// If hovered - Change class

let mouseCursor = document.querySelector(".cursor");
let mouseCursor2left = document.querySelector(".cursor-small-left");
let mouseCursor2right = document.querySelector(".cursor-small-right");
let mouseCursor2top = document.querySelector(".cursor-small-top");
let mouseCursor2bot = document.querySelector(".cursor-small-bot");
window.addEventListener("mousemove", cursor);


// Cursor load in & follow mouse position
function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.classList.remove("cursor-load")
    mouseCursor2left.style.top = e.pageY + "px";
    mouseCursor2left.style.left = e.pageX + "px";
    mouseCursor2left.classList.remove("cursor-load")
    mouseCursor2right.style.top = e.pageY + "px";
    mouseCursor2right.style.left = e.pageX + "px";
    mouseCursor2right.classList.remove("cursor-load")
    mouseCursor2top.style.top = e.pageY + "px";
    mouseCursor2top.style.left = e.pageX + "px";
    mouseCursor2top.classList.remove("cursor-load")
    mouseCursor2bot.style.top = e.pageY + "px";
    mouseCursor2bot.style.left = e.pageX + "px";
    mouseCursor2bot.classList.remove("cursor-load")
    
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
    mouseCursor2left.classList.add("cursor-small-hover-left")
    mouseCursor2right.classList.add("cursor-small-hover-right")
    mouseCursor2top.classList.add("cursor-small-hover-top")
    mouseCursor2bot.classList.add("cursor-small-hover-bot")
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
    mouseCursor2left.classList.remove("cursor-small-hover-left")
    mouseCursor2right.classList.remove("cursor-small-hover-right")
    mouseCursor2top.classList.remove("cursor-small-hover-top")
    mouseCursor2bot.classList.remove("cursor-small-hover-bot")
    // console.log("cool2")
}

