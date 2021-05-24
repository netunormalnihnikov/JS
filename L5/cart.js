// 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в
// HTML - структуре.Там должен быть только div, в который будет вставляться корзина,
// сгенерированная на базе JS:
// 2.1.Пустая корзина должна выводить строку «Корзина пуста»;
// 2.2.Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

//----------------------------------------------------

// 3 *.Сделать так, чтобы товары в каталоге выводились при помощи JS:
// 3.1.Создать массив товаров(сущность Product);
// 3.2.При загрузке страницы на базе данного массива генерировать вывод из него.HTML - код должен содержать
// только div id =”catalog” без вложенного кода.Весь вид каталога генерируется JS.

//----------------------------------------------------

// не без помощи Вашего кода, разобрался, что откуда и куда.

const cartItem = {
    render(product) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${product.product_name}</div>
                    <div><b>Цена за шт.</b>: ${product.price}</div>
                    <div><b>Количество</b>: ${product.quantity}</div>
                    <div><b>Стоимость</b>: ${product.quantity * product.price}</div>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    cartItem,
    products: [
        {
            id_product: 123,
            product_name: 'Ноутбук',
            price: 45600,
            quantity: 1,
        },
        {
            id_product: 456,
            product_name: 'Мышка',
            price: 1000,
            quantity: 2,
        },
        {
            id_product: 305,
            product_name: 'Клавиатура',
            price: 2000,
            quantity: 1,
        },
    ],

    init() {
        this.cartListBlock = document.getElementById('cart');
        this.countBasket();
    },

    countBasket() {
        let result = 0;
        let quantity = 0;
        if (this.products.length === 0) {
            this.cartListBlock.textContent = "Корзина пуста";
        }
        else {
            for (const product of this.products) {
                result += product.price * product.quantity;
                quantity += product.quantity;
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(product));
            }
            this.cartListBlock.insertAdjacentHTML('beforeend', "В корзине: " + quantity + " товаров на сумму: " + result + " рублей");
        }
    },
};

cart.init();