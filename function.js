 //function
  //function declaration
  function sum(numbers) {
    let total = 0; //local variable
    for (let num of numbers) total += num;
    return total;
  }
  console.log(sum([1, 2, 3]));
  
  //calling function, function execution
  sum([1, 2, 5, 10]);


  //function expression
const myFunc = function (numbers) {
    let total = 0; //local variable
    for (let num of numbers) total += num;
    return total;
  };
  
  //calling function, function execution
  console.log(myFunc([1, 2, 3]));


  //function expression +destructuring assignment
const myFunc = function ([num1, num2], value) {
    console.log(num1);
    console.log(num2);
    console.log(value);
  };
  
  //calling function, function execution
  myFunc([10, 20], 5);


  //function expression +destructuring assignment
const myFunc = function (num1, num2, num3) {
    console.log(num1);
    console.log(num2);
    console.log(num3);
  };
  
  //calling function, function execution with spread operator
  myFunc(...[10, 20, 5]);


//Assignment
  //1.
  const getCourse = () => 'Int201 client side programming I';

  //2.
  const echo = text => text;

  //3.
  const isKMUTTStudent = student => {if(student.id == 13) return true};

  //.4
  const sum = (num1, num2, num3) => num1 + num2 + num3;

  //5.
  const greetingSomeOne = name => {
    const greeting = ['hi', 'hello', 'hey'];
    return `${greeting[Math.floor(Math.random(3))]}, ${name}`;
  }



  //examples of reduce and map functions
let products = [
    { prodId: 1, price: 10, amount: 2 },
    { prodId: 2, price: 5, amount: 10 }
  ];
  let priceIncludeVat = products.map(
    (product) => product.price + product.price * 0.07
  );

  console.log(priceIncludeVat);
  
  
  
  let totalAmt = products.reduce(
    (total, curProd) => (total += curProd.amount),
    0
  );
  
  console.log(totalAmt);



  //examples of arguments object
let products = [
    { prodId: 1, price: 10, amount: 2 },
    { prodId: 2, price: 5, amount: 10 }
  
  ];
  
  
  function getProducts() {
    for (let i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  }
   
  getProducts(products);