document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmation').style.display = 'block';
    document.getElementById('form').reset();
});

function countdown() {
    const countDownDate = new Date("October 1, 2024").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('timer').innerHTML = "EXPIRED";
    }
}

const x = setInterval(countdown, 1000);
