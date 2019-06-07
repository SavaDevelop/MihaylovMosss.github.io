import '../../common.blocks/base/base.js';
import './application-details.sass';

import '../../common.blocks/button/button.js';
import '../../common.blocks/title/title.js';

$(function(){

  $(document).on('click touch', '.app-details__block-details_link', function(){

    $('.app-details_js', document).toggleClass(function() {
      if ($(this).hasClass('.d-none')) {
        return 'd-none';
      } else {
        return 'd-block';
      }
    });

  });

});
