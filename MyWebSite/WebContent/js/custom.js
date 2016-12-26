/**
 * http://usejsdoc.org/
 */

$(document).ready(function(){
	
	$("#about").hide();
	$("#work").hide();
	$("#family").hide();	
	$("#profile_pic").hide();
	var hash = window.location.hash;
	console.log(hash);
	$(hash).show();
	if(!(hash =="#family"))
		$("#profile_pic").show();
	//action on about page click
	$("#aboutlink").click(function(){

		$("#about").show();
		$("#profile_pic").show();
		$("#footer").show();
		$("#work").hide();
		$("#family").hide();
	});

	//action on professional page click
	$("#worklink").click(function(){

		$("#about").hide();
		$("#profile_pic").show();
		$("#footer").show();
		$("#work").show();
		$("#family").hide();
		
	});
	
	//action on family page click
	$("#familylink").click(function(){
		
		$("#about").hide();
		$("#profile_pic").hide();
		$("#work").hide();
		$("#family").show();
	});
		
});