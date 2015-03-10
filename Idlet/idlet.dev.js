(function(window) {

  window.setInterval = function(callback, time) {
    var ratio = window.prompt("Ratio");

    window.setInterval(callback, time / ratio);
  };


  window.setTimeout = function(callback, time) {
    var ratio = window.prompt("Ratio");

    window.setTimeout(callback, time / ratio);
  };


})(window);
