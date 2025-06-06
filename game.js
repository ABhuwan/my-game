
function hide() {
    document.getElementById("i1").style.display = "none";
    document.getElementById("i2").style.display = "none";
    document.getElementById("i3").style.display = "none";
    document.getElementById("startBtn").style.display = "none";
}

function hideEveryThing() {
    document.getElementById("i1").style.display = "none";
    document.getElementById("i2").style.display = "none";
    document.getElementById("i3").style.display = "none";
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("name").style.display = "none";
    document.getElementById("enterBtn").style.display = "none";
    document.getElementById("exitBtn").style.display = "none";
    document.getElementById("userChoice").style.display = "none";
}

function start() {
    document.getElementById("userChoice").style.display = "block";
    document.getElementById("name").innerText = "Number Guessing Game:";
    document.getElementById("enterBtn").style.display = "block";
    document.getElementById("enterBtn").innerText = "Enter:";
    document.getElementById("exitBtn").style.display = "block";
    document.getElementById("exitBtn").innerText = "Exit:";
    hide();
}


function exit() {
    document.getElementById("feedback1").innerText = "Thank You";
    hideEveryThing();
    //document.getElementById("highLow").style.display="none";
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

let randomNumber = Math.floor(Math.random() * 100) + 1;

function enter() {
    let userChoice =parseInt(document.getElementById("userChoice").value);

    if (userChoice === randomNumber) {
        hideEveryThing();
        document.getElementById("highLow").style.display = "none";
        document.getElementById("feedback1").innerText = "you win!!!";
        document.getElementById("feedback2").innerText = "Congratulations!!!";
    } else if (userChoice > randomNumber) {
        document.getElementById("highLow").innerText = "it's high, try again!";
    } else if (userChoice < randomNumber) {
        document.getElementById("highLow").innerText = "it's low, try again!";
    }
}
