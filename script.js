const glow = document.querySelector(".cursor-glow");
const heroMedia = document.querySelector("[data-parallax]");
const heroTitle = document.querySelector(".hero-title");
const projectSection = document.querySelector(".projects");
const projectPanels = [...document.querySelectorAll(".project-panel")];
const skillButtons = [...document.querySelectorAll(".skill-cloud button")];
const skillNote = document.querySelector(".skill-note");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 5, 4) * 70}ms`;
  revealObserver.observe(element);
});

window.addEventListener(
  "mousemove",
  (event) => {
    if (!glow) return;
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
    glow.style.opacity = "1";
  },
  { passive: true }
);

skillButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    skillNote.textContent = button.dataset.note;
  });

  button.addEventListener("focus", () => {
    skillNote.textContent = button.dataset.note;
  });
});

function updateScrollEffects() {
  const scrollY = window.scrollY;
  const heroProgress = Math.min(scrollY / Math.max(window.innerHeight, 1), 1);

  if (heroMedia) {
    heroMedia.style.transform = `translateY(${heroProgress * 46}px) scale(${1.05 + heroProgress * 0.035})`;
  }

  if (heroTitle) {
    heroTitle.style.transform = `scale(${1 - heroProgress * 0.12})`;
    heroTitle.style.opacity = `${1 - heroProgress * 0.5}`;
  }

  if (projectSection && projectPanels.length && window.matchMedia("(min-width: 861px)").matches) {
    const rect = projectSection.getBoundingClientRect();
    const travel = projectSection.offsetHeight - window.innerHeight;
    const progress = Math.min(Math.max(-rect.top / Math.max(travel, 1), 0), 0.999);
    const activeIndex = Math.floor(progress * projectPanels.length);

    projectPanels.forEach((panel, index) => {
      panel.classList.toggle("active", index === activeIndex);
    });
  }
}

window.addEventListener("scroll", updateScrollEffects, { passive: true });
window.addEventListener("resize", updateScrollEffects, { passive: true });
updateScrollEffects();
