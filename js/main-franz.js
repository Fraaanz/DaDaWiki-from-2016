
$(document).ready(function(){

$(".headerpraesi").click(function () {
      $('body').delay(500).queue(function(next) {  window.location = "http://localhost/index.html"; });
});

$('.list li').click(function() {
    $('.list li').addClass('list-letterspace');
});



$('.alphabet').click(function() {
    $('body').toggleClass('bodymirror');
});

$('.header-title p').click(function() {
    $('.header-title span').addClass('text-header-destroy');
    $('.header-title span').delay(15500).queue(function(next) { $(this).removeClass('text-header-destroy'); next(); });
    $('.dadatext-overlay h1').addClass('dadatext-display-true-full');
    $('.dadatext-overlay h1').delay(6500).queue(function(next) { $(this).removeClass('dadatext-display-true-full'); next(); });
});


$('.footer-content').click(function() {
    $(this).addClass('text-destroy');
});


$('.footer-social li img').mouseover(function() {
    $('body').addClass('bodyinvert');
    $('.dadatext-overlay h1').addClass('dadatext-display-true');
});

$('.footer-social li img').mouseout(function() {
    $('body').removeClass('bodyinvert');
    $('.dadatext-overlay h1').removeClass('dadatext-display-true');

});


$('form.newsletter-form').mouseover(function() {
    $(this).addClass('newsletter-mouseover');
});

$('form.newsletter-form').mouseout(function() {
    $(this).removeClass('newsletter-mouseover');
});



$('.alphabeta').mouseover(function() {
    $('.poem').addClass('alphabeta-action');
});

$('.alphabeta').mouseout(function() {
    $('.poem').removeClass('alphabeta-action');
});


$('.alphabetb').mouseover(function() {
    $('.poem').addClass('alphabetb-action');
});

$('.alphabetb').mouseout(function() {
    $('.poem').removeClass('alphabetb-action');
});


$('.alphabetc').mouseover(function() {
    $('.poem').addClass('alphabetc-action');
});

$('.alphabetc').mouseout(function() {
    $('.poem').removeClass('alphabetc-action');
});


$('.alphabetd').mouseover(function() {
    $('.poem').addClass('alphabetd-action');
});

$('.alphabetd').mouseout(function() {
    $('.poem').removeClass('alphabetd-action');
});


$('.alphabete').mouseover(function() {
    $('.poem').addClass('alphabete-action');
});

$('.alphabete').mouseout(function() {
    $('.poem').removeClass('alphabete-action');
});


$('.alphabetf').mouseover(function() {
    $('.poem').addClass('alphabetf-action');
});

$('.alphabetf').mouseout(function() {
    $('.poem').removeClass('alphabetf-action');
});


$('.alphabetg').mouseover(function() {
    $('.poem').addClass('alphabetg-action');
});

$('.alphabetg').mouseout(function() {
    $('.poem').removeClass('alphabetg-action');
});


$('.alphabeth').mouseover(function() {
    $('.poem').addClass('alphabeth-action');
});

$('.alphabeth').mouseout(function() {
    $('.poem').removeClass('alphabeth-action');
});


$('.alphabeti').mouseover(function() {
    $('.poem').addClass('alphabeti-action');
});

$('.alphabeti').mouseout(function() {
    $('.poem').removeClass('alphabeti-action');
});


$('.alphabetj').mouseover(function() {
    $('.poem').addClass('alphabetj-action');
});

$('.alphabetj').mouseout(function() {
    $('.poem').removeClass('alphabetj-action');
});


$('.alphabetk').mouseover(function() {
    $('.poem').addClass('alphabetk-action');
});

$('.alphabetk').mouseout(function() {
    $('.poem').removeClass('alphabetk-action');
});


$('.alphabetl').mouseover(function() {
    $('.poem').addClass('alphabetl-action');
});

$('.alphabetl').mouseout(function() {
    $('.poem').removeClass('alphabetl-action');
});


setInterval(function() {

    $('#synth-pad').delay(1000).queue(function(next) {
         $(this).addClass('fullsynth');
    next(); });

    $('#synth-pad').delay(500).queue(function(next) {
         $(this).removeClass('fullsynth');
    next(); });

}, 7500);

$('.settingorderoptions').mouseover(function() {
    $('li, h2, h1').delay(0).queue(function(next) { $(this).addClass('jsdestroy6'); next(); });
    $('p').delay(0).queue(function(next) { $(this).addClass('jsdestroy6'); next(); });

});

$('.settingorderoptions').mouseout(function() {
    $('li').delay(0).queue(function(next) { $(this).removeClass('jsdestroy6'); next(); });
    $('li, h2, h1').delay(2500).queue(function(next) { $(this).removeClass('jsdestroy6'); next(); });
    $('p').delay(0).queue(function(next) { $(this).removeClass('jsdestroy6'); next(); });

});

$('.neuertextNewsletter').mouseover(function() {
  
  $('li').delay(10).queue(function(next) { $(this).toggleClass('jsdestroy4'); next(); });

  $('h1').delay(10).queue(function(next) { $(this).toggleClass('jsdestroy7'); next(); });

  $('form').delay(1000).queue(function(next) { $(this).toggleClass('jsdestroy2'); next(); });

  $('li').delay(5000).queue(function(next) { $(this).removeClass('jsdestroy4'); next(); });

  $('form').delay(5000).queue(function(next) { $(this).removeClass('jsdestroy2'); next(); });

  $('h1').delay(5000).queue(function(next) { $(this).removeClass('jsdestroy7'); next(); });

});


$('.neuertextEN').click(function() {
  $('p').text(" 💩 "); 

  $('body').addClass('jsdestroy11');

  $('p, h1, h2, a').delay(1000).queue(function(next) { $(this).addClass('jsdestroy'); next(); });

  $('li, form, video').delay(1000).queue(function(next) { $(this).addClass('jsdestroy2'); next(); });

  $('.container-fluid').delay(4000).fadeOut(1500);

  $('.container-fluid').delay(1500).queue(function(next) { location.reload(); next(); });
});

$('.neuertextDE, .ok').click(function() {
  $('body').addClass('jsdestroy3');

  $('p').text("DADA DADAI 🐙 ERROR DARROR DADI E R R O R 🐙 DADADI ERRDI DA DA E R R O R ! 🐙 E R R O R ! DADA DADAI ERROR DARROR DADI E R R O R DADADI ERRDI DA DA E R R O R ! DADA DADAI ERROR DARROR DADI E R R O R DADADI ERRDI DA DA E R R O R ! DADA DADAI ERROR DARROR DADI E R R O R DADADI ERRDI DA DA E R R O R ! "); 
  $('p, h1, h2, a').delay(1000).queue(function(next) { $(this).addClass('jsdestroy5'); next(); });

  $('li, form, video').delay(1000).queue(function(next) { $(this).addClass('jsdestroy4'); next(); });

  $('.container-fluid').delay(4000).fadeOut(1500);

  $('.container-fluid').delay(1500).queue(function(next) { location.reload(); next(); });
});


$('.ok, .newsletter-subscribe').click(function() {
  $('body').addClass('jsdestroy12');

  $('p').text("DADA DADAI 🐙 ERROR DARROR DADI E R R O R 🐙 DADADI ERRDI DA DA E R R O R ! 🐙 E R R O R ! DADA DADAI ERROR DARROR DADI E R R O R DADADI ERRDI DA DA E R R O R ! DADA DADAI ERROR DARROR DADI E R R O R DADADI ERRDI DA DA E R R O R ! DADA DADAI ERROR DARROR DADI E R R O R DADADI ERRDI DA DA E R R O R ! "); 
  $('p, h1, h2, a').delay(1000).queue(function(next) { $(this).addClass('jsdestroy9'); next(); });

  $('li, form, video, button, canvas').delay(1000).queue(function(next) { $(this).addClass('jsdestroy8'); next(); });

  $('.container-fluid').delay(2000).fadeOut(1500);

  $('.container-fluid').delay(1000).queue(function(next) { location.reload(); next(); });
});


setInterval(function() {
  
    $('body').delay(7500).queue(function(next) {



      $('.jsf').delay(2500).queue(function(next) { $(this).addClass('jsbig'); next(); });

      $('.jsf').delay(-500).queue(function(next) { $(this).addClass('jsverlauf'); next(); });

      $('.jsf').delay(4000).queue(function(next) { $(this).removeClass('jsbig'); next(); });

      

      $('.jsf').delay(5000).queue(function(next) { $(this).removeClass('jsverlauf'); next(); });

      $('.jsfa').delay(3500).queue(function(next) { $(this).addClass('jsverlauf2'); next(); });

      $('.jsfa').delay(800).queue(function(next) { $(this).removeClass('jsverlauf2'); next(); });

      $('.jsfa').delay(3900).queue(function(next) { $(this).addClass('jsverlauf2'); next(); });

      $('.jsfa').delay(200).queue(function(next) { $(this).removeClass('jsverlauf2'); next(); });

      $('.jsfa').delay(100).queue(function(next) { $(this).addClass('jsverlauf2'); next(); });

      $('.jsfa').delay(200).queue(function(next) { $(this).removeClass('jsverlauf2'); next(); });

      $('.jsfa').delay(100).queue(function(next) { $(this).addClass('jsverlauf2'); next(); });

      $('.jsfa').delay(200).queue(function(next) { $(this).removeClass('jsverlauf2'); next(); });

      $('.jsfa').delay(100).queue(function(next) { $(this).addClass('jsverlauf2'); next(); });

      $('.jsfa').delay(200).queue(function(next) { $(this).removeClass('jsverlauf2'); next(); });

      $('.jsfa').delay(100).queue(function(next) { $(this).addClass('jsverlauf2'); next(); });

      $('.jsfa').delay(200).queue(function(next) { $(this).removeClass('jsverlauf2'); next(); });


      
      $('.jsf').delay(9500).queue(function(next) { $(this).addClass('jsbig2'); next(); });

      $('.jsf').delay(-500).queue(function(next) { $(this).addClass('jsverlauf4'); next(); });

      $('.jsf').delay(4000).queue(function(next) { $(this).removeClass('jsbig2'); next(); });

      $('.jsf').delay(5000).queue(function(next) { $(this).removeClass('jsverlauf4'); next(); });
      
      $('.jsfa').delay(8500).queue(function(next) { $(this).addClass('jsverlauf2'); next(); });

      $('.jsfa').delay(8600).queue(function(next) { $(this).removeClass('jsverlauf2'); next(); });

      $('body').delay(100).queue(function(next) { $(this).addClass('bodyinvert'); next(); });

      $('body').delay(200).queue(function(next) { $(this).removeClass('bodyinvert'); next(); });



      $('.jsfa').delay(100).queue(function(next) { $(this).addClass('jsverlauf2'); next(); });

      $('.jsfa').delay(200).queue(function(next) { $(this).removeClass('jsverlauf2'); next(); });

      $('.jsfa').delay(100).queue(function(next) { $(this).addClass('jsverlauf2'); next(); });

      $('.jsfa').delay(200).queue(function(next) { $(this).removeClass('jsverlauf2'); next(); });

      $('.jsfa').delay(100).queue(function(next) { $(this).addClass('jsverlauf2'); next(); });

      $('.jsfa').delay(200).queue(function(next) { $(this).removeClass('jsverlauf2'); next(); });
      
      $('.jsfa').delay(100).queue(function(next) { $(this).addClass('jsverlauf2'); next(); });

      $('.jsfa').delay(200).queue(function(next) { $(this).removeClass('jsverlauf2'); next(); });

      $('.jsfa').delay(100).queue(function(next) { $(this).addClass('jsverlauf2'); next(); });

      $('.jsfa').delay(200).queue(function(next) { $(this).removeClass('jsverlauf2'); next(); });

      $('.jsfa').delay(100).queue(function(next) { $(this).addClass('jsverlauf2'); next(); });

      $('.jsfa').delay(200).queue(function(next) { $(this).removeClass('jsverlauf2'); next(); });

      $('.jsfa').delay(100).queue(function(next) { $(this).addClass('jsverlauf2'); next(); });

      $('.jsfa').delay(200).queue(function(next) { $(this).removeClass('jsverlauf2'); next(); });
      
      $('.jsfa').delay(100).queue(function(next) { $(this).addClass('jsverlauf2'); next(); });

      $('.jsfa').delay(200).queue(function(next) { $(this).removeClass('jsverlauf2'); next(); });


      $('.jsf').delay(6500).queue(function(next) { $(this).addClass('jsbig'); next(); });

      $('.jsf').delay(-500).queue(function(next) { $(this).addClass('jsverlauf3'); next(); });

      $('.jsf').delay(4000).queue(function(next) { $(this).removeClass('jsbig'); next(); });

      $('.jsf').delay(5000).queue(function(next) { $(this).removeClass('jsverlauf3'); next(); });

  

    ; next(); });

}, 1000);


setInterval(function() {
  
    $('body').delay(1000).queue(function(next) {

      $('.container-fluid').delay(100).queue(function(next) { $(this).addClass('bodyinvert'); next(); });

      $('.container-fluid').delay(150).queue(function(next) { $(this).removeClass('bodyinvert'); next(); });

      $('.container-fluid').delay(100).queue(function(next) { $(this).addClass('bodyinvert'); next(); });

      $('.container-fluid').delay(200).queue(function(next) { $(this).removeClass('bodyinvert'); next(); });

      $('.container-fluid').delay(100).queue(function(next) { $(this).addClass('bodyinvert'); next(); });

      $('.container-fluid').delay(100).queue(function(next) { $(this).removeClass('bodyinvert'); next(); });
    ; next(); });

}, 5000);

});