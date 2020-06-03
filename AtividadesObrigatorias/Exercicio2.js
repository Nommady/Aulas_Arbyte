//var isprime = require('isprime');
var num1 = 1
var num2 = 50

function calcPrimo(num){
    var divisor = 2
    while (divisor < num){
        if(num % divisor == 0 ){
         return  false
        }
        divisor++
    }
    return true
}

// while (num1 < num2){
//     if (num1 % 2 == 0){
//         if (isprime(num1) == true){
//             console.log(`${num1} Par Primo`)
//         }else console.log(`${num1} Par`)
//     }else if (isprime(num1) == true){
//         console.log(`${num1} Impar Primo`)
//     }else console.log(`${num1} Impar`)
//     num1++
// }

while (num1 < num2){
    if (num1 % 2 == 0){
        if (calcPrimo(num1) == true){
            console.log(`${num1} Par Primo`)
        }else console.log(`${num1} Par`)
    }else if (calcPrimo(num1) == true){
        console.log(`${num1} Impar Primo`)
    }else console.log(`${num1} Impar`)
    num1++
}
