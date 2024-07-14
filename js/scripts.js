// Prezzo per KM in euro
const ppKM = 0.21;
console.log('Prezzo per km in euro:', ppKM);




const infoForm = document.querySelector('form');
infoForm.addEventListener(
    'submit',          
    function (event) { 
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
            document.getElementById('ticket-price').innerHTML = price;
        }
        if (ageInput >= 18 && ageInput < 65) {
            price = price.toFixed(2);
            console.log('Prezzo: €', price);
            document.getElementById('ticket-price').innerHTML = price;
        }
        if (ageInput >= 65) {
            price = (price - (price * 0.4)).toFixed(2);
            console.log('Prezzo con 40% sconto: €', price);
            document.getElementById('ticket-price').innerHTML = price;
        }

    }
);