/**
 * Bilva Tech — Comparison Section Interaction
 * Handles smooth IntersectionObserver reveal and responsive behavior.
 */

export function initComparisonSection() {
  const section = document.getElementById("why-choose-us");
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
  document.addEventListener("DOMContentLoaded", initComparisonSection);
} else {
  initComparisonSection();
}
