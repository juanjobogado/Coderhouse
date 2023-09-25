import express from "express";
import userRouter from "./routes/users.routes.js";
import mongoose from "mongoose";
import productRouter from "./routes/products.routes.js"
import cartRouter from "./routes/cart.routes.js";
import { cartModel } from "./models/carts.models.js";
import "dotenv/config";

const app = express();
const PORT = 4000;

mongoose.connect(process.env.MONGO_URL)
.then(async ()=>{
    console.log("DB is connected")
    // const resultados = await userModel.find({apellido:"Robles"}).explain("executionStats")

    // console.log(resultados)
})
.catch(()=> console.log("Error en la conexión"))

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);

app.listen(PORT, ()=>{
    console.log("Listening on port 4000")
});