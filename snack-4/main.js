//Snack4
//Crea un array di numeri interi e fai la somma di tutti gli elementi che 
//sono in posizione dispari


const arrayLength = parseInt(prompt('Inserisci la lunghezza dell\'array che vuoi creare'));

let myArray = [];

let digit;

for (let i = 1; i <= arrayLength; i++) {

    digit = parseInt(prompt(`Inserisci un numero da inserire nell'array [${i}/${arrayLength}]`));

    myArray.push(digit);
}

console.log('Ecco l\'array che hai creato');
console.log(myArray);

let sum = 0;

for (let i = 0; i < arrayLength; i++) {

    if (i % 2 !== 0) {
        sum = sum + myArray[i];

    }
}

console.log('Ed ecco la somma delle cifre nelle posizioni dispari (si parte da 0 come Javascript dice)');
console.log(sum);