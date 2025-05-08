document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logo");
  const container = document.getElementById("easteregg");

  logo.addEventListener("click", function () {
    container.classList.toggle("yellow-background");
  });
});

// Hent elementene
const burgerIcon = document.getElementById('burger-icon');
const headerNav = document.getElementById('headerNav');

// Legg til en event listener for å vise/skjule menyen
burgerIcon.addEventListener('click', () => {
  // Legger til eller fjerner 'show' klassen på navigasjonen
  headerNav.classList.toggle('show');
});

const logo2 = document.getElementById("logo2");
const container2 = document.getElementById("easteregg2");

if (logo2 && container2) {
  logo2.addEventListener("click", function () {
    container2.classList.toggle("yellow-background");
  });
} 

