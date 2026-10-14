import React, { createElement as h } from 'react';
import { createRoot } from 'react-dom/client';
import CurvedInput from './CurvedInput.js';

export function initFooterInput() {
  const container = document.getElementById('footer-curved-input-root');
  if (!container) return;

  const statusEl = document.querySelector('.footer-signup-status');

  const handleBusinessEmailSubmit = (email) => {
    const trimmed = (email || '').trim();
    if (!trimmed) {
      if (statusEl) {
        statusEl.className = 'footer-signup-status is-error';
        statusEl.textContent = 'Please enter your business email address.';
      }
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmed)) {
      if (statusEl) {
        statusEl.className = 'footer-signup-status is-error';
        statusEl.textContent = 'Please enter a valid business email address.';
      }
      return;
    }

    if (statusEl) {
      statusEl.className = 'footer-signup-status is-success';
      statusEl.textContent = 'Thank you. Subscription delivery can be connected before launch.';
    }
  };

  const root = createRoot(container);
  root.render(
    h(CurvedInput, {
      placeholder: 'Business email',
      buttonText: '→',
      theme: 'dark',
      bend: 28,
      height: 64,
      width: '100%',
      cornerRadius: 32,
      borderWidth: 1.5,
      showIcon: false,
      showButton: true,
      backgroundColor: '#0D1018',
      textColor: '#F5F5F5',
      placeholderColor: '#777B85',
      borderColor: '#303541',
      buttonColor: '#FFFFFF',
      buttonTextColor: '#111318',
      onSubmit: handleBusinessEmailSubmit
    })
  );
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFooterInput);
} else {
  initFooterInput();
}
