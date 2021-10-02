//change pound to kg
function kilo(pounds){
    return pounds * 0.453592;
}
let weight = kilo(36.5);
console.log("Georgia's weight : " + weight);

//change inch to meter
function meter(inch){
    return inch * 0.0254;
}
let height = meter(39);
console.log("Georgia's height : " + height);

//bmi method
function BMI(height , weight){
    return weight / Math.pow(height,2);
}
console.log("Body mass index is " + BMI(height , weight));