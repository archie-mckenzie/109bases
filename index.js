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
        formHints(prop, choice);
    } else {
        document.getElementById('proposal').innerText = "???";
        document.getElementById('instructions').innerText = "Choose Binary or Hex!"
        document.getElementById('hints').innerText = ""
    }
    document.getElementById('proposal').style.color="black";
    document.getElementById('instructions').style.color="black";
}

function formHints(prop, choice) {
    
    let hint = ""
    if (!document.getElementById('hintcheckbox').checked) {
        document.getElementById('hints').innerText = hint;
        return;
    }

    // Binary to Decimal
    if (choice == 0) {
        for (let i = 0; i < document.getElementById('slider').value; i++) {
            hint += "(" + prop[i] + " * " + Math.pow(2, document.getElementById('slider').value - i - 1) + ")"
            if (i < (document.getElementById('slider').value - 1)) {
                hint += " + "
            }
        }
    }

    // Decimal to Binary
    else if (choice == 1) {
        if (Number(prop) > 1) {
            hint = "Divide by two. If there is a remainder, the bit is 1. If not, it is 0. Repeat."
        } else {
            hint = "This is not a trick question"
        }
        
    }

    // Binary to Hex
    else if (choice == 2) {
        if (prop != '0001') {
            hint = "Convert four bits into one hex digit, e.g. 0001 is 1"
        } else {
            hint = "Convert four bits into one hex digit, e.g. 0000 is 0"
        }
    }

    // Hex to Binary
    else if (choice == 3) {
        if (prop != '1') {
            hint = "Convert one hex digit into four bits, e.g. 1 is 0001"
        } else {
            hint = "Convert one hex digit into four bits, e.g. 0 is 0000"
        }
    }

    // Decimal to Hex
    else if (choice == 4) {
        if (Number(prop) > 16) {
            hint = "Convert into binary first."
        } else if (Number(prop) > 9) {
            hint = "0, 1, ... 8, 9, A, B, ... F"
        } else {
            hint = "This is not a trick question"
        }
    }

    // Hex to Decimal
    else if (choice == 5) {
        if (Number(prop) > 16) {
            for (let i = 0; i < prop.length; i++) {
                hint += "(" + prop[i] + " * " + Math.pow(16, prop.length - i - 1) + ")"
                if (i < prop.length - 1) {
                    hint += " + "
                }
            }
        } else if (Number(prop) > 9) {
            hint = "0, 1, ... 8, 9, A, B, ... F"
        } else {
            hint = "This is not a trick question"
        }
    }

    document.getElementById('hints').innerText = hint;
}

