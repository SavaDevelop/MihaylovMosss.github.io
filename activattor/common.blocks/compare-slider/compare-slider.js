import './compare-slider.sass';
import '../base/sass/bootstrap-slider.scss';

$(document).ready(function(){

  //Показываем блоки свойств помеченые специальным классом
  $('.compare-slider__switcher').on('click', function () {
    $('.compare-slider__switcher').toggleClass('compare-slider__switcher-on'); //меняем положение переключателя
    $('.compare-slider__switcher-off').toggleClass('compare-slider__switcher-on'); //меняем положение переключателя
    $('.compare__item:not(.compare__item_bg_blue)').toggleClass('d-none'); //прячем все блоки, которе не имею класс .compare__item_bg_blu т.е. блоки тольчко отличия
  });

  // СЛАЙДЕР программирование логики
  //инициализируем колличество слайдеров и выдаем карент на 1цу
  function init_s(tab_active, options){ //options = init reInit afterChange
    //вычисляем текущий слайдер
    if(tab_active){ var slickElement = $('#' + tab_active + ' > .compare-slider__slider');
    }else{ var slickElement = $('#items1 > .compare-slider__slider');}
    slickElement.on(options, function(event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $('.slide__info', document).text(i + ' / ' + slick.slideCount);
    });
   //консолим
   window.console.log('init_s:', tab_active, '; options:', options);
  }

  init_s(null, 'init afterChange');

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

  //инициализируем количество первого слайдера при инициализации при переключении вкладок
  // $(".slide__totall").text( $('#items1 > .compare-slider__slider').slick('getSlick').slideCount );


  //при нажатии на вкладку, делаем переинициализацию слайдера
  $('ul.nav li a', document).on('click touch', function(){

    $('.compare-slider__slider').css({'opacity': 0}); //прячем слайдер, чтобы он не скакал
    $('.compare-slider').css({'height': '261px'}); //даем временно высоту, иначе скачет размер

    var tab_active = $(this).attr('aria-controls'); //вычисляем какой таб, который содержит видимый слайд

    if($('.nav-link').is('.active')){
      setTimeout(function(){
        $('#' + tab_active + " > .compare-slider__slider").slick('refresh');
        // $('.compare-slider__slider').slick('refresh'); //обновляем слайдер, иначе не строится ширина
        $('.compare-slider__slider').css({'opacity': 1}); //показываем слайдер
        $('.compare-slider').css({'height': 'auto'}); //возвращяет высоту
        //
        // $('#' + tab_active + " > .compare-slider__slider").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        //   var i = (currentSlide ? currentSlide : 0) + 1;
        //   $('.slide__info', document).text(i + ' / ' + slick.slideCount);
        //  });
         init_s(tab_active, 'reInit refresh afterChange');
        // $(".slide__totall").text( $('#' + tab_active + " > .compare-slider__slider").slick("getSlick").slideCount ); // вычисляем и даем колличество слайдов
      },150); //критическое время 150, меньше нельзя
    }
  })
  //считает актуальный слайдер
  $('.compare-slider__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    currentSlide = currentSlide + 1;
    $(".slide__carent").text(currentSlide);
  });

  $('.compare-slider__item-close', document).on('click touch', function(e){
    //Удаляем карточки при нажатии крестика пользователем
    var item = $(this).parent(); //карточка товара
    var index = $(item).data("slick-index");
    var slider = $(this).parent().parent().parent().parent(); //Блок слайдера compare-slider__slider slick-initialized slick-slider

    //Удаляем слайд по index
    $(slider).slick('slickRemove', index);

    //обновляем колличство слайдеров на счетчике
    slider.on('init reInit refresh afterChange', function(event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $('.slide__info', document).text(i + ' / ' + slick.slideCount);
    });

    window.console.log('.compare-slider__item-close:',  index);


  });

});
