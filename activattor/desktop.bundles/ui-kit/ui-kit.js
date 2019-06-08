import '../../common.blocks/base/base.js';
import './ui-kit.sass';
import '../../common.blocks/breadcrumb/breadcrumb.js';
import '../../common.blocks/container/container.js';
import '../../common.blocks/button/button.js';
import '../../common.blocks/trafarets/trafarets.js';
import '../../common.blocks/title/title.js';
import '../../common.blocks/pagination/pagination.js';

import '../../common.blocks/stock-slider/stock-slider.js';


$(document).ready(function() {
    $(document).on('click', '.checkbox_cnt label', function() {
        var _parent = $(this).parent();
        if($(this).prev('input').attr('type') == 'radio'){
            _parent.addClass('checkbox_cnt_active').siblings().removeClass('checkbox_cnt_active');
        } else {
            _parent.toggleClass('checkbox_cnt_active');
        }
    });
});
