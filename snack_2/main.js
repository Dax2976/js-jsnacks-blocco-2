//Snack2
//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo.

let numeroInput = parseInt(prompt("inserisci numero")); 

if(numeroInput % 2 == 0) {
    console.log(numeroInput)
} else {
    numeroInput += 1
    console.log(numeroInput)
}
