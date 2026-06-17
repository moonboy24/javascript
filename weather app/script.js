
// Weather App

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "8a1798eb35cacdef2eb79f7bb208f1e1";

weatherForm.addEventListener("submit" ,async event => {
    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please Enter a city");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response = await fetch(apiUrl);
    console.log(response);

    if(!response.ok){
        throw new Error("Could not fetch data");
    }

    return await response.json();
}

function displayWeatherInfo(data){
    const {name: city , 
        main: {temp, humidity} , 
        weather: [{description, id}]} = data;

        card.textContent = "";
        card.style.display = "flex";

        const cityDisplay = document.createElement("h1");
        const tempDisplay = document.createElement("p");
        const humidityDisplay = document.createElement("p");
        const descDisplay = document.createElement("p");
        const weatherEmoji = document.createElement("p");

        cityDisplay.textContent = city;
        tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
        humidityDisplay.textContent = `Humidity: ${humidity}%`;
        descDisplay.textContent = description;
        weatherEmoji.textContent = getWeatherEmoji(id);

        cityDisplay.classList.add("cityDisplay");
        tempDisplay.classList.add("tempDisplay");
        humidityDisplay.classList.add("humidityDisplay");
        descDisplay.classList.add("descDisplay");
        weatherEmoji.classList.add("weatherEmoji");

        card.appendChild(cityDisplay);
        card.appendChild(tempDisplay);
        card.appendChild(humidityDisplay);
        card.appendChild(descDisplay);
        card.appendChild(weatherEmoji);
}

function getWeatherEmoji(WeatherId){
    switch(true){
        case(WeatherId >= 200 && WeatherId < 300):
            return "☁️";
            break;
        case(WeatherId >= 300 && WeatherId < 400):
            return "🌧️";
            break;
        case(WeatherId >= 500 && WeatherId < 600):
            return "🌩️";
            break;
        case(WeatherId >= 600 && WeatherId < 700):
            return "❄️";
            break;
        case(WeatherId >= 700 && WeatherId < 800):
            return "😶‍🌫️";
            break;
        case(WeatherId === 800):
            return "🔆";
            break;
        case(WeatherId >= 801 && WeatherId < 810):
            return "🌥️"
            break;
        default :
            return "❓"
    }
}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorMsg");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}