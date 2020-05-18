var isprime = require('isprime');
var num1 = 1
var num2 = 50

while (num1 < num2){
    if (num1 % 2 == 0){
        if (isprime(num1) == true){
            console.log(`${num1} Par Primo`)
        }else console.log(`${num1} Par`)
    }else if (isprime(num1) == true){
        console.log(`${num1} Impar Primo`)
    }else console.log(`${num1} Impar`)
    num1++
}