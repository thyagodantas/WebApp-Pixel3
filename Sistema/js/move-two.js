$(document).ready(function () {
  var $moveable = $(".astronaut");
  var rectPosY = parseInt($(".astronaut").css("top"), 10);
  var rectPosX = parseInt($(".astronaut").css("left"), 10);
  $(document).mousemove(function (e) {
    $moveable.css({
      top: rectPosY - e.pageY / 80,
      left: rectPosX - e.pageX / 80,
    });
  });
});
