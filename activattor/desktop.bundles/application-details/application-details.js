import '../../common.blocks/base/base.js';
import './application-details.sass';

import '../../common.blocks/button/button.js';
import '../../common.blocks/title/title.js';

$(function(){

  $(document).on('click touch', '.app-det__ord-detais', function(){

    $('.app-det_js-detail', document).toggleClass(function() {
      if ($(this).hasClass('.d-none')) {
        return 'd-none';
      } else {
        return 'd-block';
      }
    })

  });

});
