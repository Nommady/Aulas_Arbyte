var rs = require("readline-sync")
var fs = require("fs")
var carro = fs.readFileSync("./carro.Json")
var carroPronto = JSON.parse(carro)
var garagem = []
carroPronto = garagem
while (true) {
    var IncluirOuExibir = rs.question("Deseja incluir ou exibir? ").toLowerCase()
    if (IncluirOuExibir == "incluir") {
        console.log("Informe os dados do carro: ")
        var carro = {};
        carro.cor = rs.question("Diga a cor do carro: ")
        carro.marca = rs.question("Diga a marca do carro: ")
        carro.modelo = rs.question("Diga o modelo do carro: ")
        garagem.push(carro)        
        var garagemPronta = JSON.stringify(carroPronto)
        var caminhoDoArquivo = './carro2.json';
        fs.writeFileSync(caminhoDoArquivo, garagemPronta);
    } else if ( IncluirOuExibir == "exibir"){
        (console.log(garagem))   
        break
    }
}