const themeButton = document.getElementById("theme-button");
const body = document.body;
const container = document.querySelector(".container");
const themeDependent = document.querySelector(".theme-dependent");

// Function to toggle between light and dark themes
function toggleTheme() {
    body.classList.toggle("dark-theme");
    container.classList.toggle("dark-theme");
    themeDependent.classList.toggle("dark-theme");
}

// Event listener for the theme button
themeButton.addEventListener("click", toggleTheme); 