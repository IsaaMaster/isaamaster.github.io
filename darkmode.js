$(document).ready(function() {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;
    const nav = document.getElementById("customNav");
    const linkedin = document.getElementById("linkedin");
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      body.setAttribute("data-bs-theme", savedTheme);
      updateIcon(savedTheme);
    }

    // Toggle dark mode
    toggleButton.addEventListener("click", function () {
      const currentTheme = body.getAttribute("data-bs-theme") || "light";
      const newTheme = currentTheme === "light" ? "dark" : "light";
      body.setAttribute("data-bs-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateIcon(newTheme);
    });

    // Update the icon based on the theme
    function updateIcon(theme) {
        if (theme === "dark") {
            darkModeIcon.src = "light.png";// Dark mode image
            nav.classList.remove("bg-light");
            nav.classList.add("bg-dark");
            toggleButton.classList.add("bg-light");
            toggleButton.classList.remove("bg-dark");

        } else {
            darkModeIcon.src = "dark.png"; // Light mode image
            nav.classList.remove("bg-dark");
            nav.classList.add("bg-light");
            toggleButton.classList.add("bg-dark");
            toggleButton.classList.remove("bg-light");
        }
    }

});
 
