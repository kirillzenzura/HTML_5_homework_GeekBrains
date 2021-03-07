const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class MenuList {
    _menuShow() {
        const menuButton = document.querySelector("#menuButton");
        const menu = document.querySelector("#menu");
        const overlayMenu = document.querySelector("#overlayMenu");
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
    }
}


class ProductList {
    constructor(container = '.featured__list') {
        this.container = container;
        this.goods = []; //массив товаров
        this.allProducts = [];//массив объектов
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = [...data];
                this.render()
            });
    }
    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
    getSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<li class="featured__item">
        <img src="./img/man-italiano.jpg" alt="man-italiano.jpg" class="featured__img">
        <h3 class="featured__header">${this.title}</h3>
        <p class="featured__text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
        <p class="featured__price">$${this.price}</p>
        <div class="featured__overlay"><button type="button" class="featured__overlay-btn" id="featured__overlay-btn-${this.id}" data-id="${this.id}" data-price="${this.price}" data-title="${this.title}" ><img src="./img/basket.svg"
                    alt="basket" width="32" height="32"> Add to Cart</button></div>
    </li>`
    }
}

let list = new ProductList();
let menuListener = new MenuList();
menuListener._menuShow();

class Cart {
    constructor(container = '.featured__list') {
        this.container = container;
        this.goods = []; //массив товаров
        this.addGoods();
    }
    addGoods() {
        let buy = document.querySelector(".featured__overlay-btn");
        buy.addEventListener('click', (e) => {
            console.log(e.target);
            console.log(this);
            item = new CartItem;
            item.id = e.target.getAttribute('data-id');
            item.title = e.target.getAttribute('data-title');
            item.price = e.target.getAttribute('data-price');
            item.quantity += 1;
            console.log(item);
            this.goods.push(item);
            console.log(this.goods);
            return this.goods;
        });
    }
    removeGoods() {

    }
    changeGoods() {

    }

    render() {

    }
}

class CartItem {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.quantity = 0;
    }
    render() {

    }
}
let cart = new Cart();
console.log(cart.goods);