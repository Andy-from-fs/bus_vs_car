$.fn.extend({
  animateCss: function(option) {
    $(this).addClass(option.method);
    // console.log(option.time)
    if (typeof option.time !== "number") {
      option.time = 900;
    }
    setTimeout(function() {
      option.callBack.call(option.context);
    }, option.time);
    return $(this);
  }
});

if ($(window).height() > $($(".bg")[0]).height()) {
  $(".bg").each(function(index, element) {
    $(this).height($(window).height());
  });
}
//p1
function p1Init() {
  $(".p1 .car").css({
    bottom: "18.57%",
    transform: "scale(1)"
  });
  setTimeout(function() {
    $(".p1 .vs").removeClass("hidden");
  }, 900);
  setTimeout(function() {
    $(".tech").removeClass("hidden");
    $(".sponsor").removeClass("hidden");
  }, 1000);
  $(".start").click(function(e) {
    $(".p1").animateCss({
      method: "fadeOut",
      time: 500,
      callBack: function() {
        $(".p1").addClass("hidden");
        $(".p2").removeClass("hidden");
        p2Init();
      },
      context: this
    });
  });
}
// p1Init();

//footer
$("body").on("click", ".tech", function() {
  window.location.href = "http://www.foshannews.net/";
});

//p2
function p2Init() {
  $(".tech").animateCss({
    method: "fadeOut",
    callBack: function() {
      $(this).addClass("hidden");
    },
    context: $(".tech")
  });
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
    interTime: 100,
    // trigger:"click",
    easing: "easeInQuint"
  });
  $(".car-2-wrapper").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "leftMarquee",
    interTime: 200,
    // trigger:"click",
    easing: "easeInQuint"
  });
  $(".car-1-wrapper").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "leftMarquee",
    interTime: 150,
    // trigger:"click",
    easing: "easeInQuint"
  });
}
