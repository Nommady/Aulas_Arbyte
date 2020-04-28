var rs = require("readline-sync")

var palavra = rs.question("Digite uma palavra ")

    var separar = palavra.split("")
    var juntar = separar.join("\n")
    
console.log(juntar)
 