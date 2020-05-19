var num1 = 1
var num2 = 1000
var soma = []
var resultado = 0
while (num1 < num2){
    if (num1 % 3 == 0 || num1 % 5 == 0){
       soma.push(num1)
    }
    num1++
}
for(var i = 0; i < soma.length; i++){
    resultado = resultado + soma[i]
}
console.log(resultado)