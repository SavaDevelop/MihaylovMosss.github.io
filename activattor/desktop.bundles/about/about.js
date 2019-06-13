import '../../common.blocks/base/base.js';
import './about.sass';

jQuery(document).ready(function(){
    document.getElementsByClassName('yellow-circle')[0].onclick = function () {
        document.getElementById('movie1').style('display', 'block');
        document.getElementById('movie1').play();
        document.getElementById('movie1').setAttribute('controls', 'controls');
        this.remove();
    }
});
