function updateTime () {
    let londonElement = document.querySelector('#london');
    if (londonElement) {
        let londonDate = londonElement.querySelector('.date');
        let londonTimeElement = londonElement.querySelector('.time');
        let londonTime = moment().tz('Europe/London');
        londonDate.innerHTML = moment().format("dddd, MMMM Do, YYYY");
        londonTimeElement.innerHTML = londonTime.format('h:mm:ss [<small>]A[</small>]');
    }
   

    let parisElement = document.querySelector('#paris');
    if (parisElement) {
        let parisDate = parisElement.querySelector('.date');
        let parisTimeElement = parisElement.querySelector('.time');
        let parisTime = moment().tz('Europe/Paris');
        parisDate.innerHTML = moment().format("dddd, MMMM Do, YYYY");
        parisTimeElement.innerHTML = parisTime.format('h:mm:ss [<small>]A[</small>]');
    }
   
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace('_', " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector('#cities');
    citiesElement.innerHTML = `
        <div class="city" >
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format('MMMM Do YYYY')}</div>
            </div>
            <div class="time"> ${cityTime.format('h:mm:ss')} <small>${cityTime.format('A')}</small></div>
        </div>       `
}

let citiesSelectElement = document.querySelector('#citySelect');
citiesSelectElement.addEventListener('change', updateCity)
