var $ = require("./lib/qsa");
var debounce = require("./lib/debounce");

var containers = $(".pitch-timing.container");

var onScroll = function() {
  console.log(containers);
  containers = containers.filter(function(c) {
    var bounds = c.getBoundingClientRect();
    if (bounds.top > 0 && bounds.bottom < window.innerHeight) {
      c.classList.add("active");
      return false;
    }
    return true;
  })
}

if (containers.length) window.addEventListener("scroll", debounce(onScroll, 100));