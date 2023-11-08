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
      console.log('data-->', data)
      const {
        location: { name, lat, lon },
        current: { temp_c, feelslike_c }
      } = data

      console.log('location', name, lat, lon)
      console.log('current', temp_c, feelslike_c)
      const weatherHtml = `<div class='weathercontainer'> 
        <div class='row'> <h2>Temperature in ${name} (${lat} , ${lon})</h2>  </div>
        <div class='row'> <span>Temperature </span> <span> ${temp_c} <sup>o</sup>C</span>  </div>
        <div class='row'> <span>Feels Like </span> <span> ${feelslike_c} <sup>o</sup> C</span>  </div>
        </div>`

      weatherInfo.innerHTML = weatherHtml
    })
    .catch(error => {
      weatherInfo.innerHTML = `Error: ${error.message}`
    })
})

let obj = {
  temperature: '20 C',
  weather: 'overcast'
}

const { temperature : tmp , weather : wth } = obj
console.log('tmp->',tmp)
console.log('wth->',wth)

const timings = ['9 am', '10 am', '11 am']

console.log(timings[0])
console.log(timings[1])
console.log(timings[2])

let [first, second, third] = timings

console.log(first)
console.log(second)
console.log(third)
