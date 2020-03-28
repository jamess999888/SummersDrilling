$(document).ready(function() {
	$(".collapsible-content").hide();
	$(".collapsible").click(function() {
		$(".collapsible").removeClass("active");
		var collapsibleContent = $(this).next(".collapsible-content");
		$(".collapsible:visible").find("img").attr('src',"/SummersDrilling/images/downArrow.png");
		$(".collapsible:visible").slideUp();
		$(this).toggleClass("active");
		if(collapsibleContent.hasClass("active"){
			collapsibleContent.slideDown();
			collapsibleContent.find("img").attr('src',"/SummersDrilling/images/upArrow.png");
		}
	});
});