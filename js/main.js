$.fn.extend({
  animateCss: function (option) {
    $(this).addClass(option.method);
    // console.log(option.time)
    if (typeof option.time !== "number") {
      option.time = 900;
    }
    setTimeout(function () {
      $(this).removeClass(option.method);
    }, 1000);
    setTimeout(function () {
      option.callBack.call(option.context);
    }, option.time);
    return $(this);
  },

  //list:ele,css,show,offset,callBack,callBackTime,context
  playAnimation: function (innerTime, callBack) {
    if (typeof innerTime !== "number") innerTime = 800;
    var time = 0;
    $.each(this, function (indexInArray, valueOfElement) {
      if (typeof valueOfElement.offset === "number")
        time += valueOfElement.offset;
      console.log(time);
      setTimeout(function () {
        if (typeof valueOfElement.show !== 'undefined' && typeof valueOfElement.ele === "string") {
          if (valueOfElement.show) {
            $(valueOfElement.ele).removeClass('hidden');
          }
        }
        if (typeof valueOfElement.css === 'object' && typeof valueOfElement.ele === "string")
          $(valueOfElement.ele).css(valueOfElement.css);
        if (typeof valueOfElement.callBack === 'function' && typeof valueOfElement.callBackTime === 'number')
          setTimeout(function () {
            callBack.call(valueOfElement.context);
          }, valueOfElement.callBackTime);
        if (typeof valueOfElement.anime === 'object')
          valueOfElement.anime.play();
      }, time);
      time += innerTime;
    });

    if (typeof callBack === 'function')
      setTimeout(function () {
        callBack.call(this);
      }, time);
  }
});

if ($(window).height() > $($(".bg")[0]).height()) {
  $(".bg").each(function (index, element) {
    $(this).height($(window).height());
  });
}
//p1
function p1Init() {
  $(".p1 .car").css({
    bottom: "18.57%",
    transform: "scale(1)"
  });
  setTimeout(function () {
    $(".p1 .vs").removeClass("hidden");
  }, 900);
  setTimeout(function () {
    $(".tech").removeClass("hidden");
    $(".sponsor").removeClass("hidden");
  }, 1000);
  $(".start").click(function (e) {
    $(".p1").animateCss({
      method: "fadeOut",
      time: 500,
      callBack: function () {
        $(".p1").addClass("hidden");
        $(".p2").removeClass("hidden");
        p2Init();
      },
      context: this
    });
  });
}

//footer
$("body").on("click", ".tech", function () {
  window.location.href = "http://www.foshannews.net/";
});

//p2
function p2Init() {
  $(".tech").animateCss({
    method: "fadeOut",
    callBack: function () {
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
  $(".p2 .next").click(function (e) {
    $(".p2").animateCss({
      method: "fadeOut",
      callBack: function () {
        $(".p2").addClass("hidden");
        $(".p3").removeClass("hidden");

        setTimeout(function () {
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
  $(".p3 .next").click(function () {
    $(".p3").animateCss({
      method: "fadeOut",
      callBack: function () {
        $(".p3").addClass("hidden");
        $(".p4").removeClass("hidden");
        setTimeout(function () {
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
  setTimeout(function () {
    anime({
      targets: ".p3 .bus",
      top: -0.41 * $(window).height() + "px",
      loop: true,
      duration: 1500,
      easing: "easeInQuad",
      elasticity: 0,
    });
  }, 300);
}

//p4
function p4Init() {
  var parent = ".p4 ";
  var animationList = [{
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
      offset: -500
    },
    {
      ele: parent + ".car-4",
      css: {
        bottom: "52.8%"
      },
      offset: -500
    },
    {
      ele: parent + ".car-5",
      css: {},
      offset: -500
    },
    {
      ele: parent + ".car-6",
      css: {},
      offset: -500
    },
    {
      ele: parent + ".next",
      show: true,
      offset: -300
    }
  ];
  $.each(animationList, function (indexInArray, valueOfElement) {
    if (typeof valueOfElement.css === 'object')
      valueOfElement.css.transform = "scale(1)";
  });
  $(animationList).playAnimation(800);
  $(parent + '.next').click(function (e) {
    $(".p4").animateCss({
      method: "fadeOut",
      callBack: function () {
        $(".p4").addClass("hidden");
        $(".p5").removeClass("hidden");
        setTimeout(function () {
          p5Init();
        }, 800);
      },
      context: this
    });
  })
}

//p5
function p5Init() {
  var num = {
      car: 0,
      bus: 0,
    },
    parent = '.p5 ',
    carNumAnime = anime.timeline({
      autoplay: false
    }),
    busNumAnime = anime.timeline({
      autoplay: false
    }),
    animationList = [{
      ele: parent + '.title,' + parent + '.content',
      show: true
    }, {
      ele: parent + '.car',
      show: true,
    }, {
      anime: carNumAnime,
    }, {
      ele: parent + '.bus',
      show: true,
      offset: 800
    }, {
      anime: busNumAnime,
    }, {
      ele: parent + '.next',
      show: true,
      offset: 300
    }];
  carNumAnime.add({
    targets: parent + '.car-word',
    opacity: 1,
    easing: 'easeInOutQuad',
    duration: 300,
  }).add({
    targets: num,
    car: 1333,
    autoplay: false,
    duration: 1000,
    update: function () {
      $('.car-num').html(parseInt(num.car));
    }
  });
  busNumAnime.add({
    targets: parent + '.bus-word',
    opacity: 1,
    easing: 'easeInOutQuad',
    duration: 300,
  }).add({
    targets: num,
    bus: 60,
    autoplay: false,
    duration: 800,
    update: function () {
      $('.bus-num').html(parseInt(num.bus));
    }
  });
  $(animationList).playAnimation(500);

  $(parent+'.next').click(function(e){
    $(".p5").animateCss({
      method: "fadeOut",
      callBack: function () {
        $(".p5").addClass("hidden");
        $(".p6").removeClass("hidden");
        $('body').css('background-color','#5a8b3d');
        setTimeout(function () {
          p6Init();
        }, 800);
      },
      context: this
    });
  });
}

//p6
function p6Init() {
  var parent = '.p6 '
  $(parent + ".car-wrapper").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "leftMarquee",
    interTime: 70,
    // trigger:"click",
    easing: "easeInQuint",
    opp: true
  });
  $(parent + ".bus-wrapper").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "leftMarquee",
    interTime: 10,
    // trigger:"click",
    easing: "easeInQuint",
    opp: true
  });
  anime({
    targets: parent + '.bus-cloud',
    translateY: -10,
    elasticity: 0,
    easing: 'easeOutQuad',
    duration: 200,
    loop: true,
    direction: 'alternate',
  })
  anime({
    targets: parent + '.car-cloud',
    translateY: -3,
    elasticity: 0,
    easing: 'easeOutQuad',
    duration: 800,
    loop: true,
    direction: 'alternate',
  })
}


p1Init();
// setTimeout(function () {
  // p6Init();
// }, 1000);