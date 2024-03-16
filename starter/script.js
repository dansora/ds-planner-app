// reference to DOM elements
var timeDisplayEl =  $("#currentDay");
var projectDisplayEl = $("#project-display");
var projectFormEl = $("#project-form");



// handle displaying the time
function displayTime() {
    var rightNow = dayjs().format("DD MMM YYYY [at]hh:mm:ss a" );
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

