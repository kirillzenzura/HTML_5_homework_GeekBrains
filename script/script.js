
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
        this.goods = [];
        this._fetchProducts();
    }
    _fetchProducts() {
        this.goods = [
            {
                id: 1, img: 'man-in-coat.jpg',
                title: "ELLERY X M'O CAPSULE",
                discription: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 52,
                color: 'Blue',
                size: 'X1',
                quantity: 2
            },
            {
                id: 1, img: 'woman-in-suit.jpg',
                title: "ELLERY X M'O CAPSULE",
                discription: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 52,
                color: 'Blue',
                size: 'X1',
                quantity: 2
            },
            {
                id: 1, img: 'man-in-hat.jpg',
                title: "ELLERY X M'O CAPSULE",
                discription: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 52,
                color: 'Blue',
                size: 'X1',
                quantity: 2
            },
            {
                id: 1, img: 'man-in-tshirt.jpg',
                title: "ELLERY X M'O CAPSULE",
                discription: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 52,
                color: 'Blue',
                size: 'X1',
                quantity: 2
            },
            {
                id: 1, img: 'aquamarine-suit.jpg',
                title: "ELLERY X M'O CAPSULE",
                discription: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 52,
                color: 'Blue',
                size: 'X1',
                quantity: 2
            },
            {
                id: 1, img: 'woman-in-cardigan.jpg',
                title: "ELLERY X M'O CAPSULE",
                discription: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 52,
                color: 'Blue',
                size: 'X1',
                quantity: 2
            },
        ]
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            console.log(productObj.render());
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
    getSum() {
        let total = this.goods.reduce((sum, item) => sum += item.price, 0);
        alert(total);
    }
}

class ProductItem {
    constructor(product) {
        this.id = product.id;
        this.img = product.img;
        this.title = product.title;
        this.discription = product.discription;
        this.price = product.price;
        this.color = product.color;
        this.size = product.size;
        this.quantity = product.quantity;
    }
    render() {
        return `<li class="featured__item">
        <img src="./img/${this.img}" alt="${this.img}" class="featured__img">
        <h3 class="featured__header">${this.title}</h3>
        <p class="featured__text">${this.discription}</p>
        <p class="featured__price">$${this.price}</p>
        <div class="featured__overlay"><button class="featured__overlay-btn"><img src="./img/basket.svg"
                    alt="basket" width="32" height="32"> Add to Cart</button></div>
    </li>`
    }
}

let list = new ProductList();
list.render();
list.getSum();
let menuListener = new MenuList();
menuListener._menuShow();

class Cart {
    addGoods() {

    }
    removeGoods() {

    }
    changeGoods() {

    }

    render() {

    }
}

class CartItem {
    render() {

    }
}