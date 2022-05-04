
$( document ).ready(function() {
var bgColorArray = ['imgs/001.png','imgs/002.png', 'imgs/003.png', 'imgs/004.png', 'imgs/005.png'],
selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];

$('#random-images').css('background', 'url(' + selectBG + ')')
});
