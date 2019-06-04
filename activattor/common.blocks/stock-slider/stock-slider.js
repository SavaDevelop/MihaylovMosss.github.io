import './stock-slider.sass';
import '../base/sass/bootstrap-slider.scss';

$(document).ready(function(){
  $('.stock-slider').slick({
    rows: 0, // delete empty div
    dots: false,
    arrow: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrow: true
        }
      },
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          centerPadding: '80px',
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
});
