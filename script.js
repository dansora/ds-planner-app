// Reference to DOM elements
var timeDisplayEl =  $("#currentDay");
var projectDisplayEl = $("#project-display");
var projectFormEl = $("#project-form");

// handle displaying the time
function displayTime() {
    var rightNow = dayjs().format("DD MMM YYYY [at] hh:mm:ss a" );
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

// Booking data structure (replace with actual object/array)
// let bookings = [];

// Function to display existing bookings from localStorage
// function displayBookings() {
//   bookings = JSON.parse(localStorage.getItem("plannerBookings")) || [];
//   for (const booking of bookings) {
//     const cell = document.querySelector(`td[data-time="<span class="math-inline">\{booking\.time\}"\]\[data\-day\="</span>{booking.day}"]`);
//     if (cell) {
//       cell.textContent = booking.description;
//     }
//   }
// }

// Function to handle booking creation
// function handleBookingCreation(event) {
//   const cell = event.target;
//   const time = cell.dataset.time;
//   const day = cell.dataset.day;

  // Display input field for booking details
  // const inputField = document.createElement("textarea");
  // cell.appendChild(inputField);
  // inputField.focus();

  // Capture booking description on submit
  // inputField.addEventListener("blur", () => {
  //   const description = inputField.value;
  //   cell.removeChild(inputField);

    // Update booking data structure
    // bookings.push({ time, day, description });
    // localStorage.setItem("plannerBookings", JSON.stringify(bookings));

    // Update table cell content
    // cell.textContent = description;
//   });
// }

// Function to handle booking deletion
// function handleBookingDelete(event) {
//   const button = event.target;
//   const cell = button.parentElement;
//   const time = cell.dataset.time;
//   const day = cell.dataset.day;

//   // Update booking data structure
//   bookings = bookings.filter(
//     (booking) => booking.time !== time || booking.day !== day
//   );
//   localStorage.setItem("plannerBookings", JSON.stringify(bookings));


$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    let inputValue = $(this).siblings(".description").val();
    let keyValue = $(this).parent().attr("id");
    console.log(inputValue, keyValue);
    localStorage.setItem(keyValue, inputValue);
  });
  console.log($(this));

  $(".time-block").each(function () {
    let hourBlock = parseInt($(this).attr("id").split("-").pop());
    let time = dayjs().hour();

    if (hourBlock < time) {
      $(this).addClass('past');
    }
    else if (hourBlock > time) {
      $(this).addClass('future');
    }
    else {
      $(this).addClass('present');
    }
    

    // code to retrive data from local Storage
    let key = $(this).attr("id");
    $(this).children(".description").val(localStorage.getItem(key));
  });
});