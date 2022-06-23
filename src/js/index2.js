import * as bootstrap from 'bootstrap';

const exampleCardsWrapper = document.getElementById("wrapper"); // контейнер со всеми карточками

fetch('https://62af8d9b3bbf46a352237ac9.mockapi.io/itemCards')
    .then((response) => response.json())
    .then((arr) => {
        
        const fullBusket = document.getElementById('full-busket');

        arr.forEach(element => {
            const exampleCardProduct = document.createElement('div'); //див карточки
            const exampleCardProductBtn = document.createElement('button'); // кнопка быстрого просмотра товара
            const exampleCardInfo = document.createElement('div'); // див для цены зачеркнутой и нормальной + название товара
            const exampleCardSaleButton = document.createElement('div'); // див для кнопки "добавить в корзину" и кружочка с % скидки
            const exampleCardInfoWrapper = document.createElement("div");//див для цены (со скидкой) и названия товара 
            const exampleCardPrice = document.createElement('span'); // цена
            const exampleCardPriceSale = document.createElement('span'); // цена зачеркнутая
            const exampleCardName = document.createElement('span'); // название товара 
            const exampleCardProductCard = document.createElement('div');// див карточки + информации о товаре и цены
            const exampleCardInfoSale = document.createElement("span");// кружочек с размером скидки


            exampleCardProduct.classList.add('example-card__product');
            exampleCardProductBtn.classList.add('example-card__product-btn');
            exampleCardPrice.classList.add('example-card__product-price');
            exampleCardName.classList.add('example-card__product-name');
            exampleCardInfo.classList.add('example-card__info');
            exampleCardProductCard.classList.add('example-card__product-card');
            exampleCardInfoSale.classList.add('example-card__sale')
            exampleCardInfoWrapper.classList.add('example-card__info-wrapper');
            exampleCardSaleButton.classList.add('example-card__sale-button');
            exampleCardPriceSale.classList.add('example-card__product-price-sale');

            //все, что касается скидки 
            const sale = Math.floor(Math.random() * 40);
            console.log('sale', sale);
            exampleCardPrice.innerHTML = element.itemPrice + " BYN";
            exampleCardPriceSale.innerHTML = Math.round(element.itemPrice *  100 / (100 - sale)) + " BYN";
            exampleCardName.innerHTML = element.itemName;
            exampleCardInfoSale.innerHTML = sale + '%';

            //подключение модального окна к кнопке "быстрый просмотр"
            exampleCardProductBtn.setAttribute('data-bs-toggle', 'modal');
            exampleCardProductBtn.setAttribute('data-bs-target', '#staticBackdrop1');
            exampleCardProductBtn.addEventListener("click", (e) => {
                const img2 = e.currentTarget.parentNode;
                const divMW = document.getElementById('jopa');
                divMW.style.backgroundImage = img2.style.backgroundImage;
                divMW.classList.add('MW');
            } //добавление увеличенной картинки в модальное окно

            )
            exampleCardProductBtn.append("жопа"); // кнопка быстрого просмотра
            exampleCardProduct.style.backgroundImage = `url(${(element.itemImg)})`; //фон карточки

            //добавление товара в корзину 
            const exampleAddBtn = document.createElement('button');
            exampleAddBtn.innerHTML = "+";
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

            exampleCardSaleButton.append(exampleCardInfoSale, exampleAddBtn);
            exampleCardInfoWrapper.append(exampleCardPrice, "   ", exampleCardName);
            exampleCardInfo.append(exampleCardInfoWrapper, exampleCardPriceSale);
            exampleCardProduct.append(exampleCardProductBtn, exampleCardSaleButton);
            exampleCardProductCard.append(exampleCardProduct, exampleCardInfo);
            exampleCardsWrapper.append(exampleCardProductCard);
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



