// Typing animation effect
const typingElement = document.querySelector('.typing');
const titles = ["Welcome to My Portfolio", " I am Tech Enthusiast", " I am Tech Explorer"];
let charIndex = 0;
let titleIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentTitle = titles[titleIndex];
  const visibleText = isDeleting
    ? currentTitle.slice(0, --charIndex)
    : currentTitle.slice(0, ++charIndex);

  typingElement.textContent = visibleText;

  if (!isDeleting && charIndex === currentTitle.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // Wait before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    setTimeout(typeEffect, 500); // Wait before typing next title
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 120);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();

  // Smooth scrolling for nav links
  document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute("href"));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
