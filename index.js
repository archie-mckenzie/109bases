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

function solve(problem, instructions) {
    var n;
    if (instructions == "Binary → Decimal") {
        n = Number("0b" + problem);
        return n.toString(10)
    } else if (instructions == "Decimal → Binary") {
        return Number(problem).toString(2);
    } else if (instructions == "Binary → Hex") {
        n = Number("0b" + problem);
        return n.toString(16).toUpperCase();
    } else if (instructions == "Hex → Binary") {
        n = Number("0x" + problem);
        return n.toString(2);
    } else if (instructions == "Decimal → Hex") {
        console.log(problem)
        return Number(problem).toString(16).toUpperCase();
    } else if (instructions == "Hex → Decimal") {
        n = Number("0x" + problem);
        return Number(n.toString(10));
    } 
    return -1;
}

function generateBase() {
    let n = Math.floor(Math.random() * Math.pow(2, document.getElementById('slider').value));
    console.log(n);
    let binaryOn = false;
    if (document.getElementById('binary').checked) {binaryOn = true};
    let hexOn = false;
    if (document.getElementById('hexadecimal').checked) {hexOn = true};
    console.log(binaryOn + " " + hexOn)
    console.log(document.getElementById('binary').value)
    if (binaryOn || hexOn) {
        var max, min, prop;
        if (binaryOn && hexOn) { max = 6; min = 0; }
        else if (binaryOn && !hexOn) { max = 2; min = 0; }
        else { max = 6; min = 4; }
        let choice = Math.floor(Math.random() * (max - min) + min)
        // Binary to Decimal
        if (choice == 0) {
            prop = n.toString(2).padStart(document.getElementById('slider').value, '0');
            document.getElementById('instructions').innerText = "Binary → Decimal"
        }
        // Decimal to Binary
        else if (choice == 1) {
            prop = n;
            document.getElementById('instructions').innerText = "Decimal → Binary"
        }
        // Binary to Hex
        else if (choice == 2) {
            prop = n.toString(2).padStart(document.getElementById('slider').value, '0');
            document.getElementById('instructions').innerText = "Binary → Hex"
        }
        // Hex to Binary
        else if (choice == 3) {
            prop = n.toString(16).toUpperCase();
            document.getElementById('instructions').innerText = "Hex → Binary"
        }
        // Decimal to Hex
        else if (choice == 4) {
            prop = n;
            document.getElementById('instructions').innerText = "Decimal → Hex"
        }
        // Hex to Decimal
        else if (choice == 5) {
            prop = n.toString(16).toUpperCase();
            document.getElementById('instructions').innerText = "Hex → Decimal"
        }
        document.getElementById('proposal').innerText = prop;
        console.log("CHOICE" + choice);
    } else {
        document.getElementById('proposal').innerText = "???";
        document.getElementById('instructions').innerText = "Choose Binary or Hex!"
    }
    document.getElementById('proposal').style.color="black";
    document.getElementById('instructions').style.color="black";
}


