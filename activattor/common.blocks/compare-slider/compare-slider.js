import './compare-slider.sass';
import '../base/sass/bootstrap-slider.scss';

$(document).ready(function(){

  $('.compare-slider__switcher').on('click', function () {
    $('.compare-slider__switcher').toggleClass('compare-slider__switcher-on'); //меняем положение переключателя
    $('.compare-slider__switcher-off').toggleClass('compare-slider__switcher-on'); //меняем положение переключателя
    $('.compare__item:not(.compare__item_bg_blue)').toggleClass('d-none'); //прячем все блоки, которе не имею класс .compare__item_bg_blu т.е. блоки тольчко отличия
  });

  $('.compare-slider__slider').slick({
    rows: 0, // delete empty div
    dots: false,
    arrow: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
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
  });

  $('.compare-slider__slider-tab2').slick({
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
  });

  $('ul.nav li a', document).on('click touch', function(){
    //обновляем слайдер для его правильного отображения
    $('.compare-slider__slider, .compare-slider__slider-tab2', document).slick('refresh');
  })

  $('.compare-slider__item-close', document).on('click touch', function(){
    //Удаляем карточки при нажатии крестика пользователем
    $(this).parent().remove();
  });

});
