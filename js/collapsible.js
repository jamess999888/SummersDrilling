$(document).ready(function() {
	$(".collapsible-content").hide();
	$(".collapsible").click(function() {
		$(this).toggleClass("active");
		$(this).find(".collapsible-content").slideToggle("slow");
	});
});