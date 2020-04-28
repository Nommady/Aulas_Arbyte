var rs = require("readline-sync")

var palavra = rs.question("Digite uma palavra ")

    /*var separar = palavra.split("")
    var inverter = separar.reverse("")
    var juntar = inverter.join("")
    
    console.log(juntar)*/
    
    var palavraInvertida = " "
for (var i = palavra.length -1;i >= 0; i--){
    palavraInvertida= palavraInvertida + palavra.charAt(i)
    console.log(i)
}
console.log(palavraInvertida)