$(document).ready(function(){

	//test Jquery
	//alert("Jquery fonctionne.") ;

	$("#versions").hide() ;

	$("#b1").click(function(){
		$("#versions").show() ;
		$("#version1").show() ;
		$("#version2").hide() ;

	});

	$("#b2").click(function(){
		$("#versions").show() ;
		$("#version1").hide() ;
		$("#version2").show() ;
	});


});