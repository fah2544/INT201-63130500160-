
function randomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

let x = randomNumber();
console.log("x is " + x);

let y = randomNumber();
console.log("y is " + y);

let z = randomNumber();
console.log("z is " + z);

let container = [x,y,z];
let n = 0;
container.forEach((v) => n += v);
console.log("Sum " + n);
console.log("max " + Math.max(...container)); //แยกตัวแปรใน container ออกมา
console.log("min " + Math.min(...container));

let number = 1;

if (number === 1){
    console.log(findSum(x,y,z));
} else if(number === 2){
    console.log(MinimumValue(x,y,z));
} else {
    console.log(MaximumValue(x,y,z));
}

function findSum(x,y,z){
    return x+y+z;
}
console.log("Sum is " + findSum(x,y,z));

function MinimumValue(x,y,z){
    return Math.min(x,y,z);
}
console.log("Minimum is " + MinimumValue(x,y,z));

function MaximumValue(x,y,z){
    return Math.max(x,y,z);
}
console.log("Maximum is " + MaximumValue(x,y,z));
