//SNACK 1 
//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.


let somma, numero_utente

let up = 1

somma = 0

somma2 = 0

while(up <= 5){
    numero_utente = parseInt(prompt(`inserisci il ${up} numero`))
    somma = somma + numero_utente
    up++
}

console.log(`la somma totale dei tuoi numeri è ${somma}`)


for (i = 1; i <= 5; i++){
    numero_utente = parseInt(prompt(`inserisci il ${i} numero`))
    somma2 = somma2 + numero_utente
}

console.log(`la somma totale dei tuoi numeri è ${somma2}`)

