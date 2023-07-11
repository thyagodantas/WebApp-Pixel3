$(document).ready(function () {
  var $moveable = $(".hosts-presentation");
  var rectPosY = parseInt($(".hosts-presentation").css("top"), 10);
  var rectPosX = parseInt($(".hosts-presentation").css("left"), 10);
  $(".presentation").mousemove(function (e) {
    $moveable.css({
      top: rectPosY - e.pageY / 200,
      left: rectPosX - e.pageX / 200,
    });
  });
});
