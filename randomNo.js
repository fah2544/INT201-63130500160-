function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;  //random1-10 (บวก1เพราะมันเริ่มต้นที่0)
}

let round = 3;
let no = randomNumber();
let player = 3;

    if (player >= 11) {
        console.log("stop game");
    }else if (player <= 0) {
        console.log("stop game");
    }else if (player > no) {
        console.log("Too high");
    } else if (player < no) {
        console.log("Too low");
    } else if (player = no) {
        console.log("YOU WIN");
    } else {
        console.log(no);
}