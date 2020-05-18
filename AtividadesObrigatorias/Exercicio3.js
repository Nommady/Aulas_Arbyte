var rs = require('readline-sync')

var N = rs.questionInt("Diga um numero")
var estrela = "*"

for(var i = 0; i < N; i++){
    estrela = estrela + "*"
    console.log(estrela)
}
