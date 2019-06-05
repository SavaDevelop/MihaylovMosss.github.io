import './video-block.sass';

document.getElementsByClassName('yellow-circle')[0].onclick = function () {
    document.getElementById('movie1').play();
    document.getElementById('movie1').setAttribute('controls', 'controls');
    this.remove();
}