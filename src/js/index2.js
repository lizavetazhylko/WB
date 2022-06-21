import * as bootstrap from 'bootstrap';

const exampleCardsWrapper = document.getElementById("wrapper");

fetch('https://62af8d9b3bbf46a352237ac9.mockapi.io/itemCards')
    .then((response) => response.json())
    .then((arr) => {
        
        const fullBusket = document.getElementById('full-busket');

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

            exampleCardProductBtn.setAttribute('data-bs-toggle', 'modal');
            exampleCardProductBtn.setAttribute('data-bs-target', '#staticBackdrop');
            exampleCardProductBtn.append("жопа");

            //добавление товара в корзину 
            const exampleAddBtn = document.createElement('button');
            exampleAddBtn.append('+');
            exampleAddBtn.classList.add('example-card__product-add-btn')

            exampleAddBtn.addEventListener("click", () => {
                const busketProduct = document.createElement('div');
                const busketPrice = document.createElement('div');
                const busket = document.createElement("div");

                busketProduct.classList.add('busket-produkt');
                busketPrice.classList.add('busket-price');
                busket.classList.add('busket');

                busketProduct.append('new');
                busketPrice.append(1);

                busket.append(busketProduct, busketPrice);
                fullBusket.append(busket);

            })

            exampleCardProduct.append(exampleCardProductBtn, exampleAddBtn, exampleCardPrice, exampleCardName);
            exampleCardsWrapper.append(exampleCardProduct);
        });

        //удаление всех товаров
        const deleteAllButton = document.createElement('button');
        deleteAllButton.classList.add('example-card__product-delete-btn');

        deleteAllButton.addEventListener('click', () => {
            for (let elem of document.querySelectorAll('.busket')) {
                elem.remove();
            }
        })

        fullBusket.append(deleteAllButton);

    });



