$(document).ready(function() {
    var root = document.getElementsById("root");
    var page = root.children[0].id

    var headerLink = document.querySelector("a." + page)
    headerLink.classList.toggle("active");
});