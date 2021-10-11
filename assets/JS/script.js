var results = {
    "12":{"win":false},"13":{"win":true},"14":{"win":true},"15":{"win":false},
    "21":{"win":true},"23":{"win":false},"24":{"win":false},"25":{"win":true},
    "31":{"win":false},"32":{"win":true},"34":{"win":true},"35":{"win":false},
    "41":{"win":false},"42":{"win":true},"43":{"win":false},"45":{"win":true},
    "51":{"win":true},"52":{"win":false},"53":{"win":true},"54":{"win":false},
};

var gameOptions = {
    '1': "Rock", "2":"Paper", "3":"Scissors", "4":"Lizard", "5":"Spock"
};
var dificulty = 3 ;
var playerScore = 0;
var computerScore = 0;
var drawScore = 0;
var playersChoice ="";
var computerChoice ="";

/**
 * Sets the level dificulty
 * @param {*} levelDificulty 
 */
function dificultySelector(levelDificulty){
        dificulty = levelDificulty;
}

/**
 * Takes the number of the options selected by the user and checks if it makes the 
 * computers answer, if it doesnt it sends both results to the combining results function.
 * @param {*} playerAnswer 
 */
function runGame(playerAnswer){
    var computerAnswer = gettingTheComputersAnswer();
    if(playerAnswer == computerAnswer){
        increaseDrawScore();
        displayChoices(playerAnswer,computerAnswer);
    }else{
        combiningResults(playerAnswer,computerAnswer);
        displayChoices(playerAnswer,computerAnswer);
    }
}
/**
 * Takes the global dificulty var and uses it with Math and random to 
 * generate a random number that is assinged to an option within the game.
 * @returns 
 */
function gettingTheComputersAnswer(){
    var answer = Math.floor(Math.random() * dificulty) + 1;
    answer.toString();
    return answer;
}

/**
 * Takes the players answer and the computers answer and combines them 
 * then checks if the result is a key within the results dict and if the 
 * information in the dict is true or false.
 * @param {*} pAnswer 
 * @param {*} cAnswer 
 */
function combiningResults(pAnswer,cAnswer){
    var result = pAnswer + cAnswer;
    if(results[result].win == true){
        increasePlayerScore();
    }else if (results[result].win == false){
        increaseComputerScore();
    }
}

/**
 * Hides the two extra options buttons and calls the resetScore function.
 */
function createButtonWhenLevelChangedTo1(){
    dificultySelector(3)
    var sbutton = document.getElementById("spock");
    var lbutton = document.getElementById("lizard");

    sbutton.style.display = 'none';
    lbutton.style.display = 'none';

    resetScore();
    resetChoosen();


}

/**
 * Makes the lizard option visible and makes sure the spock option stays hidden
 * aswell as calling the resetScore function.
 */
function createButtonWhenLevelChangedTo2(){
    dificultySelector(4)
    var lbutton = document.getElementById("lizard");
    var sbutton = document.getElementById("spock");

    lbutton.style.display = 'inline';
    sbutton.style.display = 'none';

    resetScore();
    resetChoosen();

}

/**
 * Makes both buttons visible aswell as calling the resetScore function.
 */
function createButtonWhenLevelChangedTo3(){
    dificultySelector(5)
    var sbutton = document.getElementById("spock");
    var lbutton = document.getElementById("lizard");

    lbutton.style.display = 'inline';
    sbutton.style.display = 'inline';

    resetScore();
    resetChoosen();

}

/**
 * Adds 1 to the player score var and then assigns the var to 
 * the inner text of the element.
 */
function increasePlayerScore(){
    ++playerScore;
    document.getElementById('pscore').innerText = playerScore;

}

/**
 * Adds 1 to the computer score var and then assigns the var to 
 * the inner text of the element.
 */
function increaseComputerScore(){
    ++computerScore;
    document.getElementById('cscore').innerText = computerScore;
}

/**
 * Adds 1 to the draw score var and then assigns the var to 
 * the inner text of the element.
 */
function increaseDrawScore(){
    ++drawScore;
    document.getElementById('dscore').innerText = drawScore;
}

/**
 * resets all the global variables to 0 and then assigns them to the elements.
 */
function resetScore (){
    playerScore = 0;
    document.getElementById('pscore').innerText = playerScore;
    computerScore = 0;
    document.getElementById('cscore').innerText = computerScore;
    drawScore = 0;
    document.getElementById('dscore').innerText = drawScore;
}

function resetChoosen(){
    playersChoice = "";
    document.getElementById("playerChoice").innerText = playersChoice;

    computersChoice ="";
    document.getElementById("computerChoice").innerText = computersChoice;

}

/**
 * displays the answers chosen by the player and computer by getting both answers and setting the inner text of 
 * an element
 * @param {*} pAnswer 
 * @param {*} cAnswer 
 */
function displayChoices(pAnswer,cAnswer){
    if(pAnswer in gameOptions){
        var playersChoice = gameOptions[pAnswer];
        console.log(playersChoice);
        document.getElementById("playerChoice").innerText = playersChoice;
    }

    if(cAnswer in gameOptions){
        var computersChoice = gameOptions[cAnswer];
        console.log(computersChoice);
        document.getElementById("computerChoice").innerText = computersChoice;
    }

}

function displayRules(){
    alert(`
    -------RULES--------
    1.Scissors cuts Paper
    2.Paper covers Rock
    3.Rock crushes Lizard
    4.Lizard poisons Spock
    5.Spock smashes Scissors
    6.Scissors decapitates Lizard
    7.Lizard eats Paper
    8.Paper disproves Spock
    9.Spock vaporizes Rock
    10.Rock crushes Scissors`)
}
