// Classes - (ES6 Feature) provides a more structured and cleaner way to
//           work with objects compared to traditional constructor functions

//           Ex : static keyword , encapsulation , inheritance

class Product{
    constructor(name , price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price : ₹${this.price}`)
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;


const Product1 = new Product("Shirt" , 300);
const Product2 = new Product("Pants" , 500);
const Product3 = new Product("Crop Top" , 200);

const Total1 = Product1.calculateTotal(salesTax);
const Total2 = Product2.calculateTotal(salesTax);
const Total3 = Product3.calculateTotal(salesTax);

Product1.displayProduct();
console.log(`Total Price (tax) is : ${Total1}`);

Product2.displayProduct();
console.log(`Total Price (tax) is : ${Total2}`);

Product3.displayProduct();
console.log(`Total Price (tax) is : ${Total3}`);