var $ = require("./lib/qsa");

var link = $.one(".main-nav .activate");
var nav = $.one(".main-nav");

link.addEventListener("click", () => nav.classList.toggle("open"));