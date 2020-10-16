
$(document).ready(function() {

// alert($(window).height() + " " + $(document).height() + " " + $(window).width());
var sdegree = 0;

    $(window).scroll(function() {

        if ($(document).scrollTop() > 1000) {
            $('.poem').removeClass('poemFontBig').fadeIn('slow');
            $(".poem").css({"-moz-transform" : nrotate, "-webkit-transform" : nrotate});
            $('.list').removeClass('listBlur').fadeIn('slow');
        }
        if ($(document).scrollTop() > 1200) {
            $('.list').addClass('activeFour').fadeIn('slow');
        }
        if ($(document).scrollTop() > 2400) {
            $('.poem').removeClass('activeFour').fadeIn('slow');
            $('.list').addClass('listBlur').fadeIn('slow');
            
            sdegree ++ ;
            sdegree = sdegree + 2 ;
            var srotate = "rotate(" + sdegree + "deg)";
            var nrotate = 'none'
            
            $(".listBlur li").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
            $(".poem").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
            $('.poem').addClass('poemFontBig').fadeIn('slow');
        }
        if ($(document).scrollTop() > 3900) {
            $('.poem').removeClass('poemFontBig').fadeIn('slow');
            $(".poem").css({"-moz-transform" : nrotate, "-webkit-transform" : nrotate});
            $(".listBlur li").css({"-moz-transform" : nrotate, "-webkit-transform" : nrotate});
            $('.list').removeClass('listBlur');
            $('.list').removeClass('activeFour');
            $('.list').addClass('poemLineHeight');
            $('.poem').addClass('poemLineHeight');
            $('.poem h1').addClass('poemFontBig');
            
        }
        if ($(document).scrollTop() > 4900) {
            $('.list').removeClass('poemLineHeight');
            $('.poem').removeClass('poemLineHeight');
            $('.poem h1').removeClass('poemFontBig');
        }
        if ($(document).scrollTop() > 6380) {
            $(this).scrollTop(0).fadeIn('slow');
        }
       
    });
  $(this).scrollTop(0);
  $('html').animate({scrollTop:0}, 1);
  $('body').animate({scrollTop:0}, 1);

$('.writeOverlay').hide();
$('canvas#__processing0').hide();

$('.header-search').click(function(){
    $('.writeOverlay').show();
    $('canvas#__processing0').show();
});
// $('button.ok').click(function(){
//     $('.writeOverlay').hide();
//     $('canvas#__processing0').hide();
// });
////////////////////////////////////////////////////////////////////////////// Camera Upload
   // Put event listeners into place
window.addEventListener("DOMContentLoaded", function() {
    // Grab elements, create settings, etc.
    document.getElementById("cam").addEventListener("click", function(camFunction) {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        video = document.getElementById("video"),
        videoObj = { "video": true },
        errBack = function(error) {
            console.log("Video capture error: ", error.code); 
        };
        $('video').css('height','auto');
        $('video').css('width','100vw');
        $('.poem p').addClass('fontShadsTwo');
        $('.poem br, .poem span, h1').addClass('fontShads');
        $('.poem h1').addClass('poemFontBig');


    // Put video listeners into place
    if(navigator.getUserMedia) { // Standard
        navigator.getUserMedia(videoObj, function(stream) {
            video.src = stream;
            video.play();
        }, errBack);
    } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
        navigator.webkitGetUserMedia(videoObj, function(stream){
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
        }, errBack);
    }
    else if(navigator.mozGetUserMedia) { // Firefox-prefixed
        navigator.mozGetUserMedia(videoObj, function(stream){
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }, errBack);
    }
}, false);
});
});





 // Put event listeners into place
          