function texte1() {
	console.log('Text1');
	$('.valeur1').fadeTo(3000, 1.0).fadeTo(3000, 0.0);
	$('.valeur2').fadeTo(3000, 1.0).fadeTo(3000, 0.0);
	$('.valeur3').fadeTo(3000, 1.0).fadeTo(3000, 0.0);
};
function texte2() {
	$('.valeur4').fadeTo(3000, 1.0).fadeTo(3000, 0.0);
	$('.valeur5').fadeTo(3000, 1.0).fadeTo(3000, 0.0);
	$('.valeur6').fadeTo(3000, 1.0).fadeTo(3000, 0.0);

};
function texte3() {
	$('.valeur7').fadeTo(3000, 1.0).fadeTo(3000, 0.0);
	$('.valeur8').fadeTo(3000, 1.0).fadeTo(3000, 0.0);
	$('.valeur9').fadeTo(3000, 1.0).fadeTo(3000, 0.0);

};


var funct = "texte1";
$('.valeur1').fadeTo(1, 0.0);
$('.valeur2').fadeTo(1, 0.0);
$('.valeur3').fadeTo(1, 0.0);
$('.valeur4').fadeTo(1, 0.0);
$('.valeur5').fadeTo(1, 0.0);
$('.valeur6').fadeTo(1, 0.0);
$('.valeur7').fadeTo(1, 0.0);
$('.valeur8').fadeTo(1, 0.0);
$('.valeur9').fadeTo(1, 0.0);

var MaBoucle = setInterval(function() {
	if (funct == "texte1")
	{
		texte1();
		funct ="texte2";
	}
	else if (funct == "texte2")
	{
		texte2();
		funct ="texte3";
	}
	else
	{
		texte3();
		funct = "texte1";
	}


}, 7000); // 7s