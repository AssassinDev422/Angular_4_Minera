$(function() {
	var winheight = $(window).height() - 50;
	$(".app-cover,#page-wrapper").css("min-height",winheight);

	$(window).resize(function(){
		var winheight = $(window).height() - 50;
		$(".app-cover,#page-wrapper").css("min-height",winheight);
	});

	//navigation close on click
	$(".mainpoint1").click(function(){
		$(".mainpoint2[aria-expanded='true'],.mainpoint3[aria-expanded='true']").trigger("click");
	});
	$(".mainpoint2").click(function(){
		$(".mainpoint1[aria-expanded='true'],.mainpoint3[aria-expanded='true']").trigger("click");
	});
	$(".mainpoint3").click(function(){
		$(".mainpoint1[aria-expanded='true'],.mainpoint2[aria-expanded='true']").trigger("click");
	});
});