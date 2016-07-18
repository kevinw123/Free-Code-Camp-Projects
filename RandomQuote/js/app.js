$(document).ready(function(){
var header = $('body');

var backgrounds = new Array(
    'url(img/mountain1.jpg)'
  , 'url(img/mountain2.jpg)'
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 3000);

header.css('background-image', backgrounds[0]);
});