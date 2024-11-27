// Dynamic greeting based on the time of day
document.addEventListener("DOMContentLoaded", () => {
  const greetingElement = document.getElementById("greeting");
  const hours = new Date().getHours();
  let greetingMessage;

  if (hours < 12) {
    greetingMessage = "Good Morning!";
  } else if (hours < 18) {
    greetingMessage = "Good Afternoon!";
  } else {
    greetingMessage = "Good Evening!";
  }

  greetingElement.textContent = greetingMessage;
});
