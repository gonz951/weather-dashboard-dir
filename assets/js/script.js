const APIKey = 'f12afd4f4aecb8e77f094912f64ed517'; // the api key
// to take data from the form
const cityFormEl = document.querySelector('#city-form');
// to get city data from the input within the form
const nameInputEl = document.querySelector('#cityname');
// This is the container for the weather cards
const weatherContainerEl = document.querySelector('#dashboard');
// Const to be used to store the search term buttons
const citySearchTerm = document.querySelector('#city-inventory');

// Might need to append to these later
const mainDayCard = document.querySelector('#day-card');
const minorWeekCard = document.querySelector('#week-card');

// ? Local storage element for the buttons later
let cityStorage = JSON.parse(localStorage.getItem('city'));



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
                displayCity(data, city);
            }); 
        } else {
            alert(`Error: ${response.statusText}`);
        }
    })
    .catch (function (error) {
        alert('Unable to connect to Open Weather');
    });
};

const displayCity = function (cities, searchTerm) {
    // if there are no cities, display 'cities not found'
    // return
    if (cities.length === 0) {
        weatherContainerEl.textContent = 'No cities found.';
        return;
    }

    // ! ============= button zone
    // make the citysearchterm text content 
    // be the search term into from here 
    citySearchTerm.textContent = searchTerm;
    console.log(searchTerm);
    console.log(citySearchTerm);

    if (searchTerm) {
        const buttons = document.createElement('button');
        buttons.setAttribute(citySearchTerm);

    }

    // ! ============= button zone


    for (let cityObj of cities ) {
        // Todo: use forecast const to find:
        // * weather.array[i].icon
        // * list.main.temp
        // * list.wind.speed
        // * and list.main.humidity
        // const forecast = `${cityObj.main.temp}/`
        // const forecast = `${cityObj.list.main.temp} ${cityObj.} ${}`
        const cityTitle = `${cityObj.name}`;
        
        const cityCard = document.createElement('div')
        cityCard.setAttribute('h1', `weather for ${cityTitle}:`);
        console.log(cityTitle);

        // This should be for the main card
        //const cityEl = document.createElement('div');

        // ! Might need to bring in day and week cards
        // ! as consts for this
        cityCard.appendChild(cityTitle);
        
    }
}

// todo: submit handlers ============

cityFormEl.addEventListener('submit', formSubmitHandler);
// console.log(formSubmitHandler());