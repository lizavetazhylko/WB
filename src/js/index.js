import * as bootstrap from 'bootstrap';


/*const exampleCardWrapper = document.getElementsByClassName("example-card__wrapper");

fetch('https://62af8d9b3bbf46a352237ac9.mockapi.io/itemCards')
//.then((response) => response)
.then((response) => response.json())
//.then((response) => console.log(response))
.then((arr) => {
    arr.forEach(element => {
        const div = document.createElement("div");
        const spanName = document.createElement("span");
        const spanPrice = document.createElement("span");
        const img = document.createElement("img");

        spanName.textContent= element.itemName;
        spanPrice.textContent = element.itemPrice;
        img.src = element.itemImg;

        div.append(spanName, spanPrice, img);
        exampleCardWrapper.append(div);
    });
})

.catch(() => console.log("Error"))*/

const exampleCardsWrapper = document.getElementById("wrapper");

fetch('https://62af8d9b3bbf46a352237ac9.mockapi.io/itemCards')
.then((response) => response.json())
.then((arr) => {
    arr.forEach(element => {
        const cardExample = document.createElement('div');
        const exampleCardProduct = document.createElement('div');
        const exampleCardProductBtn = document.createElement('button');
        const exampleCardPrice = document.createElement('span');
        const exampleCardName = document.createElement('span');

        //cardExample.classList.add('example-card');
        exampleCardProduct.classList.add('example-card__product');
        exampleCardProductBtn.classList.add('example-card__product-btn');
        exampleCardPrice.classList.add('example-card__product-price');
        exampleCardName.classList.add('example-card__product-name');

        //exampleCardProduct.element.itemImg;
        exampleCardPrice.textContent.itemPrice;
        exampleCardName.textContent.itemName;

        exampleCardProduct.append(exampleCardProductBtn, exampleCardPrice, exampleCardName);
        exampleCardsWrapper.append(exampleCardProduct);
    });
})