$(document).ready(function(){

	//test Jquery
	//alert("Jquery fonctionne.") ;

	// l'affichage de la page initiale
	$("#preparation").show() ;
	$("#reveillon").hide() ;
	$("#Unjour").hide() ;
	$("#jours").hide() ;
	$("#aParis").hide() ;

	// les animations en cliquant sur les boutons de menu vertical
	// bouton Préparation
	$("#b1").click(function(){
		$("#preparation").show() ;
		$("#reveillon").hide() ;
		$("#Unjour").hide() ;
		$("#jours").hide() ;
		$("#aParis").hide() ;
	});

	// bouton Réveillon
	$("#b2").click(function(){
		$("#preparation").hide() ;
		$("#reveillon").show() ;
		$("#Unjour").hide() ;
		$("#jours").hide() ;
		$("#aParis").hide() ;
	});

	// bouton Premier Jour
	$("#b3").click(function(){
		$("#preparation").hide() ;
		$("#reveillon").hide() ;
		$("#Unjour").show() ;
		$("#jours").hide() ;
		$("#aParis").hide() ;
	});

	// bouton Jours Suivants
	$("#b4").click(function(){
		$("#preparation").hide() ;
		$("#reveillon").hide() ;
		$("#Unjour").hide() ;
		$("#jours").show() ;
		$("#aParis").hide() ;
	});

	// bouton Fête à Paris
	$("#b5").click(function(){
		$("#preparation").hide() ;
		$("#reveillon").hide() ;
		$("#Unjour").hide() ;
		$("#jours").hide() ;
		$("#aParis").show() ;
	});

	// les animations pour les cliques sur les images dans To-Do liste
	$("img.do_img").click(function () {
		// la fonction "animate" nous permet d'ajouter une animation sur la photo
		// définir les propriétés d'animation avec les attributs
		$("div.focus_pic").animate({
    		left:'250px',
    		height:'250px',
    		width:'300px'
  		});

		//toggle() est utilisé pour afficher le contenu du sélecteur <span>
		//"slow" définit la vitesse d'affichage
		$("span").toggle("slow");
	}); 


});

