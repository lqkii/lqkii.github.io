var rangeslider = document.getElementById("slider");

rangeslider.oninput = function () {
  console.log(rangeslider.value);
    if(rangeslider.value <= 20) {
      console.log("swag");
      location.href = "../index.html";
    }

    if(rangeslider.value >= 60) {
    console.log("swag2");
    location.href = "/studio-2022/world-building/pages/fantasy-love.html";
    }
};

// if value is above __ then do __, if not do nothing

    // if value was below __, and is now above __, then __
    // if value was above __, and is now below __, then __
    // if value increased/decreased __