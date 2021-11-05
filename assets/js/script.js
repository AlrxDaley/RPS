var results = {
    "12": {
        "win": false
    },
    "13": {
        "win": true
    },
    "14": {
        "win": true
    },
    "15": {
        "win": false
    },
    "16": {
        "win": true
    },
    "17": {
        "win": false
    },
    "18": {
        "win": false
    },
    "19": {
        "win": true
    },
    "21": {
        "win": true
    },
    "23": {
        "win": false
    },
    "24": {
        "win": false
    },
    "25": {
        "win": true
    },
    "26": {
        "win": false
    },
    "27": {
        "win": true
    },
    "28": {
        "win": true
    },
    "29": {
        "win": false
    },
    "31": {
        "win": false
    },
    "32": {
        "win": true
    },
    "34": {
        "win": true
    },
    "35": {
        "win": false
    },
    "36": {
        "win": true
    },
    "37": {
        "win": false
    },
    "38": {
        "win": true
    },
    "39": {
        "win": false
    },
    "41": {
        "win": false
    },
    "42": {
        "win": true
    },
    "43": {
        "win": false
    },
    "45": {
        "win": true
    },
    "51": {
        "win": true
    },
    "52": {
        "win": false
    },
    "53": {
        "win": true
    },
    "54": {
        "win": false
    },
    "61": {
        "win": false
    },
    "62": {
        "win": true
    },
    "63": {
        "win": false
    },
    "67": {
        "win": true
    },
    "68": {
        "win": true
    },
    "69": {
        "win": false
    },
    "71": {
        "win": true
    },
    "72": {
        "win": false
    },
    "73": {
        "win": true
    },
    "76": {
        "win": false
    },
    "78": {
        "win": false
    },
    "79": {
        "win": true
    },
    "81": {
        "win": true
    },
    "82": {
        "win": false
    },
    "83": {
        "win": false
    },
    "86": {
        "win": false
    },
    "87": {
        "win": true
    },
    "89": {
        "win": true
    },
    "91": {
        "win": false
    },
    "92": {
        "win": true
    },
    "93": {
        "win": true
    },
    "96": {
        "win": true
    },
    "97": {
        "win": false
    },
    "98": {
        "win": false
    },
}

var gameOptions = {
    '1': "Rock",
    "2": "Paper",
    "3": "Scissors",
    "4": "Lizard",
    "5": "Spock",
    "6": "Sponge",
    "7": "Water",
    "8": "Air",
    "9": "Fire"
};

var levelDifficultyOptions = {
    "3": [1, 2, 3],
    "4": [1, 2, 3, 4, 5],
    "7": [1, 2, 3, 6, 7, 8, 9]
};

var difficulty = 3;
var playerScore = 0;
var computerScore = 0;
var drawScore = 0;
var playersChoice = "";
var computerChoice = "";

/**
 * Sets the level dificulty
 * @param {*} levelDificulty 
 */
function dificultySelector(levelDificulty) {
    difficulty = levelDificulty;
}

/**
 * Takes the number of the options selected by the user and checks if it makes the 
 * computers answer, if it doesnt it sends both results to the combining results function.
 * @param {*} playerAnswer 
 */
function runGame(playerAnswer) {
    var computerAnswer = gettingTheComputersAnswer();
    if (playerAnswer == computerAnswer) {
        increaseDrawScore();
        displayChoices(playerAnswer, computerAnswer);
    } else {
        combiningResults(playerAnswer, computerAnswer);
        displayChoices(playerAnswer, computerAnswer);
    }
}

/**
 * Takes the global dificulty var and uses it with Math and random to 
 * generate a random number that is assinged to an option within the game.
 * @returns 
 */
function gettingTheComputersAnswer() {
    var index = Math.floor(Math.random() * difficulty);
    var answer = levelDifficultyOptions[difficulty.toString()][index].toString();
    return answer;
}

/**
 * Takes the players answer and the computers answer and combines them 
 * then checks if the result is a key within the results dict and if the 
 * information in the dict is true or false.
 * @param {*} pAnswer 
 * @param {*} cAnswer 
 */
function combiningResults(pAnswer, cAnswer) {
    var result = pAnswer + cAnswer;
    console.log(result)
    if (results[result].win == true) {
        increasePlayerScore();
    } else if (results[result].win == false) {
        increaseComputerScore();
    }

}

/**
 * Hides the two extra options buttons and calls the resetScore function.
 */
function createButtonWhenLevelChangedTo1() {
    dificultySelector(3)
    var sbutton = document.getElementById("spock");
    var lbutton = document.getElementById("lizard");

    sbutton.style.display = 'none';
    lbutton.style.display = 'none';

    var abutton = document.getElementById("air")
    var spbutton = document.getElementById("sponge")
    var wbutton = document.getElementById("water")
    var fbutton = document.getElementById("fire")


    abutton.style.display = 'none';
    spbutton.style.display = 'none';
    wbutton.style.display = 'none';
    fbutton.style.display = 'none';

    resetScore();
    resetChoosen();


}

/**
 * Makes the lizard option visible and makes sure the spock option stays hidden
 * aswell as calling the resetScore function.
 */
function createButtonWhenLevelChangedTo2() {
    dificultySelector(4)
    var lbutton = document.getElementById("lizard");
    var sbutton = document.getElementById("spock");

    lbutton.style.display = 'inline';
    sbutton.style.display = 'inline';

    var abutton = document.getElementById("air")
    var spbutton = document.getElementById("sponge")
    var wbutton = document.getElementById("water")
    var fbutton = document.getElementById("fire")


    abutton.style.display = 'none';
    spbutton.style.display = 'none';
    wbutton.style.display = 'none';
    fbutton.style.display = 'none';

    resetScore();
    resetChoosen();

}

/**
 * Makes both buttons visible aswell as calling the resetScore function.
 */
function createButtonWhenLevelChangedTo3() {
    dificultySelector(7)
    var sbutton = document.getElementById("spock");
    var lbutton = document.getElementById("lizard");

    lbutton.style.display = 'none';
    sbutton.style.display = 'none';


    var abutton = document.getElementById("air")
    var spbutton = document.getElementById("sponge")
    var wbutton = document.getElementById("water")
    var fbutton = document.getElementById("fire")

    abutton.style.display = 'inline';
    spbutton.style.display = 'inline';
    wbutton.style.display = 'inline';
    fbutton.style.display = 'inline';

    resetScore();
    resetChoosen();

}

/**
 * Adds 1 to the player score var and then assigns the var to 
 * the inner text of the element.
 */
function increasePlayerScore() {
    ++playerScore;
    document.getElementById('pscore').innerText = playerScore;

}

/**
 * Adds 1 to the computer score var and then assigns the var to 
 * the inner text of the element.
 */
function increaseComputerScore() {
    ++computerScore;
    document.getElementById('cscore').innerText = computerScore;
}

/**
 * Adds 1 to the draw score var and then assigns the var to 
 * the inner text of the element.
 */
function increaseDrawScore() {
    ++drawScore;
    document.getElementById('dscore').innerText = drawScore;
}

/**
 * resets all the global variables to 0 and then assigns them to the elements.
 */
function resetScore() {
    playerScore = 0;
    document.getElementById('pscore').innerText = playerScore;
    computerScore = 0;
    document.getElementById('cscore').innerText = computerScore;
    drawScore = 0;
    document.getElementById('dscore').innerText = drawScore;
}

function resetChoosen() {
    playersChoice = "";
    document.getElementById("playerChoice").innerText = playersChoice;

    computersChoice = "";
    document.getElementById("computerChoice").innerText = computersChoice;

}

/**
 * displays the answers chosen by the player and computer by getting both answers and setting the inner text of 
 * an element
 * @param {*} pAnswer 
 * @param {*} cAnswer 
 */
function displayChoices(pAnswer, cAnswer) {
    if (pAnswer in gameOptions) {
        console.log("true")
        var playersChoice = gameOptions[pAnswer];
        console.log(playersChoice);
        document.getElementById("playerChoice").innerText = playersChoice;
    }

    if (cAnswer in gameOptions) {
        var computersChoice = gameOptions[cAnswer];
        console.log(computersChoice);
        document.getElementById("computerChoice").innerText = computersChoice;
    }

}

function displayRules() {
    alert(`
    -------RULES--------
    ------Level 1-------
    1.Scissors cuts Paper
    2.Paper covers Rock
    3.Rock crushes Scissors
    ------Level 2-------
    1.Scissors cuts Paper
    2.Paper covers Rock
    3.Rock crushes Lizard
    4.Lizard poisons Spock
    5.Spock smashes Scissors
    6.Scissors decapitates Lizard
    7.Lizard eats Paper
    8.Paper disproves Spock
    9.Spock vaporizes Rock
    10.Rock crushes Scissors
    ------Level 3-------
    1.Rock pounds out fire,crushes scissors and sponge
    2.Fire melts scissors, burns paper and sponge
    3.Sponge soaks paper, uses air pockets and absorbs water
    4.Paper fans air, covers rock, floats on water
    5.Air blows out fire, erodes rock and evaporates water
    6.Water erodes rock, puts out fire and rusts scissors
    `)

}