import './compare-slider.sass';
import '../base/sass/bootstrap-slider.scss';

$(document).ready(function(){

  //Показываем блоки свойств помеченые специальным классом
  $('.compare-slider__switcher').on('click', function () {
    $('.compare-slider__switcher').toggleClass('compare-slider__switcher-on'); //меняем положение переключателя
    $('.compare-slider__switcher-off').toggleClass('compare-slider__switcher-on'); //меняем положение переключателя
    $('.compare__item:not(.compare__item_bg_blue)').toggleClass('d-none'); //прячем все блоки, которе не имею класс .compare__item_bg_blu т.е. блоки тольчко отличия
  });

  //инициализируем слайдер, делаем 1 на все, т.к. их может быть более 2х
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
          centerPadding: '10px',
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  //при нажатии на вкладку, делаем переинициализацию слайдера
  $('ul.nav li a', document).on('click touch', function(){
    $('.compare-slider__slider').css({'opacity': 0}); // прячем слайдер, чтобы он не скакал
    $('.compare-slider').css({'height': '261px'}); // даем временно высоту, иначе скачет размер
    if($('.nav-link').is('.active')){
      setTimeout(function(){
        $('.compare-slider__slider').slick('refresh'); //обновляем слайдер, иначе не строится ширина
        $('.compare-slider__slider').css({'opacity': 1}); // показываем слайдер
        $('.compare-slider').css({'height': 'auto'}); // возвращяет высоту
      },150); //критическое время 150, меньше нельзя
    }
  })


  $('.compare-slider__item-close', document).on('click touch', function(){
    //Удаляем карточки при нажатии крестика пользователем
    $(this).parent().remove();
  });

});
