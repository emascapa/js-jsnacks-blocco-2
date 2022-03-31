//Snack3
//Generatore di “nomi cognomi” casuali: il Grande Gatsby 
//ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.


//dichiaro le variaili array
const nameArray = [
    'Aldo',
    'Giovanni',
    'Giacomo',
    'Anna',
    'Meredith',
    'Willy',
    'Pippo',
    'Ulisse',
    'Pikachu',
    'Laura'
];

const surnameArray = [
    'Rossi',
    'Palladio',
    'Baudo',
    'Scaramellozzi',
    'Wonka',
    'Palmer',
    'Gates',
    'Semprini',
    'Doe',
    'Elric',
    'Piccinini',
    'Robertson',
    'Grifone',
];

//salvo in una variabile la grandezza degli array inizializzati
const nameArrayLength = nameArray.length;
const surnameArrayLength = surnameArray.length;

//chiedo all'utente quanti persone vuole invitare
const guestsNumber = parseInt(prompt('*GENERATORE CASUALE DI INVITATI* Quante persone vuoi invitare?'));

//inizializzo array invitati
let guestArray = [];

//inizializzo le variabili che verranno sovrascritte a ogni ciclo
let guest;

let randomName;
let randomSurname;

//ciclo per generare gli invitati
for (let i = 1; i <= guestsNumber; i++) {

    //creo indici di array casuali
    randomName = Math.floor(Math.random() * nameArrayLength);
    randomSurname = Math.floor(Math.random() * surnameArrayLength);

    guest = `${nameArray[randomName]} ${surnameArray[randomSurname]}`;

    guestArray.push(guest);

}

console.log(`Ecco la tua lista di invitati`);
console.log(guestArray);

/* console.log(typeof guestArray) */