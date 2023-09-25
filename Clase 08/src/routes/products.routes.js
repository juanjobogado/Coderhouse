import {Router} from "express";
import {productModel} from "../models/products.models.js";

const productRouter = Router();

productRouter.get("/",async (req,res)=>{
    const { limit, page, sort } = req.query;
    try{
        const options = {limit: limit || 10, page: page || 1, sort: { price: sort ?? sort}}
        const filter = {};
        if (req.query.category) {
            filter.category = req.query.category;
        }
        const products = await productModel.paginate(filter || options)
        res.status(200).send({response: 'ok', message: products})
    }catch(error){
        res.status(404).send({response: 'error', message: error})
    }
})

productRouter.get("/:id",async (req,res)=>{
    const {id} = req.params;
    try {
        const prods = await productModel.findById(id);
        if(prods){
            res.status(200).send({respuesta: "okay", message: prods})
        } else {
            res.status(404).send({respuesta: "Error", message: "Not Found"})
        }
    } catch (error) {
        res.status(400).send({respuesta: "error", message: error})
    }
})

productRouter.post("/", async (req,res) => {
    const {title, description, stock, code, price, category} = req.body;
    try {
        const respuesta = await productModel.create({title, description, stock, code, price, category})
        if(respuesta){
            res.status(200).send({respuesta: "okay", message: respuesta})

        } else {
            res.status(404).send({respuesta:"Error", message: "User not found"});
        }
    } catch (error) {
        res.status(400).send({respuesta: "error", message: error})
    }
})

productRouter.put("/:id", async (req,res) => {
    const {id} = req.params
    const {title, description, stock, code, price, category} = req.body;

    try {
        const products = await productModel.findByIdAndUpdate(id, {title, description, stock, code, price, category})
        if(products){
            res.status(200).send({respuesta: "okay", message: products})

        } else {
            res.status(404).send({respuesta:"Error", message: "User not found"});
        }
    } catch (error) {
        res.status(400).send({respuesta: "error", message: error})
    }
})

productRouter.delete("/:id", async (req,res) => {
    const {id} = req.params
    try {
        const prods = await productModel.findByIdAndDelete(id)
        if(prods){
            res.status(200).send({respuesta: "okay", message: prods})

        } else {
            res.status(404).send({respuesta:"Error", message: "User not found"});
        }
    } catch (error) {
        res.status(400).send({respuesta: "error", message: error})
    }
})
export default productRouter;