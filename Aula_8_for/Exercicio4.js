const rs = require("readline-sync")


for (var i = 0; i <= 5; i++) {
    var nome = rs.question("Diga seu nome: ")
    var notaA = rs.questionFloat("Diga sua primeira nota: ")
    var notaB = rs.questionFloat("Diaga sua segunda nota: ")
    var media = ((notaA * 3) / 10) + ((notaB * 7) / 10)
    console.log(" O aluno ", nome, "tem uma media ", media)
}