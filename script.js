const serviceButtons = document.querySelectorAll(".book-service");

const bookingPanel = document.querySelector("#booking-panel");

const selectedService = document.querySelector("#selected-service");

const bookingForm = document.querySelector("#booking-form");

const bookingMessage = document.querySelector("#booking-message");

const backToBookingButton = document.querySelector("#back-to-booking");

const servicesSection = document.querySelector("#services")

const bookingDateInput = document.querySelector("#booking-date");

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

        const dateparts =bookingDate.split("-");

        const formattedDate =
        dateparts[2] + "/" +
        dateparts[1] + "/" +
        dateparts[0];

    const service = selectedService.textContent
        .replace("Selected service: ", "");

    bookingMessage.textContent =
        "Thank you, " + studentName +
        "! Your " + service +
        " booking request has been prepared for " + formattedDate +
        ". We can contact you at " + studentPhone +
        " regarding your booking at " + studentAddress + ".";
});
backToBookingButton.addEventListener("click", function () {
    bookingForm.reset();

    selectedService.textContent =
        "Your selected service will appear here.";

    bookingMessage.textContent = "";

    bookingPanel.hidden = true;

    servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});



