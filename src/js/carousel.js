var $ = require("./lib/qsa");

var carousel = $.one(".carousel");
var players = $(".carousel .player-container");
var output = $.one(".carousel .description")

var clickPlayer = function() {
  players.forEach(p => p.classList.remove("active"));
  this.classList.add("active");
  var name = this.getAttribute("data-name");
  var years = this.getAttribute("data-term");
  var comment = this.getAttribute("data-comment");
  output.innerHTML = `
<h1>${name}</h1>
<h2>${years}</h2>
<p>
  ${comment}
  `;
  output.classList.remove("empty");
};

var scrollCarousel = function(e) {
  var parentClasses = this.parentElement.classList;

  //can we go right?
  if (this.scrollLeft < this.scrollWidth - this.offsetWidth) {
    parentClasses.add("scrollable-right");
  } else {
    parentClasses.remove("scrollable-right");
  }

  //can we go right?
  if (this.scrollLeft > 0) {
    parentClasses.add("scrollable-left");
  } else {
    parentClasses.remove("scrollable-left");
  }
}

if (carousel) {

  players.forEach(el => el.addEventListener("click", clickPlayer));
  var scroller = $.one(".scroll-container", carousel);
  scroller.addEventListener("scroll", scrollCarousel);
  scrollCarousel.call(scroller);

}