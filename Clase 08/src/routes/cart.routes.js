import { Router } from "express";
import {cartModel} from "../models/carts.models.js";
import { productModel } from "../models/products.models.js";

const cartRouter = Router();

cartRouter.get('/', async (req, res)=>{
    try {
        const carts = await cartModel.find();
        if(carts){
            res.status(200).send({response: 'ok', message: carts})
        }else{
            res.status(404).send({response: 'error', message:'Not found'})
        }
    } catch (error) {
        res.status(400).send({response: 'Error trying to get de carts.', message: error});
    }
})

cartRouter.get("/:id",async (req,res)=>{
    const {id} = req.params;
    try {
        const cart = await cartModel.findById(id);
        if(cart){
            res.status(200).send({respuesta: "okay", message: cart})
        } else {
            res.status(404).send({respuesta: "Error", message: "Not Found"})
        }
    } catch (error) {
        res.status(400).send({respuesta: "error", message: error})
    }
})

cartRouter.post("/", async (req,res) => {
    try {
        const respuesta = await cartModel.create({})
            res.status(200).send({respuesta: "okay", message: respuesta})
    } catch (error) {
        res.status(400).send({respuesta: "error", message: error})
    }
})

cartRouter.post('/:cid/products/:pid', async (req, res) => {
    const { cid, pid } = req.params
    const { quantity } = req.body

    try {
        const cart = await cartModel.findById(cid)
        if (cart) {
            const prod = await productModel.findById(pid) 

            if (prod) {
                const index = cart.products.findIndex(item => item.id_prod == pid) 
                if (index != -1) {
                    cart.products[index].quantity = quantity 
                } else {
                    cart.products.push({ id_prod: pid, quantity: quantity }) 
                }
                const response = await cartModel.findByIdAndUpdate(cid, cart) 
                res.status(200).send({ response: 'OK', message: response })
            } else {
                res.status(404).send({ response: 'Error adding product to Cart', message: 'Product Not Found' })
            }
        } else {
            res.status(404).send({ response: 'Error adding product to Cart', message: 'Cart Not Found' })
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({ response: 'Error adding product to Cart', message: error })
    }
})


cartRouter.put("/:cid", async (req,res) => {
    const {cid} = req.params;
    const {products} = req.body; // El nuevo array de productos
    try {
        const cart = await cartModel.findByIdAndUpdate(cid, {products: products});
        if(cart){
            res.status(200).send("Carrito actualizado");
        } else {
            res.status(404).send("Carrito no encontrado");
        }
    } catch (error) {
        res.status(400).send("Error al actualizar el carrito");
    }
})

cartRouter.put('/:cid/products/:pid', async (req, res)=>{
    const {cid, pid} = req.params;
    const { quantity } = req.body;
    try{
        const cart = await cartModel.findById(cid);
        if(cart){
            const product = await productModel.findById(pid);
            if(product){
                const index = cart.products.findIndex(prod => prod.id_prod._id.toString() === pid)
                if(index != -1){
                    cart.products[index].quantity = quantity;
                    await cartModel.findByIdAndUpdate(cid, cart)
                    res.status(200).send({response: 'ok', message: 'Quantity modified.'})
                }else{
                    res.status(404).send({response: 'error', message: 'Product not found in the cart.'})
                }
            }else{
                res.status(404).send({response: 'error', message: 'Product not found.'})
            }
        }else{
            res.status(404).send({response: 'error', message: 'Cart not found.'})
        }

    }catch(error){
        res.status(400).send({response: 'Error trying to update the quantity.', message: error});
    }
})

cartRouter.delete('/:cid', async (req, res)=>{
    const { cid } = req.params
    try{
        const cart = await cartModel.findById(cid);
        if(cart){
            cart.products = [];
            await cartModel.findByIdAndUpdate(cid, cart);
            res.status(200).send({response: 'ok', message: cart});
        }else{
            res.status(404).send({response: 'error', message: 'Cart not found.'});
        }
    }catch(error){
        res.status(400).send({response: 'Error trying to delete the cart.', message: error});
    }
})

cartRouter.delete('/:cid/products/:pid', async (req, res)=>{
    const { cid, pid } = req.params;
    try{
        const cart = await cartModel.findById(cid);
        if(cart){
            const product = await productModel.findById(pid);
            if(product){
                cart.products = cart.products.filter(prod => prod.id_prod._id.toString() !== pid);
                await cartModel.findByIdAndUpdate(cid, cart);
                res.status(200).send({response: 'ok', message: 'Product deleted from the cart.'});
            }else{
                res.status(404).send({response: 'error', message: 'Product not found.'});
            }
        }else{
            res.status(404).send({response: 'error', message: 'Cart not found.'});
        }
    }catch(error){
        res.status(400).send({response: 'Error trying to delete the product of the cart.', message: error});
    }
})

export default cartRouter;