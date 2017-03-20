var $ = require("./lib/qsa");
var debounce = require("./lib/debounce");

var containers = $(".pitch-timing.container");

var onScroll = function() {
  containers.forEach(function(c) {
    var bounds = c.getBoundingClientRect();
    if (bounds.top > 0 && bounds.bottom < window.innerHeight * .7) {
      c.classList.add("active");
    }
  })
}

if (containers.length) window.addEventListener("scroll", debounce(onScroll, 100));