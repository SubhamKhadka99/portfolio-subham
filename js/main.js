// Enhanced Portfolio JavaScript

document.addEventListener("DOMContentLoaded", function () {
  initNavigation();
  initMobileMenu();
  initContactForm();
  populateContent();
  initScrollEffects();
});

// Navigation
function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section, .hero");

  // Smooth scroll
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });

        // Update active link
        navLinks.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");

        // Close mobile menu
        document.getElementById("navMenu").classList.remove("active");
      }
    });
  });

  // Active section on scroll
  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });
}

// Mobile Menu
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    this.classList.toggle("active");
  });
}

// Contact Form
function initContactForm() {
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector("span");
    const originalText = btnText.textContent;

    submitBtn.disabled = true;
    btnText.textContent = "Sending...";
    formStatus.style.display = "none";

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        formStatus.className = "form-status success";
        formStatus.textContent =
          "Message sent successfully! I'll get back to you soon.";
        formStatus.style.display = "block";
        form.reset();
      } else {
        formStatus.className = "form-status error";
        formStatus.textContent = "Something went wrong. Please try again.";
        formStatus.style.display = "block";
      }
    } catch (error) {
      formStatus.className = "form-status error";
      formStatus.textContent = "Network error. Please check your connection.";
      formStatus.style.display = "block";
    } finally {
      submitBtn.disabled = false;
      btnText.textContent = originalText;
    }
  });
}

// Populate Content
function populateContent() {
  populateSkills();
  populateProjects();
}

function populateSkills() {
  const categories = ["frontend", "backend", "tools", "learning"];

  categories.forEach((category) => {
    const container = document.getElementById(`${category}Skills`);
    if (!container) return;

    const skills = portfolioData.skills[category];

    skills.forEach((skill) => {
      const tag = document.createElement("span");
      tag.className = "skill-tag";
      tag.textContent = skill;
      container.appendChild(tag);
    });
  });
}

function populateProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  const projects = portfolioData.projects;

  projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    projectsGrid.appendChild(projectCard);
  });
}

function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";

  const statusClass =
    project.status === "In Development"
      ? "status-development"
      : "status-completed";
  const statusText =
    project.status === "In Development" ? "In Dev" : "Completed";

  const techTags = project.tech
    .map((tech) => `<span class="tech-badge">${tech}</span>`)
    .join("");

  const projectLink = project.link
    ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="margin-top: 1rem;">
            View Project <i class="fas fa-external-link-alt"></i>
        </a>`
    : "";

  card.innerHTML = `
        <div class="project-header">
            <h3>${project.title}</h3>
            <span class="project-status ${statusClass}">${statusText}</span>
        </div>
        <p>${project.description}</p>
        <div class="project-tech">${techTags}</div>
        ${projectLink}
    `;

  return card;
}

// Scroll Effects
function initScrollEffects() {
  // Navbar background on scroll
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(15, 23, 42, 0.95)";
      navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
    } else {
      navbar.style.background = "rgba(15, 23, 42, 0.9)";
      navbar.style.boxShadow = "none";
    }
  });
}

// Typing Effect for Hero 
function typingEffect() {
  const text = "MERN Stack Developer";
  const element = document.querySelector(".typing-text");
  if (!element) return;

  let index = 0;
  element.textContent = "";

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();
}

// Console message
console.log(
  "%c Welcome to my portfolio!",
  "color: #06b6d4; font-size: 20px; font-weight: bold;",
);
console.log(
  "%cBuilt with HTML, CSS & JavaScript",
  "color: #3b82f6; font-size: 14px;",
);
