$(document).ready(function() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            var innerDiv = content.firstElementChild;
            if (content.style.height !== "0px") {
                content.style.height = "0px";
                content.style.padding = "0 2%";
            } else {
                content.style.height = innerDiv.style.height;
                content.style.padding = "1% 2% 0 2%";
            }
        });
    }
});