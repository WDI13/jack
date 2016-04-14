$(document).ready(function() {
  var width = window.innerWidth;
  console.log(width);
  $jack = $('#jack-1');
  var degrees = 0;

  var rotate = function ($obj) {
    degrees +=10;
    $obj.css('transform', 'rotate(-' + degrees + 'deg)');
  };

  var moveID = setInterval(function() {
    rotate($jack);
  }, 100);
});
