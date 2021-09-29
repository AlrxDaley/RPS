results = {
    "12":{player:0,computer:0},"13":{player:0,computer:0},"14":{player:0,computer:0},"15":{player:0,computer:0},
    "21":{player:0,computer:0},"23":{player:0,computer:0},"24":{player:0,computer:0},"25":{player:0,computer:0},
    "31":{player:0,computer:0},"32":{player:0,computer:0},"34":{player:0,computer:0},"35":{player:0,computer:0},
    "41":{player:0,computer:0},"42":{player:0,computer:0},"43":{player:0,computer:0},"45":{player:0,computer:0},
    "51":{player:0,computer:0},"52":{player:0,computer:0},"53":{player:0,computer:0},"54":{player:0,computer:0},
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
    let answer = Math.floor(Math.random() * 5) + 1;
    answer.toString();
    return answer;
}

function combiningResults(pAnswer,cAnswer){

}