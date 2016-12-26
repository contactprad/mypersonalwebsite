/**
 * http://usejsdoc.org/
 */

$(document).ready(function(){
	
	$("aboutpage").show();
	$("aboutpage").addClass("active");
	$("#professionalpage").hide();
	$("#familypage").hide();
	$("#pktheorypage").hide();
	
	//action on about page click
	$("#about").click(function(){

		$("#aboutpage").show();
		$("#profile_pic").show();
		$("#footer").show();
		$("#professionalpage").hide();
		$("#familypage").hide();
		$("#pktheorypage").hide();
	});

	//action on professional page click
	$("#work").click(function(){

		$("#aboutpage").hide();
		$("#profile_pic").show();
		$("#footer").show();
		$("#professionalpage").show();
		$("#familypage").hide();
		$("#pktheorypage").hide();
	});
	
	//action on family page click
	$("#family").click(function(){
		
		$("#aboutpage").hide();
		$("#profile_pic").hide();
		$("#professionalpage").hide();
		$("#familypage").show();
		$("#pktheorypage").hide();
	});
		
});