// Toggle FAQ answers
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-faq]").forEach(button => {
    button.addEventListener("click", () => {
      const answer = document.getElementById(`faq-${button.getAttribute("data-faq")}`);
      answer.classList.toggle("d-none");
    });
  });
});
