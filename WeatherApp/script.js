const apiKey = "9764adca81e73abc4c440c7b3573baa2";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchCity = document.querySelector(".search input");
const button = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function weatherApp(city) {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await res.json();

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clear") {
      weatherIcon.src = "/weather-app-img/images/clear.png";
    } else if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "/weather-app-img/images/clouds.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "/weather-app-img/images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "/weather-app-img/images/mist.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "/weather-app-img/images/rain.png";
    } else if (data.weather[0].main === "Snow") {
      weatherIcon.src = "/weather-app-img/images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

button.addEventListener("click", () => {
  weatherApp(searchCity.value);
});
