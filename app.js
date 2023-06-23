"use strict";

let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  // rotate out letters of current word
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  
  // reveal and rotate in letters of next word
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);





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




