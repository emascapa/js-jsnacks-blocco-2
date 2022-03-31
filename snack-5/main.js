//Snack5 (Bonus)
//Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando 
//ne avrà tanti quanti l’altro.


//inizializzo gli array
let array1 = [];
let array2 = [];

//chiedo all'utente la dimensione degli array
const array1Length = parseInt(prompt('Inserisci la lunghezza dell\'array 1 che vuoi creare'));
const array2Length = parseInt(prompt('Inserisci la lunghezza dell\'array 2 che vuoi creare'));

//elemento stringa che verrà copiato negli array
const arrayElement = 'arrayElement';

//creo array1
for (let i = 0; i < array1Length; i++) {

    array1[i] = arrayElement;
}
console.log(`Il primo array creato ha dimensione ${array1Length}. Eccolo qui:`);
console.log(array1);

//creo array2
for (let i = 0; i < array2Length; i++) {
    
    array2[i] = arrayElement;
}
console.log(`Il secondo array creato ha dimensione ${array2Length}. Eccolo qui:`);
console.log(array2);

let movingElement;

//se i due array somma di dimensione dispari non protrò mai sistemarli in modo da averli di ugual dimensione
if ((array1Length + array2Length) % 2 !== 0) {
    console.log(`Mi dispiace ma anche se mi impegno a spostare gli elementi, i due array non avranno mai la stessa dimensione`);
} else {
    
    //caso array1 > array2
    if (array1Length > array2Length) {
        let arrayFinalLength = (array1Length + array2Length) / 2;
        let numberOfIterations = array1Length - arrayFinalLength;

        let k = 1;

        while (k <= numberOfIterations) {
            movingElement = array1.pop();
            array2.push(movingElement);

            k++
        }

        console.log(`I tuoi nuovi array hanno dimensione ${arrayFinalLength}. Eccoli qui:`);

        console.log(`Array1`);
        console.log(array1);

        console.log(`Array2`);
        console.log(array2);

    } 
    //caso array1 < array2
    else if (array1Length < array2Length) {
        let arrayFinalLength = (array1Length + array2Length) / 2;
        let numberOfIterations = array2Length - arrayFinalLength;

        let k = 1;

        while (k <= numberOfIterations) {
            movingElement = array2.pop();
            array1.push(movingElement);

            k++
        }

        console.log(`I tuoi nuovi array hanno dimensione ${arrayFinalLength}. Eccoli qui:`);

        console.log(`Array1:`);
        console.log(array1);

        console.log(`Array2:`);
        console.log(array2);

    } 
    //caso array1 = array2
    else {
        console.log(`Gli array che hai creato hanno già la stessa dimensione. See you next time`);
    }
}

