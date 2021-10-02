let money = {
    fiveHundred : 0,
    hundred : 0,
    fifty : 0,
    twenty : 0,
    ten : 0,
    five : 0,
    two : 0,
    one : 0,
}

function sellProduct(price){
    let amountFiveHundred = Math.floor(price / 500);  //หาร500เพื่อให้รู้ว่าได้แบง500กี่ใบ
    let restMoney1 = price - (amountFiveHundred * 500);  //หาเงินที่เหลือจากการที่แลกแบงค์500ไปแล้ว  
                     //เช่น 1050 เราทำข้างบนเพื่อแลกแบง500ไปแล้ว 2 ใบ เราก็จะเหลือแบง50 แล้วแบง50ก็จะไปทำแบงที่เหลือต่อ

    let amountHundred = Math.floor(restMoney1 / 100);
    let restMoney2 = restMoney1 - (amountHundred * 100);

    let amountFifty = Math.floor(restMoney2 / 50);
    let restMoney3 = restMoney2 - (amountFifty * 50);

    let amountTwenty = Math.floor(restMoney3 / 20);
    let restMoney4 = restMoney3 - (amountTwenty * 20);

    let amountTen = Math.floor(restMoney4 / 10);
    let restMoney5 = restMoney4 - (amountTen * 10);

    let amountFive = Math.floor(restMoney5 / 5);
    let restMoney6 = restMoney5 - (amountFive * 5);

    let amountTwo = Math.floor(restMoney6 / 2);
    let restMoney7 = restMoney6 - (amountTwo * 2);

    let amountOne = Math.floor(restMoney7 / 1);
    let restMoney8 = restMoney7 - (amountOne * 1);

    money.fiveHundred = amountFiveHundred;
    money.hundred = amountHundred;
    money.fifty = amountFifty;
    money.ten = amountTen;
    money.five = amountFive;
    money.two = amountTwo;
    money.one = amountOne;
}
sellProduct(1000);
console.log(money);