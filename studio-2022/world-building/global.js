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
    
    if(rangeSlider.value ==20 && increase == 1) {
    // console.log("swag2");
    location.href = "/studio-2022/world-building/pages/fantasy-love.html";
    }  

    if(rangeSlider.value ==20 && increase == 0) {
    //   console.log("swag");
      location.href = "/studio-2022/world-building/pages/index-back.html";
    }

    if(rangeSlider.value ==5 && increase == 0) {
        //   console.log("swag");
          location.href = "../index.html";
    }

// fantasy love <-> sorry

    if(rangeSlider.value ==40 && increase == 1) {
    // console.log("swag2");
    location.href = "/studio-2022/world-building/pages/sorry.html";
    }  

    if(rangeSlider.value ==24 && increase == 0) {
    //   console.log("swag");
    location.href = "/studio-2022/world-building/pages/fantasy-love-back.html";
    }

// sorry <-> over the moon

    if(rangeSlider.value ==60 && increase == 1) {
    // console.log("swag2");
    location.href = "/studio-2022/world-building/pages/over-the-moon.html";
    }  

    if(rangeSlider.value ==44 && increase == 0) {
    //   console.log("swag");
    location.href = "/studio-2022/world-building/pages/sorry-back.html";
    }
    
    // over the moon <-> cheesin

    if(rangeSlider.value ==80 && increase == 1) {
        // console.log("swag2");
        location.href = "/studio-2022/world-building/pages/cheesin.html";
        }  
    
        if(rangeSlider.value ==64 && increase == 0) {
        //   console.log("swag");
        location.href = "/studio-2022/world-building/pages/over-the-moon-back.html";
        }
    
    // cheesin <-> greedy

    if(rangeSlider.value ==98 && increase == 1) {
        // console.log("swag2");
        location.href = "/studio-2022/world-building/pages/greedy.html";
        }  
    
        if(rangeSlider.value ==84 && increase == 0) {
        //   console.log("swag");
        location.href = "/studio-2022/world-building/pages/cheesin-back.html";
        }
}


    


// if increase/decrease variable is true, and rangeslider.value = __, then execute __

// the faster you swipe, the more numbers it skips, probably do a range of values like +-10?

// find a way to troubleshoot not being able to go on to the same page if already on