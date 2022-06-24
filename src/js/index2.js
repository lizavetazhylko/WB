import * as bootstrap from 'bootstrap';

const exampleCardsWrapper = document.getElementById("wrapper"); // контейнер со всеми карточками

//загружает занны в LS и из LS
let prod = [];

if (localStorage.getItem('prod')) {
    prod = JSON.parse(localStorage.getItem('prod'))
}
else {
    localStorage.setItem('prod', JSON.stringify([]))
}

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
            // console.log('sale', sale);//а нам нужно выводить скидку в консоль??
            exampleCardPrice.innerHTML = element.itemPrice + " BYN";
            exampleCardPriceSale.innerHTML = Math.round(element.itemPrice * 100 / (100 - sale)) + " BYN";
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
            exampleAddBtn.classList.add('example-card__product-add-btn');

            exampleAddBtn.addEventListener('click', () => {
                prod = JSON.parse(localStorage.getItem("prod"));
                prod.push(element);
                localStorage.setItem("prod", JSON.stringify(prod));
                //exampleCardPrice.innerHTML;
            })

            exampleCardSaleButton.append(exampleCardInfoSale, exampleAddBtn);
            exampleCardInfoWrapper.append(exampleCardPrice, "   ", exampleCardName);
            exampleCardInfo.append(exampleCardInfoWrapper, exampleCardPriceSale);
            exampleCardProduct.append(exampleCardProductBtn, exampleCardSaleButton);
            exampleCardProductCard.append(exampleCardProduct, exampleCardInfo);
            exampleCardsWrapper.append(exampleCardProductCard);
        });

    });



const busket = document.getElementById('full-busket');
let arr = [];

document.getElementById('prod').addEventListener('click', () => {

    if (localStorage.getItem('prod')) {
        arr = JSON.parse(localStorage.getItem('prod')).slice(busket.parentElementCount);
    }

    arr.forEach(elem => {
        const busketProduct = document.createElement('span');//название вещи в корзине
        busketProduct.classList.add('busket-produkt');
        busketProduct.textContent = elem.itemName;

        const busketPrice = document.createElement('span');//цена в корзине
        busketPrice.classList.add('busket-price');
        busketPrice.textContent = elem.itemPrice + ' BYN';

        const busEl = document.createElement('div'); // контейнер одного товара с ценой и названием
        busEl.classList.add('bus-el');

        busEl.append(busketProduct, busketPrice, /*busketDelProd*/);
        busket.append(busEl);


        //btn удалит только 1 выбранную покупку NO NO NO
        // const busketDelProd = document.createElement("button");
        // busketDelProd.classList.add('busket-del-prod');
        // busketDelProd.append('X');

        // busketDelProd.addEventListener('click', () => {
        //     busEl.remove();
        //     const inBusket = JSON.parse(localStorage.getItem('prod'));
        //     console.log(inBusket);
        //     localStorage.setItem('prod', JSON.stringify(inBusket.filter((el) => el.ID !== elem.ID)));
        // })
    })

    sum()
})

//Кнопка в карзинц для удаления всех товаров
const removeAllBusket = document.createElement('button');
removeAllBusket.classList.add('remove-all');
removeAllBusket.append('Отчистить корзину!');
removeAllBusket.addEventListener('click', delAll);
busket.append(removeAllBusket);


function delAll() {
    for (let elem of document.querySelectorAll('.bus-el')) {
        elem.remove();
    }
    localStorage.setItem('prod', JSON.stringify([]));
    sum();
}


//Для подсчета суммы

const fullPrice = document.getElementById('full-price');

function sum() {
    let arr = [];

    if (localStorage.getItem('prod')) {
        arr = JSON.parse(localStorage.getItem('prod'));
    }
    fullPrice.textContent = (`Итоговая сумма: ${arr.reduce((sum, item) => sum + item.itemPrice, 0)} BYN.`);

}

