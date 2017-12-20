$(document).ready(function() {
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
      ) {
      // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 85
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          // $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            // $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//navbar shadow on scroll
$(window).scroll(function(){
  if ($(window).scrollTop() >= 10) {
    $('nav').addClass('shadow-header');
  }
  else {
    $('nav').removeClass('shadow-header');
  }
});

//initialise wow js
new WOW().init();
// faq toggle
$('.faq li .question').click(function () {
  $(this).find('.plus-minus-toggle').toggleClass('collapsed');
  $(this).parent().toggleClass('active');
});

//change background color of schedule and faq
$(document).ready(function(){
  $(".navbar-default").css("background-color", "#fff");
});

//parallax
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

//faq boxes
var boxes = $('.box');
  var questions = $('.question')
  boxes.slideToggle();
  $(".question").click(function(){
    $("#box"+$(this).data('box')).slideToggle();
    $(this).toggleClass('open');
    for (ques of questions) {
      if($(ques).data('box')!==$(this).data('box') && $(ques).hasClass('open')){
        $(ques).toggleClass('open');
        $("#box"+$(ques).data('box')).slideToggle();
      }
    }
  });

});

$('.not-active').click(function () {return false;});
