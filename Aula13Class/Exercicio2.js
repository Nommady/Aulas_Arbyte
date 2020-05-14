var rs = require("readline-sync")
var maiorIdade = []
class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
function cadastrarAluno() {
    var primeiroAluno = new Aluno(
        this.nome = rs.question('Insira o nome do aluno: '),
        this.idade = rs.question('Insira a idade do aluno: '),
    )
    return primeiroAluno;
}
for (var i = 0; i < 3; i++) {
    maiorIdade.push(cadastrarAluno())
}
console.log(maiorIdade)

var maiorIdadeEntreTodos = 0
for (var i = 0; i < maiorIdade.length; i++) {
    var idadeAtual = maiorIdade[i].idade
    if (idadeAtual > maiorIdadeEntreTodos) {
        maiorIdadeEntreTodos = idadeAtual
    }
}
console.log(maiorIdadeEntreTodos)
for (var i = 0; i < maiorIdade.length; i++){
    if (maiorIdadeEntreTodos == maiorIdade[i].idade){
        console.log("o aluno de maior idade é", maiorIdade[i])
    }
}