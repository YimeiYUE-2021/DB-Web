$(document).ready(function(){

	//test Jquery
	//alert("Jquery fonctionne.") ;

	// l'affichage de la page initiale
	$(".partie1").show() ;
	$(".partie2").hide() ;
	$(".partie3").hide() ;
	$("#b1").show() ;
	$("#b2").hide() ;
	$("#b3").hide() ;
	$("#b4").hide() ;
	$("#fini").hide() ;
	$("#modifier").hide() ;
	$("#reponses").hide() ;
	$("#Bsubmit").hide() ;

	// animation avec les cliques sur chaque bouton
	// bouton 1 suivant dans page 1
	$("#b1").click(function(){
		$("#b1").hide() ;
		$("#b2").show() ;
		$("#b3").show() ;
		$("#b4").hide() ;
		$("#fini").hide() ;
		$("#modifier").hide() ;
		$("#Bsubmit").hide() ;
		$(".partie1").hide() ;
		$(".partie2").show() ;
		$("#parler_chinois").hide() ;
		$(".partie3").hide() ;
		$("h3").show();
		$("#reponses").hide() ;

	});

	// bouton 2 précédent dans page 2
	$("#b2").click(function(){
		$("#b1").show() ;
		$("#b2").hide() ;
		$("#b3").hide() ;
		$("#b4").hide() ;
		$("#fini").hide() ;
		$("#modifier").hide() ;
		$("#Bsubmit").hide() ;
		$(".partie1").show() ;
		$(".partie2").hide() ;
		$(".partie3").hide() ;
		$("h4").show();
		$("#reponses").hide() ;
	});

	// bouton 3 suivant dans page 2
	$("#b3").click(function(){
		$("#b1").hide() ;
		$("#b2").hide() ;
		$("#b3").hide() ;
		$("#b4").show() ;
		$("#fini").show() ;
		$("#modifier").hide() ;
		$("#Bsubmit").hide() ;
		$(".partie1").hide() ;
		$(".partie2").hide() ;
		$(".partie3").show() ;
		$("#gout_culture").hide() ;
		$("h4").show();
		$("#reponses").hide() ;
	});

	// bouton 4 précédent dans page 3
	$("#b4").click(function(){
		$("#b1").hide() ;
		$("#b2").show() ;
		$("#b3").show() ;
		$("#b4").hide() ;
		$("#fini").hide() ;
		$("#modifier").hide() ;
		$("#Bsubmit").hide() ;
		$(".partie1").hide() ;
		$(".partie2").show() ;
		$("#parler_chinois").hide() ;
		$(".partie3").hide() ;
		$("#recapitulatif").hide() ;
		$("h4").show();
		$("#reponses").hide() ;
	});

	// bouton fin dans page 3
	$("#fini").click(function(){
		$("#b1").hide() ;
		$("#b2").hide() ;
		$("#b3").hide() ;
		$("#b4").hide() ;
		$("#fini").hide() ;
		$("#modifier").show() ;
		$("#Bsubmit").show() ;
		$(".partie1").hide() ;
		$(".partie2").hide() ;
		$("#parler_chinois").hide() ;
		$(".partie3").hide() ;
		$("#recapitulatif").show() ;
		$("h4").hide();
		$("#reponses").show() ;

		// ajouter une tête pour indiquer que c'est le récapitulatif de sondage

		// construire l'affichage de la saisie
		$("#reponses").append("<legend>Récapitulatif du sondage</legend>");
		$("#reponses").append('<div id="recapitulatif"></div>');

		// questions de la prmière partie
		var nom = $( "#nom" ).val();
		$("#recapitulatif").append("<p><b>Nom : </b>" + nom + "</p>");

		var prenom = $( "#prenom" ).val();
		$("#recapitulatif").append("<p><b>Prénom : </b>" + prenom + "</p>");

		var email = $( "#email" ).val();
		$("#recapitulatif").append("<p><b>Adresse e-mail : </b>" + email + "</p>");

		var naissance = $( "#annee_naissance" ).val();
		$("#recapitulatif").append("<p><b>Année de naissance : </b>" + naissance + "</p>");

		// récupérer la valeur d'option choisie
		var nation = $( "#nationalite" ).val();
		$("#recapitulatif").append("<p><b>Nationalité : </b>" + nation + "</p>");

		// récupérer la valeur d'option choisie dans la liste sans valeur donnée à chaque option
		var metier = $( "select#profession option:checked" ).val();
		$("#recapitulatif").append("<p><b>Métier : </b>" + metier + "</p>");

		// l'affichage des réponses de deuxième partie
		var parler_chinois = $("input:radio[name='parler_chinois']:checked").val() ;
		$("#recapitulatif").append("<p><b>Vous parlez le chinois ?</b> " + parler_chinois + "</p>");

		// afficher les suivants si OUI 
		if(parler_chinois === 'oui') {
			var maternel = $("input:radio[name='chinois_maternel']:checked").val() ;
			$("#recapitulatif").append("<p><b>Votre langue maternelle est le chinois ?</b> " + maternel + "</p>");
			
			// afficher les suivants si NON
			if(maternel === 'non') {
				var temps_etudes = $( "#temps_etudier_chinois" ).val();
				$("#recapitulatif").append("<p><b>Vous l'avez étudié pour combien de temps : </b>" + temps_etudes + "</p>");

				// récupérer les données textuelles d'un checkBox
				var maniere_etude = [];
				$.each($("input:checkbox[name='maniere_etude']:checked"), function() {  // parcourir les éléments choisiq de check box
					maniere_etude.push("<li>"+$(this).val()+"</li>");  // mettre les valeurs d'éléments dans la liste
				}) ;
				// afficher le choix de cases à cocher dans une liste de puce
				$("#recapitulatif").append("<p><b>Comment avez-vous étudié le chinois : </b><br/><ul>" + maniere_etude.join("<br/>") + "</ul></p>");

				// récupérer les données textuelles d'un textarea
				var autre_etudes = $.trim($("#autres_manieres").val());
				
				// seulement quand la zone n'est pas vide
				if(autre_etudes != "") {
					$("#recapitulatif").append("<p><b>D'autre manières d'étudier le chinois : </b><br/>" + autre_etudes + "</p>");
				}
			}
		}

		// l'affichage de la troisième partie
		var gout_culture = $("input:radio[name='gout_culture']:checked").val() ;
		$("#recapitulatif").append("<p><b>Vous intéressez-vous à la Chine ou la culture chinoise ?</b> " + gout_culture + "</p>");

		// afficher les suivants si OUI 
		if(gout_culture === 'oui') {
			// récupérer les données textuelles d'un checkBox
			var nom_fete = [];
			$.each($("input:checkbox[name='fete_chinoise']:checked"), function() {  // parcourir les éléments choisiq de check box
				nom_fete.push("<li>"+$(this).val()+"</li>");  // mettre les valeurs d'éléments dans la liste
			}) ;
			// afficher le choix de cases à cocher dans une liste de puce
			$("#recapitulatif").append("<p><b>Quelles fêtes chinoises connaissez-vous :</b><br/><ul>" + nom_fete.join("<br/>") + "</ul></p>");
			}

		var viste_chine = $("input:radio[name='viste_chine']:checked").val() ;
		$("#recapitulatif").append("<p><b>Est-ce que vous avez déjà visité la Chine ?</b> " + viste_chine + "</p>");

		// afficher les suivants si OUI 
		if(viste_chine === 'oui') {
			// récupérer les données textuelles d'un textarea
			var autre_histoire = $.trim($("#autre_histoire").val());
			// seulement quand la zone n'est pas vide
			if(autre_histoire != "") {
				$("#recapitulatif").append("<p><b>Vos expériences ou histoires (concernant la Chine) : </b><br/>" + autre_histoire + "</p>");
			}
		
			// réponse oui ou non de question visite pendant la fête
			var viste_fete = $("input:radio[name='deja_visite']:checked").val() ;
			$("#recapitulatif").append("<p><b>Avez-vous visité la Chine pendant la fête du printemps ?</b> " + viste_fete + "</p>");

			if(viste_fete === 'oui') {
				// récupérer les données textuelles d'un textarea
				var impression = $.trim($("#impression").val());
				// seulement quand la zone n'est pas vide
				if(impression != "") {
					$("#recapitulatif").append("<p><b>Vos impressions la Fête du Printemps : </b><br/>" + impression + "</p>");
				}
			}
		}
	});

	// bouton Modifier dans page récapitulatif
	$("#modifier").click(function(){
		$("#reponses").hide() ;
		$("#reponses legend").remove() ;
		$("#recapitulatif").remove() ;
		$("#b1").hide() ;
		$("#b2").hide() ;
		$("#b3").hide() ;
		$("#b4").show() ;
		$("#fini").show() ;
		$("#modifier").hide() ;
		$("#Bsubmit").hide() ;
		$(".partie1").hide() ;
		$(".partie2").hide() ;
		$(".partie3").show() ;
		$("#gout_culture").hide() ;
		$("h4").show();
	});

	// animation avec les choix de chaque qustion
	$('input[type="radio"]').click(function(){
		// pour tester le contenu d'une variable, faire comme suivant
		//alert(variable) ;
		//console.log("valeur de varaible : " + vrariable) ;

		// deuxième partie du formulaire
		// Q : Vous parlez le chinois ?
		var parler_chinois = $("input[name='parler_chinois']:checked").val();
		if(parler_chinois === 'oui') {
			$("#parler_chinois").show() ;
			$("#chinois_non_maternel").hide() ;
		};
		if(parler_chinois === 'non') {
			$("#parler_chinois").hide() ;
		};
	
		// Q : Votre langue maternelle est le chinois ?
		var chinois_maternel = $("input[name='chinois_maternel']:checked").val();
		if (chinois_maternel === 'oui'){
			$("#chinois_non_maternel").hide() ;
		};
		if (chinois_maternel === 'non'){
			$("#chinois_non_maternel").show() ;
		};

		// troisième partie du formulaire
		// Q : Vous intéressez-vous à la Chine ou la culture chinoise ?
		var gout_culture = $("input[name='gout_culture']:checked").val();
		if (gout_culture === 'oui'){
			$("#gout_culture").show() ;
			$("#fetes").show() ;
			$("#viste_chine").show() ;
			$("#deja_visite").hide() ;
			$("#autre_raconte").hide() ;
			$("#impression_fete_printemps").hide() ;
		};

		if (gout_culture === 'non'){
			$("#gout_culture").hide() ;
		};

		// Q : Est-ce que vous avez déjà visité la Chine ?
		var viste_chine = $("input[name='viste_chine']:checked").val();
		if (viste_chine === 'oui'){
			$("#deja_visite").show() ;
			$("#autre_raconte").show() ;
			$("#impression_chine").show() ;
		};
		
		if (viste_chine === 'non'){
			$("#deja_visite").hide() ;
			$("#autre_raconte").hide() ;
			$("#impression_chine").hide() ;
		};

		// Q : Avez-vous visité la Chine pendant la fête du printemps ?
		var deja_visite = $("input[name='deja_visite']:checked").val();
		if (deja_visite === 'oui'){
			$("#impression_fete_printemps").show() ;
		};
		
		if (deja_visite === 'non'){
			$("#impression_fete_printemps").hide() ;
		};

	});

	// après le clique de submit, afficher un rappel
	$('input[type="submit"]').click(function(){
		alert("Vos réponses a été soumis.") ;
	});


	// partie d'autocomplete
	var titres = {
		data: ["Mme.", "M."]
	};

	$("#nom").easyAutocomplete(titres);

	var mails = {
		data: ["@gmail.com", "@gmail.fr", "@hotmail.com", "@hotmail.fr"]
	};

	$("#email").easyAutocomplete(mails);

});

