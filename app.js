




$(document).ready(function() {

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
