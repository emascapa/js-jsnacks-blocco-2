//Snack2
//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo.

//chiedo quanti numeri l'utente voglia inserire
const digitsToAsk = parseInt(prompt('Quanti numeri vuoi digitare? ti stampo in console solo quelli pari'));

let digit;


//ciclo for tante volte quanto il valore inserito dall'utente
for (let i = 1; i <= digitsToAsk; i++) {

    //l'utente inserisce il numero da verificare
    digit = parseInt(prompt(`Inserisci un numero [${i}/${digitsToAsk}]`));

    //è pari? 
    if (digit % 2 === 0) {
        console.log(`${digit} è pari YEAH!`);
    } 
    //è dispari?
    else {
        console.log(`Non hai inserito un numero pari mi disp`);
        console.log(`Il numero pari successivo a quello da te inserito (${digit}) è ${digit + 1}`);
    }


}