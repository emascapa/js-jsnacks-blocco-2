//SNACK 1 
//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.


let sum = 0;
let number;


let i = 0;

console.log(`Inserisci cinque numeri e ti dico la somma`);
while (i < 5) {
    number = parseInt(prompt(`Inserisci un numero (iterazione n° ${i+1})`));
    console.log(`hai inserito ${number} all'iterazione ${i+1}`);

    sum = sum + number;

    i++;
}

console.log(`La somma dei numeri inseriti è ${sum}`);