function check (){
    var correctAnsCount = 8;
    var answers = [];

    // Push all answers into array
    answers.push(document.quiz.question1.value);
    answers.push(document.quiz.question2.value);
    answers.push(document.quiz.question3.value);
    answers.push(document.quiz.question4.value);
    answers.push(document.quiz.question5.value);
    answers.push(document.quiz.question6.value);
    answers.push(document.quiz.question7.value);
    answers.push(document.quiz.question8.value);
    
    // Check for incorrect answers
    for (var i = 0; i < 8; i++){
        if (answers[i] === "incorrect"){
            var loc = i + 1;
            var q = "question" + loc.toString();
            correctAnsCount--;  // Decrease count
            $("#" + q).addClass("incorrect");
        }
    }

    if (correctAnsCount === 1){
        alert ("You got " + correctAnsCount + " question correct");

    } 
    else {
        alert ("You got " + correctAnsCount + " questions correct");
    }
}