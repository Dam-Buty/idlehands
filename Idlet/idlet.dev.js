(function(window) {
  var _setInterval = window.setInterval;
  var _setTimeout = window.setTimeout;
  var ratio = 40;

  window.setInterval = function(callback, time) {
    console.log("Original time : " + time);
    _setInterval(callback, time / ratio);
  };

  window.setTimeout = function(callback, time) {
    console.log("Original time : " + time);
    _setTimeout(callback, time / ratio);
  };
})(window);
