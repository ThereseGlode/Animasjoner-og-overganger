document.addEventListener("DOMContentLoaded", () => {
  // Logo-klikk: header
  const logo = document.getElementById("logo");
  const container = document.getElementById("easteregg");
  if (logo && container) {
    logo.addEventListener("click", () => {
      container.classList.toggle("yellow-background");
    });
  }

  // Logo-klikk: footer
  const logo2 = document.getElementById("logo2");
  const container2 = document.getElementById("easteregg2");
  if (logo2 && container2) {
    logo2.addEventListener("click", () => {
      container2.classList.toggle("yellow-background");
    });
  }

  // Burger meny
  const burgerIcon = document.getElementById("burger-icon");
  const headerNav = document.getElementById("headerNav");
  if (burgerIcon && headerNav) {
    burgerIcon.addEventListener("click", () => {
      burgerIcon.classList.toggle("active");
      headerNav.classList.toggle("show");
    });
  }
});