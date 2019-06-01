import '../../common.blocks/base/base.js';
import './ui-kit.sass';

import '../../common.blocks/breadcrumb/breadcrumb.js';
import '../../common.blocks/container/container.js';
import '../../common.blocks/button/button.js';
import '../../common.blocks/trafarets/trafarets.js';
import '../../common.blocks/title/title.js';
import '../../common.blocks/pagination/pagination.js';

$(document).ready(function() {
    $(document).on('click', '.checkbox_cnt label', function() {
        var _parent = $(this).parent();
        if($(this).prev('input').attr('type') == 'radio'){
            _parent.addClass('checkbox_cnt_active').siblings().removeClass('checkbox_cnt_active');
        } else {
            _parent.toggleClass('checkbox_cnt_active');
        }
    });

    // $(document).on('click', '.filter-mobile:not(".active")', function () {
    //     $('#character-main').addClass('active');
    //     $('.filter').removeClass('display');
    // });

    // $(document).on('click', '.price_range.last_range .btn-show', function (e) {
    //     // e.preventDefault();
    //     $('.filter-mobile').addClass('active');
    //     $('#character-main').removeClass('active');
    //     $('.filter').addClass('display');
    // });
    // $(document).on('click', '.close-arrow', function (e) {
    //     $('.filter').addClass('display');
    //     $('#character-main').removeClass('active');
    // });

    // $(document).on('click', '.filter-mobile.active', function () {
    //     $(this).removeClass('active');
    //     $('#filter_reset').trigger('click');
    // });

    // $(document).on('click', '#filter_reset', function () {
    //     $('.filter').addClass('display');
    //     $('#character-main').removeClass('active');
    // });

    // $(document).on('mousedown', '.input-menu li', function () {
    //     let __text = $(this).text();
    //     $(this).closest('.input-main').find('.input_cnt p').text(__text);
    //     $(this).closest('.input-main').find('.input_cnt input[type="hidden"]').val(__text);
    // });
});

// $(document).on("click", ".white_icon", function() {
//     $(".filter").toggleClass("display");

//     if($(".filter").hasClass("display")){
//         $(this).find("use").attr("xlink:href", "#plus_icon");
//     }else{
//         $(this).find("use").attr("xlink:href", "#minus_icon");
//     }
// });