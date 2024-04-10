const APIKey = 'f12afd4f4aecb8e77f094912f64ed517'; // the api key
// to take data from the form
const cityFormEl = document.querySelector('#city-form');
// to get city data from the input within the form
const nameInputEl = document.querySelector('#cityname');
const weatherContainerEl = document.querySelector('#dashboard');
const citySearchTerm = document.querySelector('#city-inventory');

const formSubmitHandler = function (event) {
    event.preventDefault();

    const cityname = nameInputEl.value.trim();

    if (cityname) {
        getCityWeather(cityname);

        // * needs to list container and input as empty
        weatherContainerEl.textContent = '';
        nameInputEl.value = '';
    } else {
        alert('Please enter a city name.');
    }
};

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
    .catch (function (error) {
        // * Suggests an alert('error message') here
    });
};

const displayCity = function (cities, searchTerm) {
    // if there are no cities, display 'cities not found'
    // return
    if (cities.length === 0) {
        weatherContainerEl.textContent = 'No cities found.';
        return;
    }

    // make the citysearchterm text content 
    // be the search term into from here 
    citySearchTerm.textContent = searchTerm;

    for (let weather of cities ) {
        const element = array[index];
        
    }
}

// todo: submit handlers ============

cityFormEl.addEventListener('submit', formSubmitHandler);
console.log(formSubmitHandler())