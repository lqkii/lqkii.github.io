let redbulls = document.querySelectorAll(".redbull");
let container = document.querySelector("#container");

redbulls.forEach(function (redbull){
    redbull.style.left = (90 * Math.random()) + "%";
    redbull.style.top = (90 * Math.random()) + "%";
});

container.addEventListener("click", function (event){
    // console.log(event); - checking for click target
    if (event.target.classList.contains("redbull")) {
        event.target.remove();
    }
});