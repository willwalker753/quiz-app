let correct = 0;
let incorrect = 0;
let questionNum = 1;
function checkAnswer() {
    $('#submit').click(function check(event) {
        var choice = $("input[name='q']:checked").val();
        $('#submit').empty();
        console.log(choice);
        if ((choice == 312)||(choice == 14)||(choice == 33)||(choice == 'sw')||(choice == 'th')) {
            score(true);
        }
        else {
            score(false);
            message(choice);
        }
        switch (questionNum) {
            case 1:
                $('#next').append('<button type="button" id="next">Next</button>');
                break;
            case 2:
                $('#next').append('<button type="button" id="next">Next</button>');
                break;
            case 3:
                $('#next').append('<button type="button" id="next">Next</button>');
                break;
            case 4:
                $('#next').append('<button type="button" id="next">Next</button>');
                break;
            case 5:
                $('#next').append('<button type="button" id="next">Next</button>');
                //$('#next').append('<a href="results.html"><button type="button" id="next">Next</button></a>');
                break;
        }
    });

}


function score(boolean) {
    if (boolean == true) {
        correct++;
        console.log(correct,incorrect);
        $('#correct').empty();
        $('#incorrect').empty();
        $('#correct').append(`<h3>${correct}</h3>`);
        $('#incorrect').append(`<h3>${incorrect}</h3>`);
    }
    if (boolean == false) {
        incorrect++;
        console.log(correct,incorrect);
        $('#correct').empty();
        $('#incorrect').empty();
        $('#correct').append(`<h3>${correct}</h3>`);
        $('#incorrect').append(`<h3>${incorrect}</h3>`);
    }
}

function message(choice) {
    if ((choice == 215) || (choice == 421) || (choice == 243)) {
        $('#message').append('<p>3, 1, 2 was the correct answer</p>');
    }
    else if ((choice == 6) || (choice == 1) || (choice == 18)) {
        $('#message').append('<p>1.4 was the correct answer</p>');
    }
    else if ((choice == 3) || (choice == 36) || (choice == 27)) {
        $('#message').append('<p>3.3 was the correct answer</p>');
    }
    else if ((choice == 'ra') || (choice == 'ka') || (choice == 're')) {
        $('#message').append('<p>SWIMS was the correct answer</p>');
    }
    else if ((choice == 'we') || (choice == 'fr') || (choice == 'tu')) {
        $('#message').append('<p>Thursday was the correct answer</p>');
    }
}

function nextQuestion() {
    $('#next').click(function next() {
        if (questionNum == 1) {
            $('#message').empty();
            $('#next').empty();
            $('#question').empty();
            $('#correct').empty();
            $('#incorrect').empty();
            $('#correct').append(`<h3>${correct}</h3>`);
            $('#incorrect').append(`<h3>${incorrect}</h3>`);
            $('#submit').append('<button type="button" id="submit" onclick="">Submit</button>');
            $('#question').append('<h3>2 out of 5<br> <br>What is the square root of 2?</h3><ul><li><input type="radio" name="q" value="6" /> .6 <br><br></li><li><input type="radio" name="q" value="1" /> 1 <br><br></li><li><input type="radio" name="q" value="14" /> 1.4 <br><br></li><li><input type="radio" name="q" value="18" /> 1.8 <br><br></li></ul>');
        }
        if(questionNum==2){
            $('#message').empty();
            $('#next').empty();
            $('#question').empty();
            $('#correct').empty();
            $('#incorrect').empty();
            $('#correct').append(`<h3>${correct}</h3>`);
            $('#incorrect').append(`<h3>${incorrect}</h3>`);
            $('#submit').append('<button type="button" id="submit" onclick="">Submit</button>');
            $('#question').append('<h3>3 out of 5<br> <br>What is 3% of 110?</h3><ul><li><input type="radio" name="q" value="3" /> 3 <br><br></li><li><input type="radio" name="q" value="33" /> 3.3 <br><br></li><li><input type="radio" name="q" value="36" /> 3.6 <br><br></li><li><input type="radio" name="q" value="27" /> 2.7 <br><br></li></ul>');
                                            }
        if(questionNum==3){
            $('#message').empty();
            $('#next').empty();
            $('#question').empty();
            $('#correct').empty();
            $('#incorrect').empty();
            $('#correct').append(`<h3>${correct}</h3>`);
            $('#incorrect').append(`<h3>${incorrect}</h3>`);
            $('#submit').append('<button type="button" id="submit" onclick="">Submit</button>');
            $('#question').append('<h3>4 out of 5<br> <br>What word looks the same when backwards and upside down?</h3><ul><li><input type="radio" name="q" value="ra" /> RACECAR <br><br></li><li><input type="radio" name="q" value="ka" /> KAYAK <br><br></li><li><input type="radio" name="q" value="sw" /> SWIMS <br><br></li><li><input type="radio" name="q" value="re" /> REDDER <br><br></li></ul>');
                                            }
        if(questionNum==4){
            $('#message').empty();
            $('#next').empty();
            $('#question').empty();
            $('#correct').empty();
            $('#incorrect').empty();
            $('#correct').append(`<h3>${correct}</h3>`);
            $('#incorrect').append(`<h3>${incorrect}</h3>`);
            $('#submit').append('<button type="button" id="submit" onclick="">Submit</button>');
            $('#question').append('<h3>5 out of 5<br> <br>The day before four days after the day that is two days after the day that is tomorrow is when. Tomorrow is saturday so when is when?</h3><ul><li><input type="radio" name="q" value="we" /> Wednesday <br><br></li><li><input type="radio" name="q" value="th" /> Thursday <br><br></li><li><input type="radio" name="q" value="fr" /> Friday <br><br></li><li><input type="radio" name="q" value="tu" /> Tuesday <br><br></li></ul>');
        }
        if(questionNum==5){
            $('#message').empty();
            $('#next').empty();
            $('#score').remove();
            $('#question').empty();
            $('#question').append(`<h3>You got ${correct} out of 5 correct</h3>`);
            $('#next').append('<button id="retake" >Retake</button>');
            document.getElementById("retake").onclick = function () {
                location.href = "index.html";
        }
    }

        questionNum++;
    });

}

function runQuiz() {
    checkAnswer();
    score();
    nextQuestion();
}

$(runQuiz);
