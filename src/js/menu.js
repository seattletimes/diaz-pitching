var $ = require("./lib/qsa");

var link = $.one(".main-nav .activate");
var nav = $.one(".main-nav");

link.addEventListener("click", () => nav.classList.toggle("open"));

link.addEventListener("mouseenter", () => nav.classList.add("open"));
nav.addEventListener("mouseleave", () => nav.classList.remove("open"));