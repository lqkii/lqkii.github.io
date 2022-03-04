var thumbNumber = 0

window.onload = function () {
    var slider = document.getElementById("slider");
    slider.addEventListener("input", function () {
        document.body.style.setProperty("--thumbNumber", "'" + this.value + "'");

        console.log(thumbNumber)
    });}