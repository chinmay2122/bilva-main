/**
 * Bilva Tech — Animated Testimonials & Engineering Perspectives Component
 * Recreates Framer Marketplace "Testimonial Animated" dual-direction infinite marquee,
 * cursor-reactive glow, focus/hover pause, and accessible fallback.
 */

import {
  testimonialsConfig,
  testimonialsRow1,
  testimonialsRow2,
  factualPerspectivesData,
} from "./testimonials-data.js";

/**
 * Creates HTML string for a single testimonial card
 * @param {Object} item 
 * @param {boolean} isDuplicate
 */
function createCardElement(item, isDuplicate = false) {
  const card = document.createElement("article");
  card.className = "testimonial-card";
  card.setAttribute("tabindex", isDuplicate ? "-1" : "0");
  card.setAttribute("role", isDuplicate ? "presentation" : "article");
  if (isDuplicate) {
    card.setAttribute("aria-hidden", "true");
  } else {
    card.setAttribute("aria-label", `${item.solutionArea} perspective by ${item.author}`);
  }

  // Avatar / Monogram
  const avatarContent = item.avatar
    ? `<img src="${item.avatar}" alt="${item.author}" loading="lazy" width="36" height="36" />`
    : `<span>${item.initials || "BT"}</span>`;

  card.innerHTML = `
    <div class="card-quote-body">
      <blockquote class="card-quote-text">${item.quote}</blockquote>
    </div>
    <div class="card-author-footer">
      <div class="card-avatar-box" aria-hidden="true">
        ${avatarContent}
      </div>
      <div class="card-author-details">
        <h4 class="card-author-name">${item.author}</h4>
        <p class="card-author-title">${item.designation}</p>
        <p class="card-author-org">${item.organization}</p>
      </div>
    </div>
  `;

  // Attach cursor-reactive glow (Framer component highlight behavior)
  if (testimonialsConfig.cursorReactiveGlow) {
    let ticking = false;
    card.addEventListener("pointermove", (e) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
        ticking = false;
      });
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--mouse-x", "-999px");
      card.style.setProperty("--mouse-y", "-999px");
    });
  }

  return card;
}

/**
 * Mounts a marquee row with Group 1 + Group 2 (duplicate) for seamless loop
 */
function mountMarqueeRow(container, items, speedSeconds, isReverse = false) {
  if (!container) return;

  const track = document.createElement("div");
  track.className = "marquee-track";

  // Group 1 (Primary track content)
  const group1 = document.createElement("div");
  group1.className = "marquee-group";
  items.forEach((item) => {
    group1.appendChild(createCardElement(item, false));
  });

  // Group 2 (Duplicate track for seamless gapless loop)
  const group2 = document.createElement("div");
  group2.className = "marquee-group";
  group2.setAttribute("aria-hidden", "true");
  group2.setAttribute("data-duplicate", "true");
  items.forEach((item) => {
    group2.appendChild(createCardElement(item, true));
  });

  track.appendChild(group1);
  track.appendChild(group2);
  container.appendChild(track);

  // Set speed
  container.style.setProperty(isReverse ? "--speed-2" : "--speed-1", `${speedSeconds}s`);

  // Mobile touch support: tap or hold to pause marquee
  let touchTimeout;
  container.addEventListener("touchstart", () => {
    container.classList.add("is-paused");
  }, { passive: true });

  container.addEventListener("touchend", () => {
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      container.classList.remove("is-paused");
    }, 1800);
  }, { passive: true });
}

/**
 * Mounts Factual Engineering Perspectives alternative view
 */
function mountFactualPerspectives(container, items) {
  if (!container) return;
  
  const grid = document.createElement("div");
  grid.className = "factual-grid";

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "factual-card";
    card.innerHTML = `
      <div class="factual-icon" aria-hidden="true">
        <i class="${item.iconClass}"></i>
      </div>
      <div>
        <p class="factual-area">${item.area}</p>
        <h3 class="factual-title">${item.title}</h3>
      </div>
      <p class="factual-body">${item.body}</p>
    `;
    grid.appendChild(card);
  });

  container.appendChild(grid);
}

/**
 * Initializes the entire Testimonials & Perspectives Section
 */
export function initTestimonials() {
  const section = document.getElementById("testimonials");
  if (!section) return;

  const row1Container = document.getElementById("testimonials-row-1");
  const row2Container = document.getElementById("testimonials-row-2");
  const marqueeViewport = document.getElementById("testimonials-marquee-viewport");
  const factualContainer = document.getElementById("factual-perspectives-view");

  // Populate Row 1 (Right to Left)
  if (row1Container) {
    row1Container.innerHTML = "";
    mountMarqueeRow(row1Container, testimonialsRow1, testimonialsConfig.speedRow1, false);
  }

  // Populate Row 2 (Left to Right)
  if (row2Container) {
    row2Container.innerHTML = "";
    mountMarqueeRow(row2Container, testimonialsRow2, testimonialsConfig.speedRow2, true);
  }

  // Populate Factual View
  if (factualContainer) {
    factualContainer.innerHTML = "";
    mountFactualPerspectives(factualContainer, factualPerspectivesData);
  }

  // Mode Toggle (Animated Perspectives vs Factual Engineering)
  const toggleBtns = section.querySelectorAll(".view-toggle-btn");
  const setMode = (mode) => {
    toggleBtns.forEach((btn) => {
      const active = btn.dataset.targetView === mode;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    if (mode === "factual") {
      marqueeViewport?.style.setProperty("display", "none");
      factualContainer?.classList.add("is-active");
    } else {
      marqueeViewport?.style.setProperty("display", "flex");
      factualContainer?.classList.remove("is-active");
    }
  };

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      setMode(btn.dataset.targetView);
    });
  });

  // Apply default mode from config
  const initialMode = section.dataset.mode || testimonialsConfig.defaultMode || "marquee";
  setMode(initialMode);

  // Entrance Reveal Animation
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
      { threshold: 0.12 }
    );
    observer.observe(section);
  } else {
    section.classList.add("is-visible");
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTestimonials);
} else {
  initTestimonials();
}
