//Funções

function verificar(diaParaVerificacao){
	
var isNumber = isNaN(diaParaVerificacao);

var isEntre1e7 = diaParaVerificacao => 1 && diaParaVerificacao <= 7;


return (isNumber || !isEntre1e7);	

}

var dia = lerNumero ("Digite um dia");

while(verificar(dia)){}
	
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


