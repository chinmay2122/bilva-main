/**
 * Bilva Tech — About Section Entrance Reveal
 */

export function initAboutSection() {
  const section = document.getElementById("about-bilvatech");
  if (!section) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    section.classList.add("is-visible");
    return;
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("is-visible");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
  } else {
    section.classList.add("is-visible");
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAboutSection);
} else {
  initAboutSection();
}
