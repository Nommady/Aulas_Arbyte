var rs = require('readline-sync')


/* Exercicio 1
var anoDeNascimento = rs.questionInt("Diga seu ano de nascimento:")
var anoAtual = rs.questionInt("Diga o ano atual:")
var resultado = anoAtual - anoDeNascimento
if (resultado > 18){
    console.log("Voce ja pode votar")
}else console.log("Voce nao pode votar")
Exercicio 2
var num = rs.questionInt("Diga um numero: ")

if (num % 2 == 0){
    console.log("O  numero é par")
}else console.log("O numero é impar")
Exercicio 3
var senha = 1234
var senhaDigitada = rs.questionInt("Digite a senha: ")

if (senha == senhaDigitada){
    console.log("Acesso Permitido")
}else console.log("Acesso negado")

Exercicio 4
var quantidadeDeMacas = rs.questionInt("Diga a quantidade maças que voce deseja comprar: ")
var preco = 0
if (quantidadeDeMacas > 12) {
    preco = quantidadeDeMacas * 0.25
    console.log("O valor a ser pago é", + preco)
} else console.log("O valor a ser pago é", + (quantidadeDeMacas * 0.30))*/
 //Exercicio 5
var num1 = rs.questionInt("Diga um numero: ")
var num2 = rs.questionInt("Diga outro numero: ")
var num3 = rs.questionInt("Diga mais um numero: ")

if (num1 > num2  && num2 > num3){
    console.log("A sequencia correta é ",num3 ,num2 ,num1)
}else if (num1 > num3 && num3 > num2){
    console.log("A sequencia correta é ",num2 ,num3 ,num1)
}else if (num2 > num1 && num1 > num3){
    console.log("A sequencia correta é ",num3 ,num1 ,num2)
}else if (num2 > num3 && num3 > num1){
    console.log("A sequencia correta é ",num1 ,num3 ,num2)
}else if (num3 > num2 && num2 > num1){
    console.log("A sequencia correta é ",num1 ,num2 ,num3)
}else  console.log("A sequencia correta é ",num2 ,num1 ,num3)
