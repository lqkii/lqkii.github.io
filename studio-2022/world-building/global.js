// When the page scrolls...
window.addEventListener("scroll", function(e) {
 
// What % down is it? 
// https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
// Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

console.log(scrollPercentage)
});