function getWeather() {
    const cityInput = document.getElementById("cityInput");
    const cityName = document.querySelector(".city-name");
    const temperature = document.querySelector(".temperature");
    const description = document.querySelector(".description");
  
    const apiKey = "3fec2e5722736ee802d3fd1273ce30c9";
    const city = cityInput.value;
  
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.cod === "404") {
          cityName.textContent = "City not found";
          temperature.textContent = "";
          description.textContent = "";
        } else {
          cityName.textContent = data.name;
          temperature.textContent = `${data.main.temp} °C`;
          description.textContent = data.weather[0].description;
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        cityName.textContent = "Error fetching data";
        temperature.textContent = "";
        description.textContent = "";
      });
  }
  
