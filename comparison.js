/**
 * Bilva Tech — Comparison Section Component
 * Handles the restrained viewport reveal and staggered row animations
 */

export function initComparisonSection() {
  const section = document.getElementById("why-choose-us");
  if (!section) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    section.classList.add("is-visible");
    return;
  }

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
}

// Auto-initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initComparisonSection);
} else {
  initComparisonSection();
}
