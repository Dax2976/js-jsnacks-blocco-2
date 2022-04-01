//Snack5 (Bonus)
//Crea due array che hanno un numero di elementi diversi.
//Aggiungi elementi all’array che ha meno elementi fino 
//a quando ne avrà tanti quanti l’altro.



let number = [1,2,3,4,5]

let number2 = [1,2,3]


for( i = 0; i < number.length; i++){
    if(number2.length != number.length){
        number2.push(Math.floor(Math.random()*100))
    } 
    else if(number.length != number2.length){
        number.push(Math.floor(Math.random()*100))
    }
       
}

console.log(number)
console.log(number2)



//--------while situation---\\


i = 0 

while( i < number.length){
    if(number2.length != number.length){
        number2.push(Math.floor(Math.random()*100))
    }
    else if(number.length != number2.length){
        number.push(Math.floor(Math.random()*100))
    }   

    i++
}


console.log(number)
console.log(number2)

