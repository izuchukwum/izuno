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

    bookingMessage.innerHTML =
        "<strong>Booking Submitted Successfully!</strong><br><br>" +
        "Your booking request has been received. " +
        "We will contact you regarding your request.";
});

backToBookingButton.addEventListener("click", function () {
    bookingForm.reset();

    selectedService.textContent =
        "Your selected service will appear here.";

    bookingMessage.textContent = "";

    bookingReview.hidden = true;
    bookingForm.hidden = false;
    bookingPanel.hidden = true;

    servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});