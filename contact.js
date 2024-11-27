// Form validation
document.getElementById("contactForm").addEventListener("submit", function (event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("All fields are required.");
    event.preventDefault();
  }
});

// display social links
const socialLinks = [
  { name: "Facebook", url: "https://facebook.com" },
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Instagram", url: "https://instagram.com" }
];

const socialDiv = document.getElementById("socialLinks");
socialLinks.forEach(link => {
  const a = document.createElement("a");
  a.href = link.url;
  a.textContent = link.name;
  a.target = "_blank";
  a.className = "btn btn-outline-secondary me-2";
  socialDiv.appendChild(a);
});
