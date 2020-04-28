var rs = require("readline-sync")

var quest = rs.question("Escolha a opcao A ou B ")

while (quest == "A" || quest == "a") {
    console.log("Encerrar programa")
    break
} while (quest == "B" || quest == "b") {
    var num = rs.questionInt("Diga um numero: ")
    var num2 = rs.questionInt("Diga outro numero: ")
    var result = num + num2
    console.log("A soma dos numeros é ", result)
    var escolha = rs.question("deseja realizar outra? (Sim ou Nao) ")
    if (escolha == "Nao" || escolha == "nao") {

        break
    }
}
