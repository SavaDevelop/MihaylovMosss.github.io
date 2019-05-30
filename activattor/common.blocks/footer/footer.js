import './footer.sass';

$(document).ready(function(){
  $('#footer-pokupatelyam .footer_heading').on('click touch', function() {
    $('#footer-pokupatelyam .footer_nav').toggleClass('active');
  });

  $('#footer-partneram .footer_heading').on('click touch', function() {
    $('#footer-partneram .footer_nav').toggleClass('active');
  });

  $('#footer-informatsiya .footer_heading').on('click touch', function() {
    $('#footer-informatsiya .footer_nav').toggleClass('active');
  });
});