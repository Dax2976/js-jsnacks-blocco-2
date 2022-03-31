//Snack3
//Generatore di “nomi cognomi” casuali: 
// il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare 
// una falsa lista di invitati con nome e cognome.


let nomi = ['gesu','pippo','pluto','maria']
let cognomi = ['open bar','arrestato','non quella vera','si sono io']

let falsoinvitato;

for( let i = 0; i < nomi.length; i++){
    falsoinvitato = nomi[Math.floor(Math.random()* nomi.length)] + ' ' + cognomi[Math.floor(Math.random() * cognomi.length)]
}

console.log(falsoinvitato)

alert('i nomi sono di pura fantasia')