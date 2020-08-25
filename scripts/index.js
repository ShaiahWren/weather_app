
"use strict";
const place = document.getElementById("location");
const temp = document.getElementById("temp");
const humidity = document.querySelector("#humidity");
const min = document.querySelector("#min");
const max = document.querySelector("#max");
const pressure = document.querySelector("#pressure")
const wind = document.querySelector("#wind");
const submitForm = document.querySelector("#submitForm");
const defaultCategory = "Bar Harbor";


const getQuote = (category) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${category}&appid=e08859f6b8eee1854dad216316fd4fc0`

    get(url).then(function(response) {  
        console.log(response);
        place.innerHTML = ` ${response.name}`;
        temp.innerHTML = ` ${kToF(response.main.temp)}\u00B0 F / ${kToC(response.main.temp)}\u00B0 C`;  
        humidity.innerHTML = ` ${response.main.humidity}`;
        min.innerHTML = ` ${kToF(response.main.temp_min)}\u00B0 F / ${kToC(response.main.temp_min)}\u00B0 C`; 
        max.innerHTML = ` ${kToF(response.main.temp_max)}\u00B0 F / ${kToC(response.main.temp_max)}\u00B0 C`; 
        pressure.innerHTML = ` ${response.main.pressure} mb`;
        wind.innerHTML = ` ${response.wind.speed} m/s`;


    })
}


// document.addEventListener('DOMContentLoaded', function (event) {
//     event.preventDefault;
//     getQuote(defaultCategory);

// });

submitForm.addEventListener('click', function (e) {
    e.preventDefault();
    const userInput = document.getElementById("city")
    const category = userInput.value;
    getQuote(category);
});

(function() {
    getQuote(defaultCategory)
})();