const rs = require("readline-sync")

var texto = rs.question("Digite uma palavra: ")
var separar = texto.split("")
var tamanho = separar.length

for (var i = 0; tamanho >= i; i++) {
    if (separar[i] == "a"){
        separar[i] = separar[i].toUpperCase()
    
    }
}
separar = separar.join('')
console.log(separar)