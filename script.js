document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logo");
  const container = document.getElementById("easteregg");

  logo.addEventListener("click", function () {
    container.classList.toggle("yellow-background");
  });
});