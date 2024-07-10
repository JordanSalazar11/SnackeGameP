let scord = 0;
let level = 1;
let punctuation = 0;

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const text = document.querySelector('text');
const scordText = document.querySelector('scordText');
const levelText = document.querySelector('levelText');
const punctuationText = document.querySelector('punctuationText');

// initialize buttons
/*button1.onclick = goStart;
button2.onclick = goRecord;
*/
document.getElementById("button1").addEventListener("click", goStart);

function update(location){
    button1.innetText = location ["button text"][0];
    button2.innetText = location ["button text"][1];
    button1.ounclick = location ["button fuction"][0];
    button2.ounclick = location ["button fuction"][1];
    text.innetText = location.text;
}

const locations =[
    {
        name: "Word",
        "button text": ["Start", "Record"],
        "button function": [goStart, goRecord],
        text: "This is the start screen, do you want to start? "
    },
    {
        name: "Record",
        "button text": ["Play Again", "View Record"],
        "button fuction": [goStart, goRecord],
        text: "This is the record screen."
    }
];      


function goStart(){
    update(locations[0]);
}

function goRecord(){
    update(locations[1]);
}

function countPunctuation(){
    if (punctuation >= 20){
        punctuation += 1;
        scord = punctuation;
        punctuationText.innetText = punctuation;
        scordText.innetText = scord;
    } else {
        text.innetText = "Congratulations you have won, move on to the next level";
        text.innetText = "New record";
    }
}

function levelUp(){
    if (level >= 3){
        level += 1;
        levelText.innetText = level;
    } else {
        text.innetText = "End of the game";
    }
    
}

function startGaame(){
    text.innetText = "Start Game";
    startButton.disabled = true;
    initializeGame();
}

function initializeGame(){
ctx.clearRect(0,0, gameCamvas.width, gameCamvas.heigth);
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 50, 50);
}



const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const canvasBoxCount = canvasSize / box;

let sneke = [];
sneke[0] = {
    x: Math.floor(canvasBoxCount / 2) * box,
    y: Math.floor(canvasBoxCount / 2) * box
};

let food =[];
food[1] = {
    x: Math.floor(Math.random() * canvasBoxCount) * box,
    y: Math.floor(Math.random() * canvasBoxCount) * box
};
let direction;
    document.addEventListener("Keydelow", changeDirection);

    function changeDirection(event) {
        if (event.keyCode == 37 && direction != "RIGHT"){
            direction = "LEFT";
        }else if (event.keyCode == 37 && direction != "DOWN"){
            direction = "UP";
        }else if (event.keyCode == 37 && direction != "LEFT"){
            direction = "RIGHT";
        }else if (event.keyCode == 37 && direction != "UP"){
            direction = "DOWN";
        }
    }