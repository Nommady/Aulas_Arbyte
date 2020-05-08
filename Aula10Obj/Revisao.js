var rs = require("readline-sync")

/* Exercicio 9
var nome = rs.question("Diga seu nome: ")

var TerceiraLetraDoNome = nome.charAt(2)

console.log(TerceiraLetraDoNome)

Exercicio 10
var palavra = rs.question("Digite uma palavra: ")

var fim = palavra.endsWith("al")

if (fim == true){
    console.log(palavra)
}else console.log("Palavra nao identificada")

Exercicio 11
var palavra = rs.question("Digite uma palavra: ")

var inclui = palavra.includes("np","nb")

if (inclui == true){
    console.log("Aprende a escrever")
}else console.log("A palavra esta correta")

Exercicio 12
var palavra = rs.question("Digite uma palavra: ").toLowerCase()

var inclui = palavra.indexOf("a","e", "i", "o", "u")

if (inclui == true){
    console.log("A palavra possui vogais")
}else console.log("A palavra nao possui vogais")

Exercicio 13

var palavra = rs.question("Digite uma frase: ").toLowerCase().split(" ")
var frasePronta = ""
for (var i = 0; i < palavra.length; i++){
    if (palavra[i] == "antilope"){
        palavra[i] = " Kobus ellipsiprymnus "
        frasePronta = palavra
    }
}
console.log(frasePronta.toString())
Exercicio 13 pt2
var palavra = rs.question("Digite uma frase: ").toLowerCase()
var inclui = palavra.replace("antilope", "Kobus ellipsiprymnus")
console.log(inclui)

Exercicio 14
var data = rs.question("Digite uma data seguindo o exemplo xx/xx/xxxx: ").split('/')
var dataImpressa = ["Dia", "Mes", "Ano"]
var cont = 0

while (cont < dataImpressa.length){
    console.log(dataImpressa[cont]," : ",data[cont])
    cont++
}

Exercicio 15
var palavra = rs.question("Digite uma frase: ").split("")
var vogais = ["a", "e", "i", "o", "u"]
var palavraFinal = []
   
    palavra.filter(function (i) {
        if (vogais.includes(i)) {   
        }else palavraFinal.push(i)
    }); 
    
    console.log(palavraFinal.join(""))
Exercicio 16
    var palavra = rs.question("Digite uma frase: ").toLowerCase()
    var inclui = palavra.startsWith("google")
    
    if (inclui == true){
        console.log("Palavra valida")
    }else console.log("Serviço nao conhecido")
Exercicio 17
    var palavra = rs.question("Digite uma frase: ").toUpperCase()
    console.log(palavra)
Exercicio 18
    var palavra = rs.question("Digite uma frase: ").toLowerCase()
    console.log(palavra)
    Exercicio 19
    var palavra = rs.question("Digite uma frase: ").trim()
    console.log(palavra)*/

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
    } else if (DecodificarOuCOdificar == "decodificar") {
        letraChave = (index - chave) % 26
    }
    Codificarpalavra[cont] = alfabeto[letraChave]
    cont++
}
if (DecodificarOuCOdificar == "codificar") {
    console.log(Codificarpalavra.join(""))
} else if (DecodificarOuCOdificar == "decodificar") {
    console.log(DecodificarPalavra.join(""))
}