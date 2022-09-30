function adjustSlider() {
    document.getElementById('rangeValue').innerText = document.getElementById('slider').value + " bit";
    if (document.getElementById('slider').value != 1) {document.getElementById('rangeValue').innerText += "s"}
}

function adjustTimeSlider() {
    document.getElementById('timeLimit').innerText = document.getElementById('timeSlider').value + " second";
    if (document.getElementById('timeSlider').value != 1) {document.getElementById('timeLimit').innerText += "s"}
}

function updateStreak(streak) {
    console.log(streak)
}
