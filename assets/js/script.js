const APIKey = 'f12afd4f4aecb8e77f094912f64ed517'; // the api key
// to take data from the form
const cityFormEl = document.querySelector('#city-form');
// to get city data from the input within the form
const nameInputEl = document.querySelector('#cityname');
// This is the container for the weather cards
const weatherContainerEl = document.querySelector('#dashboard');

const mainDayCard = document.querySelector('#day-card');
const minorWeekCards = document.querySelector('#week-container');

const weekCard1 = document.querySelector('#week-card1');
const weekCard2 = document.querySelector('#week-card2');
const weekCard3 = document.querySelector('#week-card3');
const weekCard4 = document.querySelector('#week-card4');
const weekCard5 = document.querySelector('#week-card5');

// ? Local storage element for the buttons later
let cityStorage = JSON.parse(localStorage.getItem('city'));



const formSubmitHandler = function (event) {
    event.preventDefault();
    
    const cityname = nameInputEl.value.trim();

    if (cityname) {
        getCityWeather(cityname);
        
        // * needs to list container and input as empty
        // weatherContainerEl.textContent = '';
        nameInputEl.value = '';
    } else {
        alert('Please enter a city name.');
    }
};

// =========== api stuff ========
// * let city; suggested from api doc but idk
// ? NEED FUNCTION FOR DAY WEATHER

// ? NEED FUNCTION FOR WEEK WEATHER
const getCityWeather = function (city) {
    const queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`;
    
    
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

const displayCity = function (data) {
    // if there are no cities, display 'cities not found'
    // return
    if (data.length === 0) {
        weatherContainerEl.textContent = 'No cities found.';
        return;
    }

    // ! Card Zone ==========================
    // Main Card
    // Grabbing elements within the arrays 
    const currentCityName = data.city.name;
    const currentTemp = data.list.at(0).main.temp;
    const currentWind = data.list.at(0).wind.speed;
    const currentHum = data.list.at(0).main.humidity;

    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h2');
    cardTitle.textContent = `Weather for: ${currentCityName}`;

    const cardTemp = document.createElement('p');
    cardTemp.textContent = `Temp: ${currentTemp}`;

    const cardWind = document.createElement('p');
    cardWind.textContent = `Wind: ${currentWind} MPH`;

    const cardHum = document.createElement('p');
    cardHum.textContent = `Humidity: ${currentHum}%`


    cardBody.append(cardTitle);
    cardBody.append(cardTemp);
    cardBody.append(cardWind);
    cardBody.append(cardHum);
    mainDayCard.innerHTML = '';
    mainDayCard.append(cardBody);

    // End of main day card
    
    // start of minor week cards
    // Week card 1
    const date1 = data.list.at(7).dt_txt;
    const currentTemp1 = data.list.at(7).main.temp;
    const currentWind1 = data.list.at(7).wind.speed;
    const currentHum1 = data.list.at(7).main.humidity;
    // const date3 = data.list.at(23).dt_txt;
    // const date4 = data.list.at(31).dt_txt;
    // const date5 = data.list.at(39).dt_txt;
    console.log(date1)
    const cardBody1 = document.createElement('div');
    const cardDate1 = document.createElement('h3');
    cardDate1.textContent = `${date1}`

    const cardTemp1 = document.createElement('p');
    cardTemp1.textContent = `Temp: ${currentTemp1}`;

    const cardWind1 = document.createElement('p');
    cardWind1.textContent = `Wind: ${currentWind1} MPH`;

    const cardHum1 = document.createElement('p');
    cardHum1.textContent = `Humidity: ${currentHum1}%`

    cardBody1.append(cardDate1);
    cardBody1.append(cardTemp1);
    cardBody1.append(cardWind1);
    cardBody1.append(cardHum1);
    weekCard1.append(cardBody1);

    // Week card 2
    const date2 = data.list.at(15).dt_txt;
    const currentTemp2 = data.list.at(15).main.temp;
    const currentWind2 = data.list.at(15).wind.speed;
    const currentHum2 = data.list.at(15).main.humidity;

    const cardBody2 = document.createElement('div');
    const cardDate2 = document.createElement('h3');
    cardDate2.textContent = `${date2}`

    const cardTemp2 = document.createElement('p');
    cardTemp2.textContent = `Temp: ${currentTemp2}`;

    const cardWind2 = document.createElement('p');
    cardWind2.textContent = `Wind: ${currentWind2} MPH`;

    const cardHum2 = document.createElement('p');
    cardHum2.textContent = `Humidity: ${currentHum2}%`

    cardBody2.append(cardDate2);
    cardBody2.append(cardTemp2);
    cardBody2.append(cardWind2);
    cardBody2.append(cardHum2);
    weekCard2.append(cardBody2);

    // Week Card 3
    const date3 = data.list.at(23).dt_txt;
    const currentTemp3 = data.list.at(23).main.temp;
    const currentWind3 = data.list.at(23).wind.speed;
    const currentHum3 = data.list.at(23).main.humidity;

    const cardBody3 = document.createElement('div');
    const cardDate3 = document.createElement('h3');
    cardDate3.textContent = `${date3}`

    const cardTemp3 = document.createElement('p');
    cardTemp3.textContent = `Temp: ${currentTemp3}`;

    const cardWind3 = document.createElement('p');
    cardWind3.textContent = `Wind: ${currentWind3} MPH`;

    const cardHum3 = document.createElement('p');
    cardHum3.textContent = `Humidity: ${currentHum3}%`

    cardBody3.append(cardDate3);
    cardBody3.append(cardTemp3);
    cardBody3.append(cardWind3);
    cardBody3.append(cardHum3);
    weekCard3.append(cardBody3);

    // Week card 4
    const date4 = data.list.at(31).dt_txt;
    const currentTemp4 = data.list.at(31).main.temp;
    const currentWind4 = data.list.at(31).wind.speed;
    const currentHum4 = data.list.at(31).main.humidity;

    const cardBody4 = document.createElement('div');
    const cardDate4 = document.createElement('h3');
    cardDate4.textContent = `${date4}`

    const cardTemp4 = document.createElement('p');
    cardTemp4.textContent = `Temp: ${currentTemp4}`;

    const cardWind4 = document.createElement('p');
    cardWind4.textContent = `Wind: ${currentWind4} MPH`;

    const cardHum4 = document.createElement('p');
    cardHum4.textContent = `Humidity: ${currentHum4}%`

    cardBody4.append(cardDate4);
    cardBody4.append(cardTemp4);
    cardBody4.append(cardWind4);
    cardBody4.append(cardHum4);
    weekCard4.append(cardBody4);

    // Week Card 5
    const date5 = data.list.at(39).dt_txt;
    const currentTemp5 = data.list.at(39).main.temp;
    const currentWind5 = data.list.at(39).wind.speed;
    const currentHum5 = data.list.at(39).main.humidity;

    const cardBody5 = document.createElement('div');
    const cardDate5 = document.createElement('h3');
    cardDate5.textContent = `${date5}`

    const cardTemp5 = document.createElement('p');
    cardTemp5.textContent = `Temp: ${currentTemp5}`;

    const cardWind5 = document.createElement('p');
    cardWind5.textContent = `Wind: ${currentWind5} MPH`;

    const cardHum5 = document.createElement('p');
    cardHum5.textContent = `Humidity: ${currentHum5}%`

    cardBody5.append(cardDate5);
    cardBody5.append(cardTemp5);
    cardBody5.append(cardWind5);
    cardBody5.append(cardHum5);
    weekCard5.append(cardBody5);
    // week cards done

    // ! ============= button zone
    // make the citysearchterm text content 
    // Const to be used to store the search term buttons
    // const citySearchTerm = document.querySelector('#city-inventory');
    // // be the search term into from here 
    // citySearchTerm.textContent = searchTerm;
    // console.log(searchTerm);

    // if (searchTerm) {
    //     // const buttons = document.createElement('button');
    //     // buttons.setAttribute(citySearchTerm);

    // }

}

// todo: submit handlers ============

cityFormEl.addEventListener('submit', formSubmitHandler);
// console.log(formSubmitHandler());