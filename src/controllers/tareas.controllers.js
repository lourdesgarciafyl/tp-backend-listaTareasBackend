import { json } from "express";
import Tarea from "../models/tarea";

export const crearTarea = async (req, res) =>{
    try{
        const tareaNueva = new Tarea(req.body);
        await tareaNueva.save();
        res.status(201).json({
            mensaje: "La tarea fue creada correctamente"
        })
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "Error. No se pudo crear la tarea"
        })
    }
}
