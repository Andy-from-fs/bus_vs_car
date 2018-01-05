var audiojs = function(src) {
  var className = "play";
  var trigger = "click";
  var $music = document.createElement("div");
  var $audio = document.createElement("audio");

  function toggle() {
    console.log($audio.paused);
    if (!$audio.paused) return $audio.pause();
    $audio.currentTime = 0;
    $audio.play();
  }

  function play(e) {
    $music.classList.add(className);
  }

  function pause(e) {
    $music.classList.remove(className);
  }

  $music.className = "music-icon btn";
  $audio.src = src;
  $audio.loop = true;
  document.body.appendChild($music);
  document.body.appendChild($audio);

  $audio.addEventListener("play", play, false);
  $audio.addEventListener("pause", pause, false);
  $audio.addEventListener("ended", pause, false);
  $music.addEventListener("click", toggle, false);

  $audio.play();
  document.addEventListener(
    "WeixinJSBridgeReady",
    function() {
      $audio.play();
    },
    false
  );

  this.change = function(location, autoplay) {
    $audio.src = location;
    if (typeof autoplay==='boolean'&& autoplay === false) return null;
    $audio.play();
  };
  this.play = function() {
    $audio.play();
  };
  this.pause = function() {
    $audio.pause();
  };
};
