document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            if (section) {
                window.scrollTo({ top: section.offsetTop - 70, behavior: "smooth" });
            }
        });
    });

    // Contact form submission using AJAX
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(this);
        fetch("send_email.php", {
            method: "POST",
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById("statusMessage").textContent = data;
            this.reset();
        })
        .catch(() => {
            document.getElementById("statusMessage").textContent = "An error occurred. Please try again.";
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let testimonials = document.querySelector(".testimonials-container");
    let scrollAmount = 300;

    document.getElementById("next").addEventListener("click", function () {
        testimonials.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    document.getElementById("prev").addEventListener("click", function () {
        testimonials.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    // Enable touch swipe (for mobile)
    let startX = 0;
    testimonials.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX));
    testimonials.addEventListener("touchmove", (e) => {
        let diff = startX - e.touches[0].clientX;
        testimonials.scrollBy({ left: diff, behavior: "smooth" });
        startX = e.touches[0].clientX;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const hexagons = document.querySelectorAll(".hex");

    function checkScroll() {
        hexagons.forEach(hex => {
            const position = hex.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                hex.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});


window.addEventListener("load", function () {
    let loader = document.getElementById("loading-screen");
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});


document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            let filterValue = this.getAttribute("data-filter");

            projectCards.forEach(card => {
                if (filterValue === "all" || card.classList.contains(filterValue)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
