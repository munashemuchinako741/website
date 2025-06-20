window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});
// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 20px from the top
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

// Theme toggle logic
const themeToggleBtn = document.getElementById("themeToggleBtn");
const body = document.body;
const themeIcon = themeToggleBtn.querySelector("i");

function setTheme(theme) {
  if (theme === "light") {
    body.classList.add("light-theme");
    body.classList.remove("dark-theme");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    // original theme: remove any theme classes
    body.classList.remove("light-theme");
    body.classList.remove("dark-theme");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
  localStorage.setItem("theme", theme);
}

// Initialize theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "original";
  setTheme(savedTheme);
});

// Toggle theme on button click
themeToggleBtn.addEventListener("click", () => {
  const currentTheme = body.classList.contains("light-theme") ? "light" : "original";
  const newTheme = currentTheme === "light" ? "original" : "light";
  setTheme(newTheme);
});
