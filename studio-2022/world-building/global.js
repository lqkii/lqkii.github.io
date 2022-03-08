var rangeSlider = document.getElementById("slider");
var lastNum = 0;
var increase = 0;

// check increase/decrease
rangeSlider.oninput = function() {
    if(lastNum < rangeSlider.value) {
        console.log("increasing");
        increase = 1;
        console.log(increase);
    }   else {
            console.log("decreasing");
            increase = 0;
            console.log(increase);
        }
    lastNum = rangeSlider.value;
    console.log("onInput: " + rangeSlider.value);

// numb <-> fantasy love
    
    if(rangeSlider.value == 20 && increase == 1) {
    // console.log("swag2");
    location.href = "/studio-2022/world-building/pages/fantasy-love.html";
    }  

    if(rangeSlider.value == 20 && increase == 0) {
    //   console.log("swag");
      location.href = "../index.html";
    }

// fantasy love <-> over the moon

    if(rangeSlider.value == 40 && increase == 1) {
    // console.log("swag2");
    location.href = "/studio-2022/world-building/pages/over-the-moon.html";
    }  

    if(rangeSlider.value == 40 && increase == 0) {
    //   console.log("swag");
    location.href = "/studio-2022/world-building/pages/fantasy-love.html";
    }
    
}

// if increase/decrease variable is true, and rangeslider.value = __, then execute __

// the faster you swipe, the more numbers it skips, probably do a range of values like +-10?