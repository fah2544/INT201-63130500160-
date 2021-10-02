//แบบฝึกหัด2  assign3
let question = {
    "q1": {
        "problem": "whatIs",
        "answer": "there",
        "choice": {
            "A": "there",
            "B": "those",
            "C": "these"
        }
    },
    "q2": {
        "problem": "whatIs",
        "answer": "A",
        "choice": {
            "A": "there",
            "B": "those",
            "C": "these"
        }
    },
    "q3": {
        "problem": "whatIs",
        "answer": "A",
        "choice": {
            "A": "there",
            "B": "those",
            "C": "these"
        }
    },
    "q4": {
        "problem": "whatIs",
        "answer": "A",
        "choice": {
            "A": "there",
            "B": "those",
            "C": "these"
        }
    },
    "q5": {
        "problem": "whatIs",
        "answer": "A",
        "choice": {
            "A": "there",
            "B": "those",
            "C": "these"
        }
    },
}

let player = {
    "name" : "Bob",
    "totalScore" : []
}

console.log("Question: " + question.q1.problem);
console.log("choice is: "  );

for(let i in question.q1.choice){   //ใช้for in วนลูปแสดงค่าใน object ย่อยนั้น
    console.log(i + " " + question.q1.choice[i]); //ถ้า i เป็น obj จะเก็บ key ของ นbj ไว้
}

let playerChoose = question.q1.choice.A ;  //ผู้เล่นเลือกคำถาม

for(let round = 0 ; round < 10; round++){    //วนเล่นแต่ละรอบ
    if(playerChoose == question.q1.answer){  //เช็คว่าเท่ากันมั้ย
        console.log("Correct");
        player.totalScore.push(1); //push คือการส่งตัวนั้นๆที่ต้องการเข้าไปใน total score
    }else{
        console.log("not correct");
    }
}

let sum = 0; //ประกาศค่ามาเพื่อหาผลรวม แต่เรายังไม่รู้ค่านั้นก็ใส่0ไว้ก่อน
for(let i in player.totalScore){   //วนเพื่อดูว่าแต่ละรอบเราได้คะแนนมั้ย
    console.log(player.totalScore[i]); //i เก็บค่าตำแหน่งใน array 
    sum = sum + player.totalScore[i];  //แล้วเอาคะแนนแต่ละรอบมาบวกกับ sum 
}
console.log(sum); //จะได้10 เพราะเล่น10รอบ ชนะทุกรอบ
//console.log(player.totalScore)

