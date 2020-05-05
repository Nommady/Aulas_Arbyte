var rs = require("readline-sync")

var vogais = ["a","e","i","o","u"]
var vogalDigitada = []
var consoantes = []
var palavra = rs.question("Digite uma palavra: ").toLowerCase()
var separandoEmArray = palavra.split("")

separandoEmArray.filter(function (i) {
    if (vogais.includes(i)) {  
        vogalDigitada.push(i)
    }else consoantes.push(i)
})
console.log(vogalDigitada.length, "Vogais")
console.log(consoantes.length, "Consoantes")