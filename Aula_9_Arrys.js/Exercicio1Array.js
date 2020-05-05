var rs = require('readline-sync')
var produto = []
var comprar = rs.questionFloat("Diga o valor do produto: ")
produto.push(comprar)
var continuar = rs.question("Possui mais produtos? ").toUpperCase()
var total = 0
while(continuar == "S" || continuar == "SIM"){
    comprar = rs.questionFloat("Diga o valor do produto: ")
    produto.push(comprar)
    continuar = rs.question("Possui mais produtos? ").toUpperCase()
} if (continuar == "N" || continuar == "NAO"){
   produto.forEach(function(valor, indice){
       console.log(`Produto ${indice + 1}: ${valor}`)       
   }) 
} for ( var i = 0; i < produto.length; i++ ){
    total += produto[i];
 }
 console.log("O valor total da compra é: ",total);
 var pagamento = rs.questionFloat("Qual valor sera entregue ao caixa? ")
if (pagamento == total){
    console.log("Voce deu o valor exato, parabens")
}else if (pagamento > total){
    var troco = pagamento - total
    console.log("Voce deu dinheiro a mais aqui esta seu troco de :", troco)
}else if(pagamento < total){
    var falta = total - pagamento
    console.log("Voce deu dinheiro a menos falta ",falta)
}