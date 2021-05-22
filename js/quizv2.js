var preferenceRes;
var quizRes;

function setQuizResult() {
    preferenceRes = 0;
    quizRes = 0;

    var elem1 = document.getElementsByName("quiz1");

    for (i = 0; i < elem1.length; i++) {
        if (elem1[i].checked && elem1[i].value == "1") preferenceRes++;
    }

    for (j = 2; j <= 6; j++) {
        var elemj = document.getElementsByName("quiz" + j);

        for (i = 0; i < elemj.length; i++) {
            if (elemj[i].checked && elemj[i].value == "1") {
                quizRes++;
            }
        }
    }

    if (quizRes >= 4) {
        document.getElementById("quizresult").innerHTML =
            "Здорово, вы уже довольно опытны, так что рекомендуем вам пройти курс для продолжающих";
        return;
    }

    if (quizRes == 3 || preferenceRes == 1) {
        document.getElementById("quizresult").innerHTML =
            "Рекомендуем вам пройти курс для путешествия";
        return;
    }

    document.getElementById("quizresult").innerHTML =
        "Рекомендуем вам пройти курс для новичков";
}
