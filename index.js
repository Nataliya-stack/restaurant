const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
    removeFocus();
    item.classList.add('selected');
    })

    removeFocus = () => {
        items.forEach(item => {
            item.classList.remove('selected')
        }) 
        }
})

function restaurantCountDown() {
    const restaurantDay = new Date ('May 01, 2023 17:40');
    const now = new Date();
    const diff = restaurantDay - now;

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;

        clearInterval(timerID);
        restauranOpen();
    }
}

let timerID = setInterval(restaurantCountDown, 1000);

function restauranOpen() {
    const name = document.querySelector('h2');
    name.textContent = "WE HAVE OPEND!!!";
    name.classList.add('red');
}

const button = document.querySelector('#myButton');
button.addEventListener('click', function(){
    document.querySelector('#myAudio').play();
})

