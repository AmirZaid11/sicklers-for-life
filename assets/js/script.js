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
    const wrapper = document.querySelector(".testimonial-wrapper");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let index = 0;
    const totalTestimonials = document.querySelectorAll(".testimonial").length;
    
    function updateSlide() {
        wrapper.style.transform = `translateX(-${index * 320}px)`;
    }

    nextBtn.addEventListener("click", function () {
        if (index < totalTestimonials - 1) {
            index++;
        } else {
            index = 0; // Loop back to first
        }
        updateSlide();
    });

    prevBtn.addEventListener("click", function () {
        if (index > 0) {
            index--;
        } else {
            index = totalTestimonials - 1; // Loop to last
        }
        updateSlide();
    });

    // Auto-slide every 4 seconds
    setInterval(() => {
        nextBtn.click();
    }, 4000);
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


// Open & Close Chat Window
document.getElementById("chat-button").addEventListener("click", function () {
    let chatWindow = document.getElementById("chat-window");
    // Toggle display (if open, close; if closed, open)
    if (chatWindow.style.display === "block") {
        chatWindow.style.display = "none";
    } else {
        chatWindow.style.display = "block";
    }
});

// Close button inside the chat window
document.getElementById("close-chat").addEventListener("click", function () {
    document.getElementById("chat-window").style.display = "none";
});



// Handle Sending Messages
document.getElementById("send-message").addEventListener("click", function () {
    let userInput = document.getElementById("user-input").value.trim();
    if (userInput !== "") {
        let chatBody = document.getElementById("chat-body");
        
        // Add user message
        let userMessage = document.createElement("p");
        userMessage.classList.add("user-message");
        userMessage.textContent = userInput;
        chatBody.appendChild(userMessage);

        // Add bot response
        let botMessage = document.createElement("p");
        botMessage.classList.add("bot-message");
        botMessage.textContent = getBotResponse(userInput);
        chatBody.appendChild(botMessage);

        // Clear input field
        document.getElementById("user-input").value = "";
        
        // Auto-scroll
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});

// Conversational Bot Responses
function getBotResponse(input) {
    input = input.toLowerCase().trim();

    // Greetings
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
        return "Hey there! 😊 How can I help you today?";
    } 
    
    else if (input.includes("how are you")) {
        return "I'm just a chatbot, but I'm doing great! Thanks for asking. How about you? 😊";
    }

    // Chatbot Identity
    else if (input.includes("who are you") || input.includes("what is your name")) {
        return "I'm your friendly Sicklers For Life chatbot! Here to assist you. 😊";
    } 

    // Donations
    else if (input.includes("donate") || input.includes("contribute")) {
        return "That's amazing! Every contribution makes a difference. You can donate via our 'Upcoming Projects' section. Click here: <a href='#upcoming'>Donate Now</a>";
    } 

    // Volunteering
    else if (input.includes("volunteer") || input.includes("help out")) {
        return "We love volunteers! ❤️ You can join us by reaching out via email: <a href='mailto:eddysimba9@gmail.com'>Contact Us</a>. Let’s make an impact together!";
    } 

    // Projects
    else if (input.includes("projects") || input.includes("ongoing")) {
        return "We have some amazing projects supporting sickle cell warriors. Check them out here: <a href='#projects'>View Projects</a>";
    } 

    // Contact Info
    else if (input.includes("contact") || input.includes("reach you")) {
        return "You can reach us anytime through:<br>📧 Email: <a href='mailto:eddysimba9@gmail.com'>eddysimba9@gmail.com</a><br>📞 Phone: <a href='tel:+254715264486'>+254 715 264 486</a><br>📲 WhatsApp: <a href='https://wa.me/254715264486' target='_blank'>Chat with us</a>";
    } 

    // Events
    else if (input.includes("events") || input.includes("upcoming event")) {
        return "We have exciting events lined up! Stay updated on our <a href='#upcoming'>Upcoming Projects</a> page.";
    } 

    // Support & Awareness
    else if (input.includes("support") || input.includes("awareness")) {
        return "We provide medical aid, awareness campaigns, and counseling for sickle cell warriors. Learn more in our <a href='#about'>About Us</a> section.";
    } 

    // Thank You
    else if (input.includes("thank you") || input.includes("thanks")) {
        return "You're very welcome! 😊 If you ever need help, I'm here for you.";
    } 

    // Farewell
    else if (input.includes("bye") || input.includes("goodbye")) {
        return "Goodbye! 👋 Stay safe and take care!";
    } 

    // Default Response
    else {
        return "Hmm... I’m not sure how to respond to that. But I'm always here to help! Try asking about our <a href='#projects'>projects</a> or <a href='#contact'>how to reach us</a>.";
    }
}


// Scroll Spy to Highlight Active Section
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});


// Back to Top Button
const backToTop = document.getElementById("backToTop");

// Show button when scrolling down
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// Scroll to top smoothly when clicked
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
