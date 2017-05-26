//Empresa Logistica

var qtdeMinima = parseInt(prompt("Digite a quantidade minima no estoque"));
var qtdeMaxima = parseInt(prompt("Digite a quantidade maxima no estoque"));
var estoque = (qtdeMinima + qtdeMaxima)/2;
alert("Seu estoque médio e: " + estoque);