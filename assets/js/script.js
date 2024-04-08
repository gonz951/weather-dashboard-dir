const APIKey = 'f12afd4f4aecb8e77f094912f64ed517'; // the api key
// to take stuff from the form
const cityFormEl = document.querySelector('#city-form');
// to get stuff from the input within the form
const nameInputEl = document.querySelector('#cityname');


const formSubmitHandler = function (event) {
    event.preventDefault();

    const cityname = nameInputEl.value.trim();

    if (cityname) {
        // ? should be getCityWeather(cityname)

        // * needs to list container and input as empty
    } else {
        // ! troubleshooter function to keep the 
        // ! code from breaking itself
    }
}

// =========== api stuff ========
// * let city; suggested from api doc but idk


const getCityWeather = function (city) {
    const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
    

    fetch(queryURL)
    .then(function (response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
                // ? displayCity function should be here
                // ! should be displayCity(data, city);
            });
        } else {
            // * suggests an alert for an error
        }
    })
}
