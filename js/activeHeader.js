$(document).ready(function() {
    var root = document.querySelector("#root");
    var page = root.children[0].id

    var headerLink = document.querySelector("a#" + page)

    var currentActive = document.querySelector("a.active")
    currentActive.classList.toggle("active");

    headerLink.classList.toggle("active");
});