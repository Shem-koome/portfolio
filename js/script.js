console.log("Portfolio loaded successfully!");

// ========== MOBILE NAV ==========
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuToggle.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.classList.remove("active");
  });
});

// ========== THEME TOGGLE ==========
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme") || "light";
body.setAttribute("data-theme", savedTheme);

themeToggle.innerHTML =
  savedTheme === "dark"
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';

themeToggle.classList.add(savedTheme === "dark" ? "glow-sun" : "glow-moon");

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  body.setAttribute("data-theme", newTheme);

  themeToggle.classList.add("rotate");

  setTimeout(() => {
    themeToggle.innerHTML =
      newTheme === "dark"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';

    themeToggle.classList.remove("glow-sun", "glow-moon");
    themeToggle.classList.add(newTheme === "dark" ? "glow-sun" : "glow-moon");
    themeToggle.classList.remove("rotate");
  }, 250);

  localStorage.setItem("theme", newTheme);
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
