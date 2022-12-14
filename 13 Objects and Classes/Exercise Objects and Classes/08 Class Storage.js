class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
    }
    get totalCost() {        
        return this.storage.reduce((acc, el) => {return acc + el.price * el.quantity}, 0);
    }
    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        return;
    }
    getProducts() {
        let output = [];
        this.storage.forEach(product => {
            output.push(JSON.stringify(product));
        })
        return output.join('\n');
    }
}
let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);

//====================================

class Storage {
    constructor(capacity) {
      this.capacity = capacity;
      this.storage = [];
      this.totalCost = 0; 
    }
  
    addProduct(product) {
      this.storage.push(product);
      this.capacity -=product.quantity;
      this.totalCost += product.price * product.quantity;
    }
    getProducts() {
      this.storage.forEach(p => {
        console.log(JSON.stringify(p));
      })
    }
  
  }
  let storage = new Storage(50);
  
  let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
  let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
  let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
  
  storage.addProduct(productOne);
  storage.addProduct(productTwo);
  storage.addProduct(productThree);
  storage.getProducts();
  console.log(storage.capacity);
  console.log(storage.totalCost);

  //=============================

  let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };

class Storage {
    constructor(capacity) {
        this.capacity = capacity
        this.storage = [];
        this.totalCost = 0;
    }
    addProduct(product) {
        this.storage.push(product)
        this.totalCost += product.price * product.quantity
        this.capacity -= product.quantity
    }
    getProducts() {
        this.storage = this.storage.map(x => JSON.stringify(x))
        return this.storage.join("\n")       
    }
}

let storage = new Storage(50);

storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();

console.log(storage.capacity);
console.log(storage.totalCost);