let hello = "hello world"

//reverse
function reverseText(i){
    let reString = "";     //เอาไว้เก็บค่าที่ได้จากลูป
    
    for(let x = i.length - 1 ; x >= 0 ; x--){   //ทำย้อนต้องเริ่มจากตัวหลัง แล้วลบๆไปจนถึงตัวที่ 1
       reString += i[x];                        //รับมาแล้วบวกเพิ่มด้วย i ที่ตำแหน่ง x   
    }
    console.log(reString);
}
reverseText(hello);


//replace vowels with *
myReplacedString = hello.replace(/a|e|i|o|u/g, '*');   //ทำการลบ โดยเราลบตัวที่มี aeiou ซึ่ง g คือให้ไล่ดูทั้งประโยค
console.log("Result : ", myReplacedString);


//count vowel
function countVowel(c){
    let countNo = 0;                              //เอาไว้เก็บค่าที่ได้จากลูป
    for(let vw = 0; vw < c.length ; vw++){        //ไล่เข้าไปดูตั้งแต่ตัวแรก
      if(c[vw] === "a" || c[vw] === "e" || c[vw] === "i" || c[vw] === "o" || c[vw] === "u"){  //เช็คว่าcตัวที่ vw มันเป็น a หรือ eiou มั้ย
            countNo += 1;  ถ้าใช่ให้ +1
      }
    }
    console.log(countNo);  //โชวจำนวนทั้งหมดที่ + ไป (มีaeiou 3 ตัว ก็ 1+1+1 = 3)
}
countVowel(hello);