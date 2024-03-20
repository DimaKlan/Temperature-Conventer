

const temperatureText = document.getElementById('temperatureText');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
// let temp;

function convert(){

    if(toFahrenheit.checked){

        temp = Number(temperatureText.value);
        temp = (temp * 9 / 5 + 32)
        result.textContent = temp.toFixed(1) + ' °F';

    }else if (toCelsius.checked){

        temp = Number(temperatureText.value);
        temp = ( 5 / 9 * (temp - 32));
        result.textContent = temp.toFixed(1) + ' °C';

    }else{
        result.textContent = 'Select a unit'
    }

}