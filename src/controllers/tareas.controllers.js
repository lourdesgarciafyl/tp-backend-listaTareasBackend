import { json } from "express";
import Tarea from "../models/tarea";

export const controlPrueba = (req, res) => {
    res.send("Esta es una prueba de mi ruta get")
}
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

export const obtenerListaTareas = async (req, res) =>{
    try{
        const tareas = await Tarea.find();
        res.status(200).json(tareas);
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "Error. No se pudo obtener la lista de tareas"
        })
    }
}

export const obtenerTarea = async (req, res) =>{
    try{
        const tarea = await Tarea.findById(req.params.id);
        res.status(200).json(tarea);
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "Error. No se pudo obtener la tarea."
        })
    }
}

export const borrarTarea = async (req, res) =>{
    try{
        await Tarea.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: "La tarea se elimino correctamente"
        })
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: "Error. No se pudo borrar la tarea."
        })
    }
}