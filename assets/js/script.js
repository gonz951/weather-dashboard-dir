const APIKey = 'f12afd4f4aecb8e77f094912f64ed517';
const cityFormEl = document.querySelector('#city-form');
const nameInputEl = document.querySelector('#cityname');

let city;

const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

fetch(queryURL)