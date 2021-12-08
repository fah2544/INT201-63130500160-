//import * as bootstrap from 'bootstrap';
import { brownie, cake, cookie, donut } from "/menuList.js";
let menu = [brownie, cake, cookie, donut]

//const main = document.querySelector("#main");

function homeMenu(menu) {
    const productDiv = document.querySelector(".product-div");

    menu.forEach((product) => {
        const firstDessert = document.createElement("div");
        firstDessert.setAttribute = ("id", product.productId);
        firstDessert.className = "menuName";
        productDiv.appendChild(firstDessert);

        const firstpic = document.createElement('img');
        firstpic.src = product.image;
        firstpic.className = "card-img-top";
        productDiv.appendChild(firstpic);

        const header = document.createElement("p");
        header.textContent = product.productName;
        header.className = "card-title";
        productDiv.appendChild(header);

        const amountDessert = document.createElement("p");
        amountDessert.textContent = "amount: " + product.amount;
        amountDessert.className = "card-text";
        productDiv.appendChild(amountDessert);

        const priceDessert = document.createElement("p");
        priceDessert.textContent = "price: " + product.price;
        priceDessert.className = "card-text";
        productDiv.appendChild(priceDessert);

        const buttonAdd = document.createElement('button');
        buttonAdd.textContent = "ADD";
        buttonAdd.className = "button";
        productDiv.appendChild(buttonAdd);

        buttonAdd.addEventListener("click", () =>{
         if(updateAmount(product)){
         alert(`product ${product.productId} is already in you cart`); 
         }  
        amountDessert.textContent = "amount: " + product.amount;
        });
    });

}

homeMenu(menu);

function updateAmount(product){
    if(product.amount == 0){
        alert(`out of stock`);
        return false;
    } else {
        product.amount-- ;
        return true;
    }
}
