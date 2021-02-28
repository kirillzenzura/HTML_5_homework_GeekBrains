let menuButton = document.querySelector("#menuButton");
let menu = document.querySelector("#menu");
let overlayMenu = document.querySelector("#overlayMenu");
let isClicked = true;

function showHide(elem) {
    if (isClicked) {
        elem.style.display = "none";
    } else {
        elem.style.display = "block";
    };
}
menuButton.addEventListener("click", function () {
    isClicked = !isClicked;
    showHide(menu);
    showHide(overlayMenu)
}
)

//Задание к уроку 1
const products = [
    { id: 1, img: 'man-in-hat.jpg', title: 'mango people t-shirt', price: 300, color: 'Blue', size: 'X1', quantity: 2 },
    { id: 1, img: 'red-jacket.jpg', title: 'mango people t-shirt', price: 400, color: 'Red', size: 'X1', quantity: 3 },
    { id: 1, img: 'man-italiano.jpg', title: 'mango people t-shirt', price: 600, color: 'Yellow', size: 'X1', quantity: 1 }
];

//Функция для формирования верстки каждого товара
const renderProduct = (item) => {
    return `<li>
    <ul class="cart__item">
        <li class="cart__item_img">
            <img src="./img/${item.img}" class="cart__item_img cart__img" alt="man-in-hat">
        </li>
        <li class="cart__info">
            <h2 class="cart__item_header">${item.title}</h2>
            <p class="cart__item_text">Price: <span class="cart_pink">$${item.price}</span></p>
            <p class="cart__item_text">Color: ${item.color}</p>
            <p class="cart__item_text">Size: ${item.size} </p>
            <p class="cart__item_text">Quantity: <input type="text" class="cart_quantity"
                    placeholder="${item.quantity}"></p>
        </li>
        <li class="cart__delete">
            <img class="cart__delete" src="./img/close-button.svg" alt="x">
        </li>
    </ul>
</li>`
};

const renderPage = list => {
    const productList = list.map(item => renderProduct(item));
    console.log(productList);
    document.querySelector('.cart__list').innerHTML = productList.join('');
};

renderPage(products);

