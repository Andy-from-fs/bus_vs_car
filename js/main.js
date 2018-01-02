if ($(window).height() > $($(".bg")[0]).height()) {
  $(".bg").each(function(index, element) {
    $(this).height($(window).height());
  });
}
//p1
$(".p1 .car").css({
  bottom: "18.57%",
  transform: "scale(1)"
});
setTimeout(function() {
  $(".p1 .vs").removeClass("hidden");
}, 900);
setTimeout(function() {
  $(".tech").removeClass("hidden");
}, 1000);

//footer
$("body").on("click", ".tech", function() {
  window.location.href = "http://www.foshannews.net/";
});

//p2
// $(".p2 .car-3-wrapper").css("width", $(window).height() * 0.1111 * 1610 / 134);
// var car3Move = $(window).height() * 0.1111 * 1610 / 134 - $(window).width();
// var car3P2Anime = anime({
//   targets: ".p2 .car-3",
//   left: car3Move * -1,
//   duration: 30000,
//   loop: true,
//   direction: "normal",
//   elasticity: 0,
//   easing: "linear"
// });

$(".p2 .car-3-wrapper .bd ul li").css(
  "width",
  $(window).height() * 0.1111 * 825 / 134
);
$(".p2 .car-2-wrapper .bd ul li").css(
  "width",
  $(window).height() * 0.1451 * 755 / 175
);
$(".p2 .car-1-wrapper .bd ul li").css(
  "width",
  $(window).height() * 0.1252 * 1310 / 152
);
$(".car-3-wrapper").slide({
  mainCell: ".bd ul",
  autoPlay: true,
  effect: "leftMarquee",
  interTime: 150,
  trigger:"click",
  easing:"easeInQuint"
});
$(".car-2-wrapper").slide({
  mainCell: ".bd ul",
  autoPlay: true,
  effect: "leftMarquee",
  interTime: 200,
  trigger:"click",
  easing:"easeInQuint"
});
$(".car-1-wrapper").slide({
  mainCell: ".bd ul",
  autoPlay: true,
  effect: "leftMarquee",
  interTime: 110,
  trigger:"click",
  easing:"easeInQuint"
});
// $(".car-3-wrapper").click(function(e){
//   console.log('preventDefault()');
//   $(".car-3-wrapper").trigger('blur');
// })