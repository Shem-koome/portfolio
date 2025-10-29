document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded successfully!");

  // ========== MOBILE NAV ==========
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
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
  }

  // ========== THEME TOGGLE ==========
  const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Prevent multiple event bindings
if (themeToggle && !themeToggle.dataset.listenerAttached) {
  const savedTheme = localStorage.getItem("theme") || "light";
  body.setAttribute("data-theme", savedTheme);

  // Initial icon + glow
  themeToggle.innerHTML =
    savedTheme === "dark"
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
  themeToggle.classList.add(savedTheme === "dark" ? "glow-sun" : "glow-moon");

  // ✅ Mark listener as attached
  themeToggle.dataset.listenerAttached = "true";

  themeToggle.addEventListener("click", () => {
    // Prevent rapid double clicks
    themeToggle.style.pointerEvents = "none";

    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    body.setAttribute("data-theme", newTheme);

    // 🔥 Log once per actual click
    console.log(`Theme switched to: ${newTheme.toUpperCase()} MODE`);

    themeToggle.classList.add("rotate");

    setTimeout(() => {
      themeToggle.innerHTML =
        newTheme === "dark"
          ? '<i class="fa-solid fa-sun"></i>'
          : '<i class="fa-solid fa-moon"></i>';

      themeToggle.classList.remove("glow-sun", "glow-moon");
      themeToggle.classList.add(newTheme === "dark" ? "glow-sun" : "glow-moon");
      themeToggle.classList.remove("rotate");

      // Re-enable clicking
      themeToggle.style.pointerEvents = "auto";
    }, 300);

    // Save theme
    localStorage.setItem("theme", newTheme);
  });
}


  // ========== SMOOTH SCROLL ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // ========== TYPEWRITER RESTART ==========
  const h2 = document.getElementById("typewriter");
  const lines = ["Full Stack Developer &", "Graphics Designer"];
  let lineIndex = 0;
  let charIndex = 0;
  let typingInterval;

  function typeText() {
    if (charIndex < lines[lineIndex].length) {
      h2.innerHTML =
        "<b>" +
        lines
          .slice(0, lineIndex)
          .map(l => l + "<br>")
          .join("") +
        lines[lineIndex].substring(0, charIndex + 1) +
        "</b>";
      charIndex++;
    } else {
      clearInterval(typingInterval);
      if (lineIndex < lines.length - 1) {
        lineIndex++;
        charIndex = 0;
        setTimeout(startTyping, 500); // pause before next line
      } else {
        setTimeout(restartTyping, 2000); // pause before restart
      }
    }
  }

  function startTyping() {
    typingInterval = setInterval(typeText, 100);
  }

  function restartTyping() {
    lineIndex = 0;
    charIndex = 0;
    h2.innerHTML = "";
    startTyping();
  }

  startTyping();
});
  // ========== JS SCROLL ==========
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item.animate");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));
});

  // ===== FILTER LOGIC =====//
document.addEventListener("DOMContentLoaded", () => {
  // ===== FILTER LOGIC =====
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.filter;
    projectCards.forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});
// ===== MODAL & CAROUSEL LOGIC =====//
document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const modalId = btn.dataset.modal;
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.style.display = "block";

    const images = modal.querySelectorAll(".carousel img");
    let index = 0;
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");

    const interval = setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
    }, 2500); // 2.5s per image

    // Close button
    modal.querySelector(".close").onclick = () => {
      modal.style.display = "none";
      clearInterval(interval);
    };

    // Click outside modal
    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        clearInterval(interval);
      }
    };
  });
});
});
