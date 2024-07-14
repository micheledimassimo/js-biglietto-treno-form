// Prezzo per KM in euro
const ppKM = 0.21;
console.log('Prezzo per km in euro:', ppKM);




/*




//va applicato uno sconto del 20% per i minorenni



//prezzo normale
if (age >= 18 && age < 65) {
    price = price.toFixed(2);
    console.log('Prezzo: €', price);
    document.getElementById('ticket-price').innerHTML = price;
}


//va applicato uno sconto del 40% per gli over 65.
*/
const infoForm = document.querySelector('form');
infoForm.addEventListener(
    'submit',          // 1° argomento: evento da ascoltare/intercettare
    function (event) { // 2° argomento: definizione di una funzione anonima che verrà eseguita solo quando si verificherà l'evento sull'elemento 
        /* 
            Blocco di codice da eseguire quando si verifica l'evento selezionato
        */
       
        console.log('event', event, typeof event);

        event.preventDefault();

        const trip = document.getElementById('trip');

        console.log('trip.value', trip.value, typeof trip.value);

        let tripInput = parseInt(trip.value);
        const age = document.getElementById('age');
        
        console.log('age.value', age.value, typeof age.value);
        const ageInput = parseInt(age.value);
        console.log('ageInput.value', ageInput, typeof ageInput);

        let price = 0.21 * tripInput;
        console.log('Prezzo:', price);
        
        if (ageInput < 18) {
            price = (price - (price * 0.2)).toFixed(2);
            console.log('Prezzo con 20% sconto: €', price); 
        }
        if (ageInput >= 18 && ageInput < 65) {
            price = price.toFixed(2);
            console.log('Prezzo: €', price);
        }
        if (ageInput >= 65) {
            price = (price - (price * 0.4)).toFixed(2);
            console.log('Prezzo con 40% sconto: €', price);
        }
    }
);