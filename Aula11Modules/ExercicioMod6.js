var rs = require("readline-sync")
const chalk = require('chalk');

var alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var chave = rs.questionInt("Qual o numero a ser utilizado no algoritimo? ")
var DecodificarOuCOdificar = rs.question("Deseja codificar ou decodificar ").toLowerCase()
var Codificarpalavra = " "
var DecodificarPalavra = " "
var letraChave = 0
var cont = 0
if (DecodificarOuCOdificar == "codificar") {
    Codificarpalavra = rs.question("Diga a palavra a ser codificada ").toUpperCase()
} else if (DecodificarOuCOdificar == "decodificar") {
    DecodificarPalavra = rs.question("Diga o codigo a ser decodificado ").toUpperCase()
}
DecodificarPalavra = DecodificarPalavra.split("")
Codificarpalavra = Codificarpalavra.split("")
while (cont < Codificarpalavra.length) {
    var index = alfabeto.indexOf(Codificarpalavra[cont])
    if (DecodificarOuCOdificar == "codificar") {
        letraChave = (index + chave) % 26
        Codificarpalavra[cont] = alfabeto[letraChave]
    } else if (DecodificarOuCOdificar == "decodificar") {
        letraChave = (index - chave) % 26
        DecodificarPalavra[cont] = alfabeto[letraChave]
    }
    cont++
}
if (DecodificarOuCOdificar == "codificar") {
    console.log(chalk.blue(Codificarpalavra.join("")))
} else if (DecodificarOuCOdificar == "decodificar") {
    console.log(chalk.red(DecodificarPalavra.join("")))
}