$(document).ready(function(){
	//test Jquery
	//alert("Jquery fonctionne.") ;

	$("#Bsubmit").hide() ;  // cacher le bouton de submit au début
	$("#correction").hide() ;  // cacher la partie de correction au début

	// en cliquant le bouton FIN
	$("#fin").click(function() {
		$("#Bsubmit").show() ;  // afficher le bouton SUBMIT
		$("#fin").hide() ;  // cacher le bouton finir
		$("#questionnaire").hide() ;  // cacher la partie de questionnaire
		$("#correction").show() ;  // afficher la partie de correction au début
		$("h4").hide();

		// construire l'affichage de la saisie
		$("#correction").append("<legend>Correction du questionnaire</legend>");
		$("#correction").append('<div id="recapitulatif"></div>');

		// affichage des réponses et corrections de chaque question
		// choisissez la bonne réponse
		// Q1 --------------------------------------
		var reponseQ1 = $("input:radio[name='Q1']:checked").val() ;
		$("#recapitulatif").append("<p id='Q1'><b>Q1 :</b> Le petit Nouvel An est _________ avant le Nouvel An chinois.<br/><b>Votre réponse : </b> " + reponseQ1 + "</p>");
				
		// tester si la réponse est bonne
		if(reponseQ1 === 'B. une semaine') {
			// ajouter les information dans la balise avec id Q1
			$("#Q1").append("<br/><span id='R1'>Correct !!!</span>");
			// décorer le retour avec un style de classe
			$("#R1").addClass("correct");
		}
		else{
			// sinon
			$("#Q1").append("<br/><span id='R1'>Incorrect.<br/><b>La bonne réponse :</b> B. une semaine</span>");
			$("#R1").addClass("incorrect");
		}

		// Q2 ---------------------------------------
		var reponseQ2 = $("input:radio[name='Q2']:checked").val() ;
		$("#recapitulatif").append("<p id='Q2'><b>Q2 :</b> La fête du printemps se déroule sur _________.<br/><b>Votre réponse : </b> " + reponseQ2 + "</p>");
				
		// tester si la réponse est bonne
		if(reponseQ2 === 'D. quinze jours') {
			$("#Q2").append("<br/><span id='R2'>Correct !!!</span>");
			$("#R2").addClass("correct");
		}
		else{
			// sinon
			$("#Q2").append("<br/><span id='R2'>Incorrect.<br/><b>La bonne réponse :</b> D. quinze jours</span>");
			$("#R2").addClass("incorrect");
		}

		// Q3 ---------------------------------------
		var reponseQ3 = $("input:radio[name='Q3']:checked").val() ;
		$("#recapitulatif").append("<p id='Q3'><b>Q3 :</b> La fête du printemps s’achèvent avec _________.<br/><b>Votre réponse : </b> " + reponseQ3 + "</p>");
				
		// tester si la réponse est bonne
		if(reponseQ3 === 'A. la fête des lanternes') {
			$("#Q3").append("<br/><span id='R3'>Correct !!!</span>");
			$("#R3").addClass("correct");
		}
		else{
			// sinon
			$("#Q3").append("<br/><span id='R3'>Incorrect.<br/><b>La bonne réponse :</b> A. la fête des lanternes</span>");
			$("#R3").addClass("incorrect");
		}

		// Q4 ---------------------------------------
		var reponseQ4 = $("input:radio[name='Q4']:checked").val() ;
		$("#recapitulatif").append("<p id='Q4'><b>Q4 :</b> Le repas de Nouvel An se passe au soir du _________.<br/><b>Votre réponse : </b> " + reponseQ4 + "</p>");
				
		// tester si la réponse est bonne
		if(reponseQ4 === 'B. réveillon') {
			$("#Q4").append("<br/><span id='R4'>Correct !!!</span>");
			$("#R4").addClass("correct");
		}
		else{
			// sinon
			$("#Q4").append("<br/><span id='R4'>Incorrect.<br/><b>La bonne réponse :</b> B. réveillon</span>");
			$("#R4").addClass("incorrect");
		}

		// Q5 ---------------------------------------
		var reponseQ5 = $("input:radio[name='Q5']:checked").val() ;
		$("#recapitulatif").append("<p id='Q5'><b>Q5 :</b> Nous servons en principe un plat de raviolis au dîner du réveillon, car leur forme évoque celle des __________ (yuánbǎo en chinois).<br/><b>Votre réponse : </b> " + reponseQ5 + "</p>");
				
		// tester si la réponse est bonne
		if(reponseQ5 === 'C. lingots anciens') {
			$("#Q5").append("<br/><span id='R5'>Correct !!!</span>");
			$("#R5").addClass("correct");
		}
		else{
			// sinon
			$("#Q5").append("<br/><span id='R5'>Incorrect.<br/><b>La bonne réponse :</b> C. lingots anciens</span>");
			$("#R5").addClass("incorrect");
		}

		// Vrai ou Faux
		//Q6 ---------------------------------------
		var reponseQ6 = $("input:radio[name='Q6']:checked").val() ;
		$("#recapitulatif").append("<p id='Q6'><b>Q6 :</b> Le Nouvel An chinois dans le calendrier grégorien reste toujours sur la même date chaque année.<br/><b>Votre réponse : </b> " + reponseQ6 + "</p>");
				
		// tester si la réponse est bonne
		if(reponseQ6 === 'Faux') {
			$("#Q6").append("<br/><span id='R6'>Correct !!!</span>");
			$("#R6").addClass("correct");
		}
		else{
			// sinon
			$("#Q6").append("<br/><span id='R6'><b>Incorrect.</b> Cette phrase est fausse.</span><br/><b>Correction : </b>Le calendrier chinois étant un calendrier luni-solaire. La date du Nouvel An chinois dans le calendrier grégorien varie d'une année sur l'autre, mais tombe toujours entre le 21 janvier et le 19 février.");
			$("#R6").addClass("incorrect");
		}

		//Q7 ---------------------------------------
		var reponseQ7 = $("input:radio[name='Q7']:checked").val() ;
		$("#recapitulatif").append("<p id='Q7'><b>Q7 :</b> La bête NIAN est un animal féroce et maléfique, elle craigne la couleur rouge.<br/><b>Votre réponse : </b> " + reponseQ7 + "</p>");
				
		// tester si la réponse est bonne
		if(reponseQ7 === 'Vrai') {
			$("#Q7").append("<br/><span id='R7'>Correct !!!</span>");
			$("#R7").addClass("correct");
		}
		else{
			// sinon
			$("#Q7").append("<br/><span id='R7'><b>Incorrect.</b> Cette phrase est vraie.</span>");
			$("#R7").addClass("incorrect");
		}

		//Q8 ---------------------------------------
		var reponseQ8 = $("input:radio[name='Q8']:checked").val() ;
		$("#recapitulatif").append("<p id='Q8'><b>Q8 :</b> La première journée est théoriquement consacrée à l'activité qui s'appelle « saluer l’année », la visite chez les personnes importantes.<br/><b>Votre réponse : </b> " + reponseQ8 + "</p>");
				
		// tester si la réponse est bonne
		if(reponseQ8 === 'Vrai') {
			$("#Q8").append("<br/><span id='R8'>Correct !!!</span>");
			$("#R8").addClass("correct");
		}
		else{
			// sinon
			$("#Q8").append("<br/><span id='R8'><b>Incorrect.</b> Cette phrase est vraie.</span>");
			$("#R8").addClass("incorrect");
		}

		// récupérer les réponses de Q9 et Q10
		//Q9 ---------------------------------------
		var reponseQ9 = $.trim($("#Q9").val());
		// seulement quand la zone n'est pas vide
		if(reponseQ9 != "") {
			$("#recapitulatif").append("<p><b>Q9 :</b> Pourquoi le poisson doit être présent à chaque repas de Nouvel An chinois ?<br/><b>Votre réponse : </b> " + reponseQ9 + "<br/><b>Une autre réponse possible de Q9 :</b> le poisson ( 鱼 yú), homophone de surplus ( 余 yú), doit être présent à chaque repas de Nouvel An pour garantir qu’il y aura du surplus tous les ans et qu’on ne manquera jamais de rien.</p>");
		}

		else {
			$("#recapitulatif").append("<p><b>Q9 :</b> Vous n'avez pas répondu à cette question.</p>");
		}

		//Q10 ---------------------------------------
		var reponseQ10 = $.trim($("#Q10").val());
		// seulement quand la zone n'est pas vide
		if(reponseQ10 != "") {
			$("#recapitulatif").append("<p><b>Q10 :</b> À qui les aînés distribuent les étrennes contenues dans des enveloppes rouges ? et quelle est sa valeur symbolique ?<br/><b>Votre réponse : </b> " + reponseQ10 + "<br/><b>Une autre réponse possible de Q10 :</b> des enveloppes rouges (étrennes) contenant de l’argent sont offertes. Traditionnellement, elles étaient distribuées par les aînés aux enfants et aux jeunes non mariés, et avaient surtout la valeur symbolique de porter chance durant toute la nouvelle année.</p>");
		}

		else {
			$("#recapitulatif").append("<p><b>Q10 :</b> Vous n'avez pas répondu à cette question.</p>");
		}

	});

	// après le clique de submit, afficher un rappel
	$('input[type="submit"]').click(function(){
		alert("Vos réponses a été soumis.") ;
	});

}) ;