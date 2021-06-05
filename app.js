const key = 'b48bb5c1fa7f66bd9f119b384bdc5c4c'

const icons = [
    { haze: 'icons/4.svg' },
    { clouds: 'icons/6.svg' },
    { rain: 'icons/19.svg' },
    { clear: 'icons/1.svg' }
]

const searchBtn = document.getElementById('search-btn')

searchBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    console.log(icons[0].haze)
    let searchInput = document.querySelector('.search-input').value.trim()
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=${key}`

    let request = await fetch(url)
    let response = await request.json()

    let error = document.querySelector('.error')
    let weatherDetails = document.querySelector('.weather-details')

    if (response.name == undefined) {
        error.textContent = 'Please give an input'
        weatherDetails.innerHTML = ''

    } else {
        console.log(response)
        weatherDetails.innerHTML = `<div class="innerHtml">
                                        <div class="city cityName">${response.name.toUpperCase()}</div>
                                        <div class="city cityTemp">${Math.floor(response.main.temp)}&deg;C</div>
                                        <div class="city cityCondition">
                                            <img class="icon" src="${response.weather[0].main === 'Haze' ? icons[0].haze
                : response.weather[0].main === 'Clouds' ? icons[1].clouds : response.weather[0].main === 'Rain' ? icons[2].rain : icons[3].clear}">
                                            <div>${response.weather[0].main.toUpperCase()}</div>
                                        </div>
                                    </div>`
        error.textContent = ''
        document.querySelector('.search-input').value = ''

    }

})


