//Snack4
// Crea un array di numeri interi e fai la somma di tutti gli 
// elementi che sono in posizione dispari


let numberList = [10,21,76,31]
console.log(numberList)

let somma = 0

let auth = false

for( i = 0; i < numberList.length; i++){
    let number = numberList[i]
    if(i % 2 == 0){
        somma += number
    }
} 
console.log(somma)




//-------WHILE SOLUTION---\\


// i = 0

// while(i < numberList.length){
//     let number = numberList[i]
//     if(i % 2 == 0){
//         somma += number
//     }

//  i++
// }

// console.log(somma)

