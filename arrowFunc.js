let multipleFunction = (a,b) => a*b;
console.log(multipleFunction(5,6));

//ทำหลายอย่างในฟังชั่น
const multipleFunc = (x,y) => {
    x = x-10;
    y = y-20;
    return x*y;
}
console.log(multipleFunc(8,9));

//ยัด arrow function เข้า object
let x = {
    i: 10,
    add : (x,y) => x + y,
    b: () => console.log(this.i, this), //arrow func.ไม่สามารถเข้าถึง property อื่นได้
    c: function() {
      console.log(this.i, this);  //function ธรรมดาสามารถ get property อื่นได้ , this คือตัวมันเอง
    }
}
x.b();
x.c();
