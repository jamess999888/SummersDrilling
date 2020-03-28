$(document).ready(function() {
	$(".collapsible-content").hide();
	$(".collapsible").click(function() {
		$(this).toggleClass("active");
		$(this).next(".collapsible-content").slideToggle("slow");
	});
});