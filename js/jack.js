$(document).ready(function () {
// var movingContainer = document.getElementById('moving-container');

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
    console.log(oldPos);
    var newPos = oldPos + 1;
    var newPosStr = newPos + 'px';
    $('#mainCat').css( {'left' : newPosStr });
    if (newPos > 1500 ) {
      clearInterval(timerID);
    }
  };

var timerID = setInterval(divMove, 20);
});
