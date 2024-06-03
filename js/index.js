function updateTime () {
    let londonElement = document.querySelector('#london');
    let londonDate = londonElement.querySelector('.date');
    let londonTimeElement = londonElement.querySelector('.time');
    let londonTime = moment().tz('Europe/London');
    londonDate.innerHTML = moment().format("dddd, MMMM Do, YYYY");
    londonTimeElement.innerHTML = londonTime.format('h:mm:ss [<small>]A[</small>]');

    let parisElement = document.querySelector('#paris');
    let parisDate = parisElement.querySelector('.date');
    let parisTimeElement = parisElement.querySelector('.time');
    let parisTime = moment().tz('Europe/Paris');
    parisDate.innerHTML = moment().format("dddd, MMMM Do, YYYY");
    parisTimeElement.innerHTML = parisTime.format('h:mm:ss [<small>]A[</small>]');
}

updateTime();
setInterval(updateTime, 1000);