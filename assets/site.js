$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 150px, adds/removes solid class
      if($(this).scrollTop() > 56) {
          $('.custom-navbar').addClass('solid');
      } else {
          $('.custom-navbar').removeClass('solid');
      }
    });
});