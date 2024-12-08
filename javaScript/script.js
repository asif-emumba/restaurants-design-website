
// Get the button element
const backToTopBtn = document.getElementById('back-to-top-btn');
// show scroll to top button when user scrolls down 100px from the top of the
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

// menu toggle for small screens
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navs = document.querySelector(".header-navs");

    menuToggle.addEventListener("click", () => {
        navs.classList.toggle("active");
    });
});

// navigate to new page book mark
function scrollToSection(sectionId, targetPage = "") {
    if (targetPage) {
        window.location.href = `${targetPage}#${sectionId}`;
    } else {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
}

// scroll down to the section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}

// form submission for reservation 
// Add event listener for form submission
const form = document.getElementById('booking-form');

form.addEventListener('submit', function (event) {
    // Prevent default submission
    event.preventDefault();

    // Check if the form is valid
    if (form.checkValidity()) {
        Swal.fire({
            title: "Reservation Confirmed!",
            text: "Your table has been successfully booked.",
            icon: "success",
            showClass: {
                popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
            },
            hideClass: {
                popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
            },
            didClose: () => {
                form.submit(); // Submit the form after alert closes
            }
        });
    } else {
        Swal.fire({
            title: "Error!",
            text: "Please fill out the form correctly.",
            icon: "error",
            showClass: {
                popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
            },
            hideClass: {
                popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
            }
        });
    }
});

// 
function openMenuSection(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("main-menu");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabs-buttons");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

