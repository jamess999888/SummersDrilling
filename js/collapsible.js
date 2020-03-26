$(document).ready(function() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            growDiv(content);
        });
    }
});

function growDiv(element) {
    if (element.clientHeight) {
        element.style.height = 0;
    } else {
        var wrapper = document.querySelector('.measuringWrapper');
        growDiv.style.height = wrapper.clientHeight + "px";
    }
}