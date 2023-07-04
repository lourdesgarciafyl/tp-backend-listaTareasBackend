import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({
  nombreTarea:{
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 100
  }  
})

const Tarea = mongoose.model("tarea", tareaSchema);
export default Tarea;