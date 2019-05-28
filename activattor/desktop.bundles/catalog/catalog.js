import '../../js/base.js';
import './catalog.sass';

import '../../sass/catalog/_bootstrap-slider.scss';
import '../../sass/catalog/_chosenpage__styles.sass';
import '../../sass/catalog/ui/ui.sass';
import '../../sass/catalog/ui/ui-2.sass';

$(document).ready(function () {

  $(document).on('click', '.checkbox_cnt label', function () {
      var _parent = $(this).parent();
      if($(this).prev('input').attr('type') == 'radio'){
          _parent.addClass('active').siblings().removeClass('active');
      } else {
          _parent.toggleClass('active');
      }
  });

  $(document).on('click', '.filter-mobile:not(".active")', function () {
      $('#character-main').addClass('active');
      $('.filter').removeClass('display');
  });

  $(document).on('click', '.price_range.last_range .btn-show', function (e) {
      // e.preventDefault();
      $('.filter-mobile').addClass('active');
      $('#character-main').removeClass('active');
      $('.filter').addClass('display');
  });
  $(document).on('click', '.close-arrow', function (e) {
      $('.filter').addClass('display');
      $('#character-main').removeClass('active');
  });

  $(document).on('click', '.filter-mobile.active', function () {
      $(this).removeClass('active');
      $('#filter_reset').trigger('click');
  });

  $(document).on('click', '#filter_reset', function () {
      $('.filter').addClass('display');
      $('#character-main').removeClass('active');
  });

  $(document).on('mousedown', '.input-menu li', function (e) {
      const text = $(this).text();
      $(this).closest('.input-main').find('.input_cnt p').text(text);
      $(this).closest('.input-main').find('.input_cnt input[type="hidden"]').val(text);

  });

  //##########################################################
  //##########################################################
  //##########################################################

  $('.slider-thumb').slick({
      autoplay: false,
      vertical: true,
      infinite: true,
      verticalSwiping: true,
      slidesPerRow: 1,
      slidesToShow: 6,
      asNavFor: '.slider-preview',
      focusOnSelect: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-up"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-down"></i></button>',
      responsive: [
          {
              breakpoint: 767,
              settings: {
                  vertical: false,
              }
          },
          {
              breakpoint: 479,
              settings: {
                  vertical: false,
                  slidesPerRow: 3,
                  slidesToShow: 3,
              }
          },
      ]
  });

  $('.slider-preview').slick({
      autoplay: false,
      vertical: true,
      infinite: true,
      slidesPerRow: 1,
      slidesToShow: 1,
      asNavFor: '.slider-thumb',
      arrows: false,
      draggable: false,
      responsive: [
          {
              breakpoint: 767,
              settings: {
                  vertical: false,
                  fade: true,
              }
          },
      ]
  });

  $(".white_bar").on("click", function () {
    $(".grey_round").toggleClass("clicked");
    $(".element_grid").toggleClass("flat");
});

  $(".white_icon").on("click", function () {
      $(".filter").toggleClass("display");
      if($(".filter").hasClass("display")){
          $(this).find("use").attr("xlink:href", "#plus_icon");
      }else{
          $(this).find("use").attr("xlink:href", "#minus_icon");
      }
  })
});
