function paddedFormat(num) {
    return num < 10 ? "0" + num : num; 
}

function startCountDown(duration, element) {

    let secondsRemaining = duration;
    let min = 0;
    let sec = 0;

    let countInterval = setInterval(function () {

        sec = parseInt(secondsRemaining % 60);

        element.textContent = "Il vous reste "+sec+ " secondes.";

        secondsRemaining = secondsRemaining - 1;
        if (secondsRemaining < 0) { clearInterval(countInterval) };

    }, 1000);
}

window.onload = function () {
    let time_seconds = 60; // Value in seconds



    element = document.querySelector('#count-down-timer');


    startCountDown(--time_seconds, element);};

    // Faire un composant timer