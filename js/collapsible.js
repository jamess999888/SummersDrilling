$(document).ready(function() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.height === "auto") {
                content.style.height = "0px";
            } else {
                content.style.height = "auto";
            }
        });
    }
});