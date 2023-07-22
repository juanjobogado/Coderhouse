// Define the class ProductManager
class ProductManager {
    // Create the constructor with the products array as a parameter
    constructor(products) {
      // Initialize the products array as an empty array
      this.products = [];
      // Initialize the id counter as 0
      this.id = 0;
    }
  
    // Define the method addProduct that takes a product object as a parameter
    addProduct(product) {
      // Validate that all the properties are present and not empty
      if (
        product.title &&
        product.description &&
        product.price &&
        product.thumbnail &&
        product.code &&
        product.stock
      ) {
        // Validate that the code is not repeated in the products array
        let found = this.products.find((p) => p.code === product.code);
        if (!found) {
          // Increment the id counter by 1
          this.id++;
          // Assign the id to the product object
          product.id = this.id;
          // Push the product object to the products array
          this.products.push(product);
        } else {
          // If the code is repeated, show an error message in the console
          console.error("The code is already in use");
        }
      } else {
        // If any property is missing or empty, show an error message in the console
        console.error("All fields are required");
      }
    }
  
    // Define the method getProducts that returns the products array
    getProducts() {
      return this.products;
    }
  
    // Define the method getProductById that takes an id as a parameter and returns the matching product object
    getProductById(id) {
      // Find the product object in the products array that has the same id as the parameter
      let product = this.products.find((p) => p.id === id);
      if (product) {
        // If there is a match, return the product object
        return product;
      } else {
        // If there is no match, show an error message in the console
        console.error("Not found");
      }
    }
  }
  