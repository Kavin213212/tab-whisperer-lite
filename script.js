const quotes = [
  "One tab, one task.",
  "Deep breaths. Begin again.",
  "Don't chase distractions.",
  "You are here. That’s enough.",
  "Small steps are progress."
];

document.addEventListener("DOMContentLoaded", () => {
  const quoteEl = document.getElementById("quote");
  const focusInput = document.getElementById("focusInput");

  // Load random quote
  quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];

  // Load saved focus
  focusInput.value = localStorage.getItem("focusTask") || "";

  // Save focus
  focusInput.addEventListener("input", () => {
    localStorage.setItem("focusTask", focusInput.value);
  });
});
