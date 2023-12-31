import { Schema, model} from "mongoose";

const userSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true,
        index:true
    },
    edad: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})
//Parámetro 1: Nombre de la colección - Parámetro 2: Schema
export const userModel = model("users", userSchema);