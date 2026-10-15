var questions = [
    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Language",
            "Home Tool Markup",
            "Hyperlinks Text Mark"
        ],
        answer: 0
    },
    {
        question: "CSS stands for?",
        options: [
            "Computer Style Sheet",
            "Cascading Style Sheets",
            "Colorful Style Sheet",
            "Creative Style System"
        ],
        answer: 1
    },
    {
        question: "Which language is used for web page interaction?",
        options: [
            "Java",
            "HTML",
            "SQL",
            "JavaScript"
        ],
        answer: 3
    },
    {
        question: "Which language is used to style a web page?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        answer: 1
    },
    {
        question: "Which symbol is used for an ID in CSS?",
        options: [
            ".",
            "#",
            "*",
            "@"
        ],
        answer: 1
    }
];

var i = 0;
var correct = 0;
var incorrect = 0;
var time = 10;
var timer;
var username;

function startQuiz() {
    username = document.getElementById("username").value;

    if (username == "") {
        alert("Enter Username");
    } else {
        document.getElementById("startScreen").style.display = "none";
        document.getElementById("quizScreen").style.display = "block";
        showQuestion();
    }
}

function showQuestion() {
    clearInterval(timer);

    if (i < questions.length) {
        document.getElementById("questionNo").innerHTML = "Question " + (i + 1);
        document.getElementById("question").innerHTML = questions[i].question;

        var data = "";

        for (var j = 0; j < questions[i].options.length; j++) {
            data += '<p><input type="radio" name="answer" value="' + j + '"> '
                + questions[i].options[j] + '</p>';
        }

        document.getElementById("options").innerHTML = data;

        time = 10;
        document.getElementById("time").innerHTML = time;

        timer = setInterval(function () {
            time--;
            document.getElementById("time").innerHTML = time;

            if (time == 0) {
                nextQuestion();
            }
        }, 1000);
    } else {
        document.querySelector(".quiz-box").innerHTML =
            "<h2>Quiz Completed!</h2>" +
            "<h3>Username: " + username + "</h3>" +
            "<p>Correct Answers: " + correct + "</p>" +
            "<p>Incorrect Answers: " + incorrect + "</p>" +
            "<p>Total Questions: " + questions.length + "</p>" +
            "<h3>Score: " + correct + " / " + questions.length + "</h3>" +
            '<button onclick="location.reload()">Restart Quiz</button>';
    }
}

function nextQuestion() {
    clearInterval(timer);

    var selected = document.querySelector('input[name="answer"]:checked');

    if (selected != null && selected.value == questions[i].answer) {
        correct++;
    } else {
        incorrect++;
    }

    document.getElementById("correct").innerHTML = correct;
    document.getElementById("incorrect").innerHTML = incorrect;

    i++;
    showQuestion();
}




