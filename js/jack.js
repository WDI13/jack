$(document).ready(function () {
// var movingContainer = document.getElementById('moving-container');
var width = window.innerWidth;
console.log(width);
$jack = $('#jack-1');
var degrees = 0;

var rotate = function ($obj) {
  degrees +=10;
  $obj.css('transform', 'rotate(-' + degrees + 'deg)');
};

var moveID = setInterval(function() {
  degrees += 10;
  $('#gainsboro').css('transform', 'rotate(-' + degrees + 'deg)');
  console.log('sorry about not watching Satantango yet, Jack' + '\n');
  console.log("❤  ");
}, 1000);

var divMove = function () {
  var oldPos = parseInt($('#moving-container').css('left'));
  var newPos = oldPos - 1;
  var newPosStr = newPos + 'px';
  $('#moving-container').css( {'left' : newPosStr} );
  if (newPos <= -2800) {
      clearInterval(timerID);
      timerID = setInterval(catWalk, 8);
    }
  };

  var catWalk = function () {
    var oldPos = parseInt($('#mainCat').css('left'));
    var newPos = oldPos + 1;
    var newPosStr = newPos + 'px';
    $('#mainCat').css( {'left' : newPosStr });
    if (newPos > 1500 ) {
      clearInterval(timerID);
      timerID = setInterval(deadCat, 8);
    }
  };

  var deadCat = function () {
    var oldPos = parseInt($('#deadCat').css('left'));
    var newPos = oldPos - 1;
    var newPosStr = newPos + 'px';
    $('#deadCat').css( {'left' : newPosStr });
    if (newPos < 270 ) {
      clearInterval(timerID);
      timerID = setInterval(fadeOut, 50);
    }
  };

  var fadeOut = function () {
    $('#deadCat').fadeTo("slow", 0);
  };

var timerID = setInterval(divMove, 15);
});
