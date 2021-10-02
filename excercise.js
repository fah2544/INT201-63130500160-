
let animal = "";

let year = 2001;

switch(year%12){
    case 0 : animal = "monkey";
    break;
    case 1 : animal = "rooster";
    break;
    case 2 : animal = "dog";
    break;
    case 3 : animal = "pig";
    break;
    case 4 : animal = "rat";
    break;
    case 5 : animal = "ox";
    break;
    case 6 : animal = "tiger";
    break;
    case 7 : animal = "rabbit";
    break;
    case 8 : animal = "dragon";
    break;
    case 9 : animal = "snake";
    break;
    case 10 : animal = "horse";
    break;
    case 11 : animal = "sheep";
    break;
    default : animal = "null";
    break;
}
console.log(animal);