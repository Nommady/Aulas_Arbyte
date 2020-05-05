var rs = require("readline-sync")

var array1 = []
var array2 = []
var arrayComum = []


for (cont = 0; cont < 5; cont++) {
    var jogardor1 = rs.questionInt("jogardor1 diga um numeros de 1 a 10 ")
    array1.push(jogardor1)

} console.log("Seus numeros foram: ", array1)
for (cont2 = 0; cont2 < 5; cont2++) {
    var jogardor2 = rs.questionInt("jogardor2 Diga um numeros de 1 a 10 ")
    array2.push(jogardor2)

} console.log("Seus numeros foram: ", array2)
array1.filter(function (i) {
    if (array2.includes(i)) {   // se for encontrado um valor nos dois arrays
        arrayComum.push(i)
    }
}); console.log("Os numeros em comum são: ", arrayComum)
