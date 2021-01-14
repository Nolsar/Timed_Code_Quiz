// test to check that script is working
// console.log("test");

//Declared variables
var startButton = document.querySelector("#startButton");
var timer = document.querySelector("#timer");
var timeInterval = 0;
var secondsLeft = 75

// GIVEN I am taking a code quiz
// WHEN I click the start button
startButton.addEventListener("click", function(){

    // THEN a timer starts
    if (timeInterval === 0) {
        timeInterval = setInterval(function(){
            secondsLeft--;
            timer.textContent = "Time: " + secondsLeft;

            if (secondsLeft <=0) {
                clearInterval(timeInterval);
                finsihed();
                timer.textContent = "Time's up!";
            }
        }, 1000);
    }
})

function finished(){
    alert("DONE");
}


    // THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score