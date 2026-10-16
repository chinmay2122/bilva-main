/**
 * Bilva Tech — QR Code Solutions Bento Showcase & Generator Engine
 * Lightweight, high-precision vanilla JS QR rendering & interaction
 */

(function () {
  "use strict";

  // Preset data dictionary
  const PRESETS = {
    url: "https://bilvatech.com",
    vcard: "BEGIN:VCARD\nVERSION:3.0\nN:Bilva Tech;Engineering\nORG:Bilva Tech Business Solutions\nURL:https://bilvatech.com\nEMAIL:contact@bilvatech.com\nEND:VCARD",
    text: "Bilva Tech: Security Engineering for Complex Systems and Industrial IoT."
  };

  const USE_CASE_PAYLOADS = {
    serial: "https://bilvatech.com/verify?sku=BT-8040-SEC&batch=2026-A1&unit=00941",
    catalog: "https://bilvatech.com/specs/embedded-hypervisor-datasheet-2026.pdf",
    vcard: PRESETS.vcard,
    campaign: "https://bilvatech.com/solutions?src=print-touchpoint&campaign=industrial-security-2026"
  };

  // Wait for DOM to load
  function initQRShowcase() {
    const inputField = document.getElementById("qr-input-field");
    const clearBtn = document.getElementById("qr-clear-btn");
    const presetBtns = document.querySelectorAll(".qr-preset-btn");
    const eccSelect = document.getElementById("qr-ecc-select");
    const generateBtn = document.getElementById("qr-generate-btn");
    const downloadBtn = document.getElementById("qr-download-btn");
    const canvas = document.getElementById("qr-canvas");
    const metaText = document.getElementById("qr-meta-text");
    const appItems = document.querySelectorAll(".qr-app-item");
    const revealCards = document.querySelectorAll(".qr-reveal-card");

    if (!canvas) return;

    // Check if qrcode library is loaded
    if (typeof window.qrcode !== "function") {
      console.warn("QR Code generator library not yet loaded. Retrying...");
      setTimeout(initQRShowcase, 100);
      return;
    }

    /**
     * Generate and draw QR Code onto the target canvas
     */
    function generateQR() {
      const rawText = inputField ? inputField.value.trim() : "";
      const text = rawText || PRESETS.url;
      const ecc = eccSelect ? eccSelect.value : "M";

      try {
        // Auto-detect version 0 with chosen Error Correction Level
        const qr = window.qrcode(0, ecc);
        qr.addData(text);
        qr.make();

        const moduleCount = qr.getModuleCount();
        const margin = 2; // Quiet zone modules
        const totalModules = moduleCount + margin * 2;

        // Retina display scaling
        const displaySize = 170;
        const dpr = Math.max(window.devicePixelRatio || 1, 2);
        canvas.width = displaySize * dpr;
        canvas.height = displaySize * dpr;
        canvas.style.width = displaySize + "px";
        canvas.style.height = displaySize + "px";

        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Fill quiet zone / background pure white for optical scanner contrast
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw dark modules
        ctx.fillStyle = "#060709";
        const cellSize = (displaySize * dpr) / totalModules;

        for (let r = 0; r < moduleCount; r++) {
          for (let c = 0; c < moduleCount; c++) {
            if (qr.isDark(r, c)) {
              const x = (c + margin) * cellSize;
              const y = (r + margin) * cellSize;
              ctx.fillRect(Math.floor(x), Math.floor(y), Math.ceil(cellSize), Math.ceil(cellSize));
            }
          }
        }

        // Update technical metadata readout
        if (metaText) {
          const charLen = text.length;
          metaText.textContent = `${moduleCount} × ${moduleCount} Modules • ECC Level ${ecc} • ${charLen} chars`;
        }
      } catch (err) {
        console.error("Error generating QR Code:", err);
        if (metaText) {
          metaText.textContent = "Payload size limit exceeded for ECC level.";
        }
      }
    }

    /**
     * Download High-Resolution 1000x1000 PNG
     */
    function downloadHighResPNG() {
      const rawText = inputField ? inputField.value.trim() : "";
      const text = rawText || PRESETS.url;
      const ecc = eccSelect ? eccSelect.value : "M";

      try {
        const qr = window.qrcode(0, ecc);
        qr.addData(text);
        qr.make();

        const moduleCount = qr.getModuleCount();
        const margin = 4;
        const totalModules = moduleCount + margin * 2;
        const exportSize = 1000;

        const offCanvas = document.createElement("canvas");
        offCanvas.width = exportSize;
        offCanvas.height = exportSize;
        const offCtx = offCanvas.getContext("2d");

        offCtx.fillStyle = "#ffffff";
        offCtx.fillRect(0, 0, exportSize, exportSize);

        offCtx.fillStyle = "#000000";
        const cellSize = exportSize / totalModules;

        for (let r = 0; r < moduleCount; r++) {
          for (let c = 0; c < moduleCount; c++) {
            if (qr.isDark(r, c)) {
              offCtx.fillRect(
                Math.floor((c + margin) * cellSize),
                Math.floor((r + margin) * cellSize),
                Math.ceil(cellSize),
                Math.ceil(cellSize)
              );
            }
          }
        }

        const link = document.createElement("a");
        link.download = `bilvatech-qr-${Date.now()}.png`;
        link.href = offCanvas.toDataURL("image/png");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (e) {
        alert("Failed to export PNG. Please shorten the payload.");
      }
    }

    // Bind Presets
    presetBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        presetBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        const presetKey = btn.getAttribute("data-preset");
        if (PRESETS[presetKey] && inputField) {
          inputField.value = PRESETS[presetKey];
          generateQR();
        }
      });
    });

    // Bind Business Application items to inject realistic sample payloads
    appItems.forEach(function (item) {
      item.addEventListener("click", function () {
        const useKey = item.getAttribute("data-usecase");
        if (USE_CASE_PAYLOADS[useKey] && inputField) {
          inputField.value = USE_CASE_PAYLOADS[useKey];
          // Deactivate presets styling
          presetBtns.forEach(function (b) { b.classList.remove("active"); });
          generateQR();

          // Smooth scroll to workstation if on mobile
          if (window.innerWidth < 992) {
            const workstation = document.getElementById("qr-workstation-card");
            if (workstation) {
              workstation.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        }
      });
    });

    // Event listeners
    if (generateBtn) {
      generateBtn.addEventListener("click", generateQR);
    }

    if (downloadBtn) {
      downloadBtn.addEventListener("click", downloadHighResPNG);
    }

    if (clearBtn && inputField) {
      clearBtn.addEventListener("click", function () {
        inputField.value = "";
        inputField.focus();
        generateQR();
      });
    }

    if (inputField) {
      inputField.addEventListener("input", function () {
        generateQR();
      });
    }

    if (eccSelect) {
      eccSelect.addEventListener("change", generateQR);
    }

    // Scroll reveal observer
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      revealCards.forEach(function (card) {
        revealObserver.observe(card);
      });
    } else {
      revealCards.forEach(function (card) {
        card.classList.add("revealed");
      });
    }

    // Initial render
    generateQR();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initQRShowcase);
  } else {
    initQRShowcase();
  }
})();
