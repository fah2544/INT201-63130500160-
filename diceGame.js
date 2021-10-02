let alice={
    "name" : "alice",
    "rollDice" : 6,
    "result" : ""
}

let bob={
    "name" : "bob",
    "rollDice" : 1,
    "result" : ""
}

//let round = 3;
function randomDice() {
    return Math.floor(Math.random() * 6) +1;
}
alice.rollDice = 4;  //เปลี่ยนค่าในproperty

let diceNo = randomDice();
let whoWin = "";  //stringว่าง
if(alice.rollDice === diceNo && bob.rollDice === diceNo){
   alice.result = "Draw";
   bob.result = "Draw";
}else if(alice.rollDice !== diceNo && bob.rollDice === diceNo){
   alice.result = "Lose";
   bob.result = "Win";
   whoWin = bob.name;
}else if(alice.rollDice === diceNo && bob.rollDice !== diceNo){
    alice.result = "Win";
    bob.result = "Lose";
    whoWin = alice.name;
} else {
    alice.result = "Lose";
    bob.result = "Lose";
}

console.log(whoWin);
