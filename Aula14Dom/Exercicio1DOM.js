//var rs = require("readline-sync")


function enviarFrase (){
    const frase = document.getElementsById("QuebraDeFrase"),
    var fraseSeparada = frase.split(" "),
    for (var i = 0; i < fraseSeparada.length; i++) {
        var lista = document.createElement("li")
        document.body.ul.append = lista
        lista.innerHTML = `<li>${fraseSeparada[i]}</li>`
    }
}