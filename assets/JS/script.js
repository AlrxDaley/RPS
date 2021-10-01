results = {
    "12":{"win":false},"13":{"win":true},"14":{"win":true},"15":{"win":false},
    "21":{"win":true},"23":{"win":false},"24":{"win":false},"25":{"win":true},
    "31":{"win":false},"32":{"win":true},"34":{"win":true},"35":{"win":false},
    "41":{"win":false},"42":{"win":true},"43":{"win":false},"45":{"win":true},
    "51":{"win":true},"52":{"win":false},"53":{"win":true},"54":{"win":false},
}
var dificulty ;
var playerScore = 0;
var computerScore = 0;
var drawScore = 0;

function dificultySelector(levelDificulty){
        dificulty = levelDificulty;
}

function runGame(playerAnswer){
    computerAnswer = gettingTheComputersAnswer();
    if(playerAnswer == computerAnswer){
        increaseDrawScore();
    }else{
        combiningResults(playerAnswer,computerAnswer);
    }
}

function gettingTheComputersAnswer(){
    console.log()
    let answer = Math.floor(Math.random() * dificulty) + 1;
    answer.toString();
    return answer;
}

var playerScore = 0;
var computerScore = 0;

function combiningResults(pAnswer,cAnswer){
    result = pAnswer + cAnswer;
    if(results[result].win == true){
        increasePlayerScore();
    }else if (results[result].win == false){
        increaseComputerScore();
    }
}

function createButtonWhenLevelChangedTo1(){
    console.log("working ?")
    var sbutton = document.getElementById("spock");
    var lbutton = document.getElementById("lizard");

    sbutton.style.display = 'none';
    lbutton.style.display = 'none';

    resetScore();


}

function createButtonWhenLevelChangedTo2(){
    var lbutton = document.getElementById("lizard");
    var sbutton = document.getElementById("spock");

    lbutton.style.display = 'inline';
    sbutton.style.display = 'none';

    resetScore();

}

function createButtonWhenLevelChangedTo3(){
    var sbutton = document.getElementById("spock");
    var lbutton = document.getElementById("lizard");

    lbutton.style.display = 'inline';
    sbutton.style.display = 'inline'

    resetScore();

}

function increasePlayerScore(){
    ++playerScore;
    document.getElementById('pscore').innerText = playerScore;

}

function increaseComputerScore(){
    ++computerScore;
    document.getElementById('cscore').innerText = computerScore;
}

function increaseDrawScore(){
    ++drawScore;
    document.getElementById('dscore').innerText = drawScore;
}

function resetScore (){
    playerScore = 0;
    document.getElementById('pscore').innerText = playerScore;
    computerScore = 0;
    document.getElementById('cscore').innerText = computerScore;
    drawScore = 0;
    document.getElementById('dscore').innerText = drawScore;
}