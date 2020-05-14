var rs = require("readline-sync")
class Garagem {
    constructor(nome, modelo, marca, cor) {
        this.nome = nome,
            this.modelo = modelo,
            this.marca = marca,
            this.cor = cor
    }
}
function CriaDoisCarros() {
    var carro1 = new Garagem(
        this.nome = rs.question("Diga o nome do carro: "),
        this.modelo = rs.question("Diga o modelo do carro: "),
        this.marca = rs.question("Diga a marca do carro: "),
        this.cor = rs.question("Diga a cor do carro: ")
    )
    console.log(carro1)
    var carro2 = new Garagem(
        this.nome = rs.question("Diga o nome do carro: "),
        this.modelo = rs.question("Diga o modelo do carro: "),
        this.marca = rs.question("Diga a marca do carro: "),
        this.cor = rs.question("Diga a cor do carro: ")
    )
    console.log(carro2)
    if (carro1.marca == carro2.marca && carro1.modelo == carro2.modelo) {
        console.log("Os carros sao iguais")
    } else console.log("Os carros nao sao iguais")
}
CriaDoisCarros()