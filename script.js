
//Declared variables
var startButton = document.querySelector("#startButton");
var timer = document.querySelector("#timer");
var timeInterval = 0;
var secondsLeft = 75
var penalty = 10;
var score = 0;
var questionsDiv = document.querySelector("#questionsDiv");
var questionIndex = 0;
var unorderedList = document.querySelector("#unorderedList");

//Quiz questions
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<javascript>", "<scriptor>", "<js>", "<script>"],
        answer: "<js>"
    },
    {
        title: "Where is the correct place to insert JavaScript?",
        choices: ["the <head>", "the bottom of the <body>", "anywhere in the HTML", "anywhere in the stylesheet"],
        answer: "the bottom of the <body>"
    },
    {
        title: "How do you write 'Hello World' in an alert box?",
        choices: ["msgBox('Hello World)", "alertBox('Hello World')", "alert('Hello World')", "msg('Hello World)"],
        answer: "alert('Hello World')"
    },
    {
        title: "How do you call a function called myFunction?",
        choices: ["myFunction()", "call myFunction()", "call function myFunction", "call select myFunction"],
        answer: "myFunction()"
    },
    {
        title: "How do you write an IF statement in JavaScript?",
        choices: ["if i = 5 or else", "if i = 5 then", "if i == 5 then", "if(i == 5)"],
        answer: "if(i == 5)"
    },
    {
        title: "How does a FOR loop start?",
        choices: ["for (i=0; i <= 5; i++)", "for (i <= 5; i++)", "for i= 1 to 5", "for (i = 0; i <= 5)"],
        answer: "for (i=0; i <= 5; i++)"
    }
]

//GIVEN I am taking a code quiz, WHEN I click the start button

startButton.addEventListener("click", function () {

    // a timer starts
    if (timeInterval === 0) {
        timeInterval = setInterval(function () {
            secondsLeft--;
            timer.textContent = "Time: " + secondsLeft + " seconds";

            if (secondsLeft <= 0) {
                clearInterval(timeInterval);
                finished();
                timer.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
})

// and renders questions and choices to page
function render(questionIndex) {
    questionsDiv.innerHTML = "";
    unorderedList.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(unorderedList);
        unorderedList.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

// Event to compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
            // Correct condition 
        } else {
            // Will deduct -5 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }

    }
    // Question Index determines number question user is on
    questionIndex++;

    if (questionIndex >= questions.length) {
        // All done will append last page with user stats
        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);
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
