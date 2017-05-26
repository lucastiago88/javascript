//ganho juros

var deposito = parseFloat(prompt("Digite seu déposito"));
var taxaJuros = parseFloat(prompt("Digite a taxa "));

var taxa = 1 +(taxaJuros/100);

var meuArrRendimento = [];

for(var i = 0; i < 24; i++){
	
	if(i==0){
		
		meuArrRendimento[i] = deposito * taxa;
		
	}else{
		
		meuArrRendimento[i] = meuArrRendimento[i-1] * taxa;
	}
	
	console.log(meuArrRendimento[i]);
}
