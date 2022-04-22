// let video = document.querySelector(".video")
const homeBg = document.querySelector(".home_bg")

this.document.addEventListener("keydown", space)

function space(e) {
    if(e.keyCode === 32) { 
        console.log("swag");
        // location.href = "/studio-2022/inside-outside/pages/page2.html";
        // video.setAttribute("src", "assets/background.mp4");
        homeBg.classList.add("invisible");
    }}