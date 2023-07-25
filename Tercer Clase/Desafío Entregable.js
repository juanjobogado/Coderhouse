class ProductManager{
    constructor(path){
        this.path = path;
        this.products = [];
        this.id = 0;
    }

    addProduct(product){
        if(product.title && product.description && product.price && product.thumbnail && product.code && product.stock){
            let findProduct = this.products.find((e) => e.id === product.id)
            if(!findProduct){
                this.id++;
                product.id = this.id;
                this.products.push(product);
            }
        } else {
            console.log("All fields must be filled")
        }
        

    }

    getProducts(){
        
        console.log(this.products)
        return this.products;
    }

    getProductById(id){
        let product = this.products.find((e) => e.id === id)
        console.log(product)
        return product;
    }

    updateProduct(id, title, description, price, thumbnail, code, stock){
        let product = this.products.find((e) => e.id === id)
        if(product){
            // Actualiza las propiedades del producto original
            product.title = title;
            product.description = description;
            product.price = price;
            product.thumbnail = thumbnail;
            product.code = code;
            product.stock = stock;
            console.log(`Product updated: ${product}`)
        } else {
            console.log("Cannot update the product")
        }

        // Verifica si el producto existe antes de retornarlo
        if (product) {
          return product;
        } else {
          return null;
        }
    }

    deleteProduct(id){
        // Busca el índice del producto con el id dado
        let index = this.products.findIndex((e) => e.id === id); 
        if (index !== -1) { // Si se encuentra el índice
          // Elimina el elemento en ese índice y lo guarda en una variable
          let productDeleted = this.products.splice(index, 1); 
          console.log(productDeleted, "Product Deleted"); // Muestra el producto eliminado
        } else {
          console.log("There's no product with that Id"); // Si no se encuentra el índice
        }
        
    }

}

product1 = new ProductManager();
product1.addProduct({
    title: "algo",
    description: "algo",
    price: "algo",
    thumbnail: "algo",
    code: "algo",
    stock: "algo"
})
product1.addProduct({
    title: "x",
    description: "x",
    price: "x",
    thumbnail: "x",
    code: "x",
    stock: "x"
})

product1.deleteProduct(2);
// product1.deleteProduct(2)
// product1.updateProduct(2,"hola", "hola", "hola", "hola" ,"hola", "hola" )
product1.getProducts()
// product1.getProductById(2)