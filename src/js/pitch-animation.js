var $ = require("./lib/qsa");

var cels = $(".pitching-breakdown .cel");
console.log(cels);

var index = 0;
var step = function() {
  cels.forEach(function(c, i) {
    c.classList[i > index ? "add" : "remove"]("hide");
  });
  index = (index + 1) % (cels.length + 2);
  setTimeout(step, 200);
};

if (cels.length) {
  step();
}