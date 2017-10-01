function texte1() {
	console.log('Text1');
	$('.valeur1').fadeTo(3000, 1.0).fadeTo(3000, 0.0, texte1);
	$('.valeur2').fadeTo(3000, 1.0).fadeTo(3000, 0.0, texte1);
	$('.valeur3').fadeTo(3000, 1.0).fadeTo(3000, 0.0, texte1);
};
function texte2() {
	console.log('Text2');
	$('.valeur4').fadeTo(3000, 1.0).fadeTo(3000, 0.0, texte2);
	$('.valeur5').fadeTo(3000, 1.0).fadeTo(3000, 0.0, texte2);
	$('.valeur6').fadeTo(3000, 1.0).fadeTo(3000, 0.0, texte2);

};


var funct = "texte1";

var MaBoucle = setInterval(function() {
	// arret
	// clearInterval(MaBoucle);


	console.log("Execution", funct);

	if (funct == "texte1")
	{
		texte1();
		funct = "texte2";
	}
	else
	{
		texte2();
		funct = "texte1";
	}


}, 19000); // 7s