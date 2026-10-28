const serviceButtons = document.querySelectorAll(".book-service");

const bookingPanel = document.querySelector("#booking-panel");

const selectedService = document.querySelector("#selected-service");

const bookingForm = document.querySelector("#booking-form");

const bookingMessage = document.querySelector("#booking-message");

const backToBookingButton = document.querySelector("#back-to-booking");

const servicesSection = document.querySelector("#services")

const bookingDateInput = document.querySelector("#booking-date");

const bookingReview = document.querySelector("#booking-review");

const reviewDetails = document.querySelector("#review-details");

const editBookingButton = document.querySelector("#edit-booking");

const confirmBookingButton = document.querySelector("#confirm-booking");

const newBookingButton = document.querySelector("#new-booking");

function getTodayDate(){
    const today =new Date();

    const year =today.getFullYear();
    const monnth = String(today.getMonth() +1).padStart(2,"0");
    const day =
    String(today.getDate()).padStart(2,"0");

    return year + "-" + monnth + "-" + day;
}

function setMinimiumBookingDate(){
    bookingDateInput.min = getTodayDate();
}
setMinimiumBookingDate();

serviceButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const service = button.dataset.service;

        selectedService.textContent = "Selected service: " + service;

        bookingPanel.hidden = false;
bookingForm.reset();
        bookingMessage.textContent = "";

        bookingPanel.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName =
        document.querySelector("#student-name").value.trim();

    const studentPhone =
        document.querySelector("#student-phone").value.trim();

        
const phonePattern = /^\+?[0-9\s()-]{7,20}$/;

const digitCount = studentPhone.replace(/\D/g, "").length;

if (!phonePattern.test(studentPhone) ||
    digitCount < 7 ||
    digitCount > 15) {
    alert("Please enter a valid phone number, including your country code if needed.");
    return;
}


    const studentAddress =
        document.querySelector("#student-address").value.trim();

    const bookingDate =
        document.querySelector("#booking-date").value;

    const dateParts = bookingDate.split("-");

    const formattedDate =
        dateParts[2] + "/" +
        dateParts[1] + "/" +
        dateParts[0];

    const service = selectedService.textContent
        .replace("Selected service: ", "");

    reviewDetails.innerHTML =
        "<strong>Service:</strong> " + service + "<br>" +
        "<strong>Name:</strong> " + studentName + "<br>" +
        "<strong>Phone:</strong> " + studentPhone + "<br>" +
        "<strong>Address:</strong> " + studentAddress + "<br>" +
        "<strong>Date:</strong> " + formattedDate;

    bookingForm.hidden = true;
    bookingReview.hidden = false;
    bookingMessage.textContent = "";
});


editBookingButton.addEventListener("click", function () {
    bookingReview.hidden = true;
    bookingForm.hidden = false;
});


confirmBookingButton.addEventListener("click", function () {
    bookingReview.hidden = true;

    // Clear the form after confirmation.
    bookingForm.reset();

    // Clear the selected service.
    selectedService.textContent =
        "Your selected service will appear here.";

    bookingMessage.innerHTML =
        "<strong>Booking Submitted Successfully!</strong><br><br>" +
        "Your booking request has been received. " +
        "We will contact you regarding your request.";

    // Show the option to start another booking.
    newBookingButton.hidden = false;
});


newBookingButton.addEventListener("click", function () {
    resetBookingPanel();

    servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    newBookingButton.hidden = true;
});
function resetBookingPanel() {
    bookingForm.reset();

    selectedService.textContent =
        "Your selected service will appear here.";

    bookingMessage.textContent = "";

    bookingReview.hidden = true;
    bookingForm.hidden = false;
    bookingPanel.hidden = true;
}

// Close and reset the booking when a navigation link is clicked
const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        resetBookingPanel();
    });
});

// Keep the existing Return to Booking behavior
backToBookingButton.addEventListener("click", function () {
    resetBookingPanel();

    servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
