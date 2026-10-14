const menuToggle = document.querySelector(".menu-toggle");
const mobileOverlay = document.querySelector(".mobile-overlay");
const mobileMenu = document.querySelector(".mobile-menu");

const setMenuState = (open) => {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  mobileOverlay.hidden = !open;
  document.body.classList.toggle("menu-open", open);

  if (open) {
    requestAnimationFrame(() => mobileMenu.querySelector("a")?.focus());
  } else if (document.activeElement && mobileMenu.contains(document.activeElement)) {
    menuToggle.focus();
  }
};

if (menuToggle && mobileOverlay && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    setMenuState(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  mobileOverlay.addEventListener("click", (event) => {
    if (event.target === mobileOverlay) setMenuState(false);
  });

  mobileMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuState(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenuState(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720 && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenuState(false);
    }
  });
}

const counters = document.querySelectorAll(".count");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const animateCounter = (counter, index) => {
  if (counter.dataset.counted === "true") return;
  counter.dataset.counted = "true";

  const target = Number(counter.dataset.target);
  if (reduceMotion) {
    counter.textContent = String(target);
    return;
  }

  const duration = 900 + index * 80;
  const delay = 480 + index * 90;
  const easeOutCubic = (progress) => 1 - Math.pow(1 - progress, 3);

  window.setTimeout(() => {
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      counter.textContent = String(Math.round(target * easeOutCubic(progress)));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, delay);
};

if (counters.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        counters.forEach(animateCounter);
        observer.disconnect();
      });
    },
    { threshold: 0.25 },
  );

  observer.observe(document.querySelector(".stats"));
} else if (counters.length) {
  counters.forEach(animateCounter);
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    const status = contactForm.querySelector(".form-status");
    if (status) {
      status.classList.remove("error");
      status.classList.add("success");
      status.textContent = "Your request is prepared. Form delivery can be connected to Bilva Tech’s preferred inbox before launch.";
    }
  });
}

const globalFooter = document.querySelector(".site-footer");
if (globalFooter) {
  globalFooter.innerHTML = `
    <div class="footer-top">
      <div class="footer-brand"><a href="index.html" aria-label="Bilva Tech home"><img src="assets/logo.webp" alt="" width="50" height="50"><span><strong>Bilva Tech</strong><small>Business Solutions</small></span></a><p>Security engineered for connected and critical systems.</p></div>
      <div class="footer-nav-group"><div><span>Navigate</span><a href="index.html">Home</a><a href="solutions.html">Solutions</a><a href="about.html">About</a><a href="contact.html">Contact</a></div><div><span>Solutions</span><a href="separation-kernel-hypervisor.html">Separation Kernel</a><a href="iot-solutions.html">IoT Solutions</a><a href="cybersecurity-solutions.html">Cybersecurity</a><a href="information-security-consulting.html">Security Consulting</a></div></div>
      <div class="footer-legal"><span>Information</span><a href="contact.html">Security contact</a><a href="contact.html">Privacy enquiry</a><a href="contact.html">Responsible disclosure</a></div>
    </div>
    <div class="footer-bottom">
      <button class="back-to-top" type="button">Back to top <i class="fa-solid fa-arrow-up" aria-hidden="true"></i></button>
      <form class="footer-signup"><label for="footer-email">Security insights, without the noise.</label><div><input id="footer-email" type="email" autocomplete="email" placeholder="Business email" aria-label="Business email"><button type="submit" aria-label="Subscribe"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button></div><p role="status" aria-live="polite"></p></form>
      <div class="footer-contact"><a href="contact.html">Contact Bilva Tech</a><small>© 2026 Bilva Tech Business Solutions</small></div>
    </div>`;
  globalFooter.querySelector(".back-to-top")?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
  globalFooter.querySelector(".footer-signup")?.addEventListener("submit", (event) => { event.preventDefault(); event.currentTarget.querySelector("p").textContent = "Thank you. Subscription delivery can be connected before launch."; });
}

/* ==================================================
   OUR SOLUTIONS — DISCLOSURE CARDS
   ================================================== */
function initSolutionDisclosureCards() {
  const grid = document.getElementById("solutions-grid");
  if (!grid) return;

  const cards = grid.querySelectorAll(".solution-disclosure-card");
  if (!cards.length) return;

  cards.forEach((card) => {
    const trigger = card.querySelector(".disclosure-trigger");
    if (!trigger) return;

    const toggle = () => {
      const isExpanded = card.classList.contains("is-expanded");
      const nextState = !isExpanded;

      card.classList.toggle("is-expanded", nextState);
      trigger.setAttribute("aria-expanded", String(nextState));
    };

    // Primary click on designated trigger button
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      toggle();
    });

    // Clicking anywhere on the card area (except See More link) also toggles
    card.addEventListener("click", (e) => {
      if (e.target.closest(".disclosure-link")) {
        // Let the link navigate normally
        return;
      }
      toggle();
    });
  });
}

/* ==================================================
   FAQ ACCORDION COMPONENT
   ================================================== */
function initFaqAccordion() {
  const faqSection = document.getElementById("faq");
  if (!faqSection) return;

  const items = faqSection.querySelectorAll(".faq-item");
  if (!items.length) return;

  items.forEach((item) => {
    const trigger = item.querySelector(".faq-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";
      const nextState = !isExpanded;

      trigger.setAttribute("aria-expanded", String(nextState));
      item.classList.toggle("is-open", nextState);
    });
  });
}

function initAllComponents() {
  initSolutionDisclosureCards();
  initFaqAccordion();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAllComponents);
} else {
  initAllComponents();
}

