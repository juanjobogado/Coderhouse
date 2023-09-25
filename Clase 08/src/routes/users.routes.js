import { Router } from "express";
import { userModel } from "../models/users.models.js";

const userRouter = Router()

userRouter.get("/", async (req,res) => {
    try {
        const users = await userModel.find()

        res.status(200).send({respuesta: "okay", message: users})
    } catch (error) {
        res.status(400).send({respuesta: "error", message: error})
    }
})

userRouter.get("/:id", async (req,res) => {
    const {id} = req.params
    try {
        const users = await userModel.findById(id)
        if(users){
            res.status(200).send({respuesta: "okay", message: users})

        } else {
            res.status(404).send({respuesta:"Error", message: "User not found"});
        }
    } catch (error) {
        res.status(400).send({respuesta: "error", message: error})
    }
})

userRouter.post("/", async (req,res) => {
    const {nombre, apellido, edad, email, password} = req.body;
    try {
        const respuesta = await userModel.create({nombre,apellido,edad,email,password})
        if(respuesta){
            res.status(200).send({respuesta: "okay", message: respuesta})

        } else {
            res.status(404).send({respuesta:"Error", message: "User not found"});
        }
    } catch (error) {
        res.status(400).send({respuesta: "error", message: error})
    }
})

userRouter.put("/:id", async (req,res) => {
    const {id} = req.params
    const {nombre, apellido, edad, email, password} = req.body;

    try {
        const users = await userModel.findByIdAndUpdate(id, {nombre, apellido, edad, email, password})
        if(users){
            res.status(200).send({respuesta: "okay", message: users})

        } else {
            res.status(404).send({respuesta:"Error", message: "User not found"});
        }
    } catch (error) {
        res.status(400).send({respuesta: "error", message: error})
    }
})

userRouter.delete("/:id", async (req,res) => {
    const {id} = req.params
    try {
        const users = await userModel.findByIdAndDelete(id)
        if(users){
            res.status(200).send({respuesta: "okay", message: users})

        } else {
            res.status(404).send({respuesta:"Error", message: "User not found"});
        }
    } catch (error) {
        res.status(400).send({respuesta: "error", message: error})
    }
})


export default userRouter;