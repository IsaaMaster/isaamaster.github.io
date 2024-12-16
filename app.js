
$(document).ready(function() {


   const navbarHeight = document.querySelector(".navbar").offsetHeight;
   document.body.style.paddingTop = `${navbarHeight}px`;

   document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;

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
      console.log(newTheme);
      body.setAttribute("data-bs-theme", newTheme);
      localStorage.setItem("theme", newTheme); // Save the preference
      updateIcon(newTheme);
    });

    // Update the icon based on the theme
    function updateIcon(theme) {
        if (theme === "dark") {
            darkModeIcon.src = "dark.png"; // Dark mode image
        } else {
            darkModeIcon.src = "light.png"; // Light mode image
        }
    }
  });
   
   const myCarouselElement = document.querySelector('#carouselExampleCaptions')

   const carousel = new bootstrap.Carousel(myCarouselElement, {
   interval: 2000,
   touch: false
   })



    $('#links a').attr('target', '_blank');

    var name = $('#me').animate({opacity: 1}, 700).promise();
    

    $.when(name).done(function() {
      var about1 = $('#about1').animate({opacity: 1}, 200).promise();

      $.when(about1).done(function() {
         $('#about2').animate({opacity: 1},200).promise();

         $('.icon').each(function(index) {
            $(this).delay(500 * index).animate({opacity: 1}, 1200);
         });

         $('#links').animate({opacity: 1}, 200).promise();

      }); 
    }); 


   $('#noteworks').click(function() {
      var modal = $('#noteWorksModal'); 
      modal.modal('show');
   });     

   $('#reversi').click(function() {
      var modal = $('#reversiModal'); 
      modal.modal('show');
   });    
   
   $('#personal').click(function() {
      var modal = $('#personalModal'); 
      modal.modal('show');
   });     

   $('#stocksBot').click(function() {
      var modal = $('#stocksBotModal'); 
      modal.modal('show');
   });     


   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add('show');
         } else {
            entry.target.classList.remove('show');
         }
      });
   }); 

   const hiddenElements = document.querySelectorAll('.hidden');
   hiddenElements.forEach(element => {
      observer.observe(element);
   });



});
