// Listen for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
    // Get the element to be clicked
    var bars = document.querySelector(".bars");
    var menuT = document.querySelectorAll(".menuT");

    // Attach event listener to toggle class when element is clicked
    bars.addEventListener("click", function () {
        // Toggle the class
        menuT.forEach(function (menu) {
            menu.classList.add("active");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Get the element to be clicked
    var cross = document.querySelector(".fa-x");
    var menuT = document.querySelectorAll(".menuT");

    // Attach event listener to toggle class when element is clicked
    cross.addEventListener("click", function () {
        // Remove the class
        menuT.forEach(function (menu) {
            menu.classList.remove("active");
        });
    });
});