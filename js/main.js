$.fn.extend({
  animateCss: function(option) {
    $(this).addClass(option.method);
    // console.log(option.time)
    if (typeof option.time !== "number") {
      option.time = 900;
    }
    setTimeout(function() {
      $(this).removeClass(option.method);
    }, 1000);
    setTimeout(function() {
      option.callBack.call(option.context);
    }, option.time);
    return $(this);
  },
  playAnimation: function(innerTime, callBack) {
    if (typeof innerTime !== "number") innerTime = 800;
    var time;
    $.each(this, function(indexInArray, valueOfElement) {
      var offset = 0;
      if (typeof valueOfElement.offset === "number") {
        offset = valueOfElement.offset;
      }
      time = indexInArray * innerTime + offset;
      setTimeout(function() {
        $(valueOfElement.ele).css(valueOfElement.css);
      }, time);
    });
    console.log(time);

    setTimeout(function() {
      callBack.call(this);
    }, time);
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
  $(".p2 .car-3-wrapper").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "leftMarquee",
    interTime: 100,
    // trigger:"click",
    easing: "easeInQuint"
  });
  $(".p2 .car-2-wrapper").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "leftMarquee",
    interTime: 200,
    // trigger:"click",
    easing: "easeInQuint"
  });
  $(".p2 .car-1-wrapper").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "leftMarquee",
    interTime: 150,
    // trigger:"click",
    easing: "easeInQuint"
  });
  $(".p2 .next").click(function(e) {
    $(".p2").animateCss({
      method: "fadeOut",
      callBack: function() {
        $(".p2").addClass("hidden");
        $(".p3").removeClass("hidden");

        setTimeout(function() {
          p3Init();
        }, 800);
      },
      context: this
    });
  });
}

//p3
function p3Init() {
  $(".p3 .next").removeClass("hidden");
  $(".p3 .next").click(function() {
    $(".p3").animateCss({
      method: "fadeOut",
      callBack: function() {
        $(".p3").addClass("hidden");
        $(".p4").removeClass("hidden");
        setTimeout(function() {
          p4Init();
        }, 800);
      },
      context: this
    });
  });
  $('.p3 .title').removeClass('hidden');

  $(".p3 .car-1-wrapper").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "topMarquee",
    vis: 3,
    interTime: 150,
    trigger: "click",
    easing: "easeInQuint"
  });
  $(".p3 .car-2-wrapper").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "topMarquee",
    vis: 3,
    interTime: 180,
    trigger: "click",
    easing: "easeInQuint"
  });
  // var busPos=$('.p3 .bus').css('top');
  anime({
    targets: ".p3 .bus",
    top: -0.41 * $(window).height() + "px",
    loop: true,
    duration: 1500,
    easing: "easeInQuad",
    elasticity: 0,
    autoPlay: false
  });
}

//p4
function p4Init() {
  var parent = ".p4 ";
  var animationList = [
    {
      ele: parent + ".bus",
      css: {
        bottom: "41.5%"
      }
    },
    {
      ele: parent + ".car-1",
      css: {
        bottom: "42.03%"
      }
    },
    {
      ele: parent + ".car-2",
      css: {
        bottom: "43.49%"
      },
      offset: -500
    },
    {
      ele: parent + ".car-3",
      css: {
        bottom: "52.87%"
      },
      offset: -500 * 2
    },
    {
      ele: parent + ".car-4",
      css: {
        bottom: "52.8%"
      },
      offset: -500 * 3
    },
    {
      ele: parent + ".car-5",
      css: {},
      offset: -500 * 4
    },
    {
      ele: parent + ".car-6",
      css: {},
      offset: -500 * 5
    }
  ];
  $.each(animationList, function(indexInArray, valueOfElement) {
    valueOfElement.css.transform = "scale(1)";
  });
  $(animationList).playAnimation(800, function() {
    $(".p4 .next").removeClass("hidden");
  });
}

p1Init();
// setTimeout(function() {
//   p4Init();
// }, 1000);
