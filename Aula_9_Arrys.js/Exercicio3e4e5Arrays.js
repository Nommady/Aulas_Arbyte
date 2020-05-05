var rs = require("readline-sync")

var array1 = []
var array2 = []
var arrayDiferente1 = []
var arrayDiferente2 = []

for (cont = 0; cont < 5; cont++) {
    var jogardor1 = rs.questionInt("jogardor1 diga um numeros de 1 a 10 ")
    array1.push(jogardor1)

} console.log("Seus numeros foram: ", array1)
for (cont2 = 0; cont2 < 5; cont2++) {
    var jogardor2 = rs.questionInt("jogardor2 Diga um numeros de 1 a 10 ")
    array2.push(jogardor2)

} console.log("Seus numeros foram: ", array2)
array1.filter(function (i) {
    if (array2.includes(i)) {   //esta parte ira  mostrar apenas a difereça do J1
        //arrayComum.push(i)
    }else arrayDiferente1.push(i)
}); 
array2.filter(function (i) {
    if (array1.includes(i)) {   // esta parte ira  mostrar apenas a difereça do J2
        //arrayComum.push(i)
    }else arrayDiferente2.push(i)
}); 
var arrayDiferenteJunto = arrayDiferente2.concat(arrayDiferente1) //esta parte ira mostrar a difereça nos dois arrays juntos
console.log("Os numeros diferentes são: ",arrayDiferenteJunto.sort())