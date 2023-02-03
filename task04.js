'use strict';
const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice() - this.calculateItemPrice() * this.discount;
  },
  discount: '',

  set setDiscount (promocode) {
    if (promocode === 'methed') {
      this.discount = 0.15;
    }
    if (promocode === 'newyear') {
      this.discount = 0.21;
    }
  },
  count: 0,

  add(name, price, number = 1) {
    const product = {name, price, number};
    this.items.push(product);

    this.increaseCount(number);
    this.calculateItemPrice();
    return this.items;
  },
  increaseCount(total) {
    this.count += total;
    return this.count;
  },
  calculateItemPrice() {
    return this.items.reduce((acc, num) =>
      acc + (num.price * num.number), 0);
  },
  clear() {
    this.items.length = 0;
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    this.items.forEach(item => console.log(item.name, JSON.stringify(item)));
  },
};

cart.setDiscount = 'newyear';


console.log(cart);
console.log(cart.add('Телевизор', 100, 1));
console.log(cart.add('Телефон', 100, 1));
console.log(cart.add('Приставка', 100, 1));


