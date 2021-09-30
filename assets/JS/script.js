results = {
    "12":{"win":false},"13":{"win":true},"14":{"win":true},"15":{"win":false},
    "21":{"win":true},"23":{"win":false},"24":{"win":false},"25":{"win":true},
    "31":{"win":false},"32":{"win":true},"34":{"win":true},"35":{"win":false},
    "41":{"win":false},"42":{"win":true},"43":{"win":false},"45":{"win":true},
    "51":{"win":true},"52":{"win":false},"53":{"win":true},"54":{"win":false},
}
var dificulty = 0
function dificultySelector(levelDificulty){
        dificulty = levelDificulty;
        console.log(dificulty);
}

function runGame(playerAnswer){
    computerAnswer = gettingTheComputersAnswer();
    if(playerAnswer == computerAnswer){
        console.log("its a draw");
    }else{
        combiningResults(playerAnswer,computerAnswer);
    }
}

function gettingTheComputersAnswer(){
    console.log()
    let answer = Math.floor(Math.random() * dificulty) + 1;
    console.log(`computer = ${dificulty}`);
    answer.toString();
    return answer;
}

function combiningResults(pAnswer,cAnswer){
    result = pAnswer + cAnswer;
    console.log(result);
    if(results[result].win == true){
        console.log("player wins")
    }else if (results[result].win == false){
        console.log("Computer wins")
    }
}