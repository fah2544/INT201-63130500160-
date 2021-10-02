let alice = {
    name: "Alice",
    rollingDice: [0, 0, 0],
    result: ["", "", ""]
}

let bob = {
    name: "Bob",
    rollingDice: [0, 0, 0],
    result: ["", "", ""]
}

function randomRollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
let round = 3;

for (let x = 0; x < round; x++) {
    //แรนด้อมตรงนี้ สำหรับทอยลูกเต๋า
    let rollDice = randomRollDice();
    console.log(rollDice);
    
    let whoWin = "";
    //เป็นเลขที่alice bob สุ่มได้ โดยเอา obj เก็บเลขที่ทอย ใส่อาเรจำนวนรอบก็คือ x แล้วให้มันสุ่ม 
    //สมมุติ x=0(รอบที่0) (ใช้แรนดอม)ได้เลขที่อลิสทอยคือเลข 5 แล้วเราก็จะเอาเลข 5 ไปเก็บในอาเรของอลิสช่องที่0
    alice.rollingDice[x] = randomRollDice();
    bob.rollingDice[x] = randomRollDice();

    console.log(alice.rollingDice);
    console.log(bob.rollingDice);

    if (alice.rollingDice[x] === rollDice && bob.rollingDice[x] === rollDice) {
        alice.result[x] = "draw";        //เก็บค่าresultไว้ในอาเรช่องที่เท่ากับรอบนั้นๆ
        bob.result[x] = "draw";
        whoWin = "noOne"
    } else if (alice.rollingDice[x] !== rollDice && bob.rollingDice[x] === rollDice) {
        alice.result[x] = "lose";
        bob.result[x] = "win";
        whoWin = "bob";
    } else if (alice.rollingDice[x] === rollDice && bob.rollingDice[x] !== rollDice) {
        alice.result[x] = "win";
        bob.result[x] = "lose";
        whoWin = "alice";
    } else {
        alice.result[x] = "lose";
        bob.result[x] = "lose";
        whoWin = "noOne";
    }
}
console.log(alice.result);
console.log(bob.result);
