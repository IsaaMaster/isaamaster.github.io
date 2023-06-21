 

$(document).ready(function() {
    $('a').attr('target', '_blank');

    var name = $('#name').animate({opacity: 1}, 1000).promise();
    

    $.when(name).done(function() {
      var about1 = $('#about1').animate({opacity: 1}, 2000).promise();

      $.when(about1).done(function() {
         $('#about2').animate({opacity: 1}, 2000).promise();

         $('.icon').each(function(index) {
            $(this).delay(500 * index).animate({opacity: 1}, 2000);
         });

         $('#links').animate({opacity: 1}, 4000).promise();

      }); 
    }); 

    

    
     
    
    
}); 




