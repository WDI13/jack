$(document).ready(function() {
  $jack = $('#jack-1');
  var satantango = 0;

var rotate = function ($obj) {
  degrees +=10;
  $obj.css('transform', 'rotate(-' + degrees + 'deg)');
};

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

  var moveID = setInterval(function() {
    satantango += 10;
    $('#gainsboro').css('transform', 'rotate(-' + satantango + 'deg)');
    console.log('sorry about not watching Satantango yet, Jack' + '\n');
    console.log("❤ " + "The new director's cut of Satantango will be " + satantango + " minutes ❤");
  }, 1000);


var timerID = setInterval(divMove, 15);
});
