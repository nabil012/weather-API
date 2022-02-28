const API_Key=`49961806af8ef521903dff15451a4bc9`
const error = document.getElementById('error')
const searchBtn = () =>{
      
 const cityField = document.getElementById('search-field')
 const city = cityField.value
 cityField.value=''

    const url =` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
   
   }
//  }
const displayWeather = data =>{
 console.log(data)
 const degreeId = document.getElementById('celci')
 const cityName = document.getElementById('cityName')
 const weatherInfo = document.getElementById('weather')
degreeId.innerText = `${data.main.temp}`
cityName.innerText = `${data.name}`
weatherInfo.innerText = `${data.weather[0].main}`

 }













// const url = ` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
// const imgIcon = document.getElementById('weather-icon')

//     const tempId  = document.getElementById('temperature')
//    const div = document.createElement('div')
//   div.innerHTML = `
    
//     <div class="weather-status text-white text-center">
//     <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
//     <h1 id="city-name">${data.name}</h1>
//     <h3><span>${data.main.temp}</span>&deg;C</h3>
//     <h1 class="lead">${data.weather[0].main}</h1>
//     </div>
//     `
//     tempId.appendChild(div)