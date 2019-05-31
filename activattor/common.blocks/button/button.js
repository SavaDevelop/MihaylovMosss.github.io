import './button.sass';

//пишем функционал общий для кнопок, эффекты, либо что-то еще общее
$(document).on('click touch','.set_alert', function(){
  alert('I set_alert');
})
