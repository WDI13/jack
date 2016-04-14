$(document).ready(function () {
// var movingContainer = document.getElementById('moving-container');

var divMove = function () {
  var oldPos = parseInt($('#moving-container').css('left'));
  var newPos = oldPos - 1;
  var newPosStr = newPos + 'px';
  $('#moving-container').css( {'left' : newPosStr} );
  if (newPos <= 50) {
      clearInterval(timerID);
    }
  };

var timerID = setInterval(divMove, 30);
});
