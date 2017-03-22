var $ = require("./lib/qsa");
var debounce = require("./lib/debounce");
var closest = require("./lib/closest");

var resetButtons = $(".reset");

var containers = $(".pitch-timing.container");

var onScroll = function() {
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

var resetAnimation = function () {
  var pitchContainer = closest(this, ".pitch-timing.container")
  pitchContainer.classList.remove("active");
  var offSet = pitchContainer.offsetWidth;
  pitchContainer.classList.add("active");
}

resetButtons.forEach(el => el.addEventListener("click", resetAnimation));