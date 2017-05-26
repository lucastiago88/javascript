//EXEMPLOS com while



var dia = parseInt(prompt("escolha o dia da semana"));
var isNumber = isNaN(dia);
var isNumeroEntre = dia > 1 && dia < 7;
while(!isNumber || !isNumeroEntre ){
	
	 isNumber = isNaN(dia);
	 isNumeroEntre = dia > 1 && dia < 7;
	 alert("Digite numero valido entre  1e 7");
}
	
	switch(dia){
	case 1:
		alert("hoje é Domingo");
	break;
	case 2:
		alert("hoje é Segunda");
	break;
	case 3:
		alert("hoje é terça");
	break;
	case 4:
		alert("hoje é quarta");
	break;
	case 5:
		alert("hoje é quinta");
	break;
	case 6:
		alert("hoje é sexta");
	break;
	case 7:
		alert("hoje é sabado");
	break;
	
	}


