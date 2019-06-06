import '../../common.blocks/base/base.js';
import './application-accepted.sass';

import '../../common.blocks/button/button.js';
import '../../common.blocks/title/title.js';

$(function(){
  $(document).on('click rouch', '.app-det__ord-detais', function(){
    $('.app-det_js-detail, .app-det_js-go-main', document).show(500);
  })
})
