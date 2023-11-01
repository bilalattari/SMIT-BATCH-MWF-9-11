  const locationInput = document.getElementById('locationInput')
  const getWeatherButton = document.getElementById('getWeather')
  const weatherInfo = document.getElementById('weatherInfo')

  getWeatherButton.addEventListener('click', () => {
    const location = locationInput.value
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=91b4369798474fee84b51233233010&q=${location}&aqi=no`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const weatherHtml = `<div class='weathercontainer'> 
        <div class='row'> <h2>Temperature in ${data?.location?.name} (${data?.location?.lat} , ${data?.location?.lon})</h2>  </div>
        <div class='row'> <span>Temperature </span> <span> ${data?.current?.temp_c} <sup>o</sup>C</span>  </div>
        <div class='row'> <span>Feels Like </span> <span> ${data?.current?.feelslike_c} <sup>o</sup> C</span>  </div>
        </div>`

        weatherInfo.innerHTML = weatherHtml
      })
      .catch(error => {
        weatherInfo.innerHTML = `Error: ${error.message}`
      })
  })