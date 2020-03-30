$(document).ready(function() {
    $(".collapsible-content").hide();
    var openThis;
    $(".collapsible").click(function() {
        var openThis = ($(this).next(".collapsible-content:hidden").length);
        $(".collapsible").removeClass("active");
        var collapsibleContent = $(this).next(".collapsible-content");
        $(".collapsible").find("img").attr('src', "{{ '/images/downArrow.png' | relative_url }}");
        $(".collapsible").next(".collapsible-content:visible").slideUp();
        if (openThis) {
            collapsibleContent.slideDown();
            $(this).find("img").attr('src', "{{ '/images/upArrow.png' | relative_url }}");
            $(this).addClass("active");
        }
    });
});