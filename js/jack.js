$(document).ready(function() {
  var width = window.innerWidth;
  console.log(width);
  $jack = $('#jack-1');
  var satantango = 0;

  var rotate = function ($obj) {
    degrees +=10;
    $obj.css('transform', 'rotate(-' + degrees + 'deg)');
  };

  var moveID = setInterval(function() {
    satantango += 10;
    $('#gainsboro').css('transform', 'rotate(-' + satantango + 'deg)');
    console.log('sorry about not watching Satantango yet, Jack' + '\n');
    console.log("❤ " + 'Satantango counter: " + satantango + " ❤");
  }, 1000);

});
