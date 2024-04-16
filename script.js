// Listen for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {

    var menuT = document.querySelectorAll(".menuT");

    // Get the element to be clicked
    var bars = document.querySelector(".bars");

    // Attach event listener to toggle class when element is clicked
    bars.addEventListener("click", function () {
        // Toggle the class
        menuT.forEach(function (menu) {
            menu.classList.add("active");
        });
    });



    // Get the element to be clicked
    var cross1 = document.getElementById("cross1");

    // Attach event listener to toggle class when element is clicked
    cross1.addEventListener("click", function () {
        // Remove the class
        menuT.forEach(function (menu) {
            menu.classList.remove("active");
        });
    });

    // Get the element to be clicked
    var cross2 = document.getElementById("cross2");

    // Attach event listener to toggle class when element is clicked
    cross2.addEventListener("click", function () {
        // Remove the class
        menuT.forEach(function (menu) {
            menu.classList.remove("active");
        });
    });
});

