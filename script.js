// ELEMENTS
const slider = document.querySelector(".projects-slider");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const cvBtn = document.querySelector(".btn");

// MOBILE MENU TOGGLE - FIXED
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    mobileMenu.classList.remove("active");
  }
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll("a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// SLIDER BUTTONS RESPONSIVE
if (slider) {
  function slideLeft() {
    const cardWidth = slider.querySelector(".project-card").offsetWidth + 32; // 2rem gap = 32px
    slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
  }

  function slideRight() {
    const cardWidth = slider.querySelector(".project-card").offsetWidth + 32; // 2rem gap = 32px
    slider.scrollBy({ left: cardWidth, behavior: "smooth" });
  }

  // Make functions global for onclick handlers
  window.slideLeft = slideLeft;
  window.slideRight = slideRight;
}

// CV DOWNLOAD BUTTON
if (cvBtn) {
  cvBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "./files/Stephanie-Ibrahim-CV.pdf";
    link.download = "Stephanie_Ibrahim_CV.pdf";
    link.click();
  });
}

// Update typing animation text based on screen size
function updateTypingText() {
  const spans = document.querySelectorAll(".typing-container span");
  const isMobile = window.innerWidth <= 480;

  const textMap = {
    "Frontend Developer": isMobile ? "Frontend Dev" : "Frontend Developer",
    "Backend Developer": isMobile ? "Backend Dev" : "Backend Developer",
    "Full Stack Developer": isMobile
      ? "Full Stack Dev"
      : "Full Stack Developer",
    Writer: "Writer",
  };

  spans.forEach((span) => {
    const originalText =
      span.getAttribute("data-original") || span.getAttribute("data-text");
    if (!span.getAttribute("data-original")) {
      span.setAttribute("data-original", originalText);
    }

    const newText = textMap[originalText] || originalText;
    span.setAttribute("data-text", newText);
    span.textContent = newText;
  });
}

// Update text on page load and window resize
updateTypingText();
window.addEventListener("resize", updateTypingText);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Update active navigation link on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar ul li");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((li) => {
    li.classList.remove("active");
    const link = li.querySelector("a");
    if (link.getAttribute("href") === `#${current}`) {
      li.classList.add("active");
    }
  });
});
