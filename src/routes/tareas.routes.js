import { Router } from "express";
import { controlPrueba, crearTarea, obtenerListaTareas } from "../controllers/tareas.controllers";

const router = Router();
router.route("/prueba").get(controlPrueba)
router.route("/tareas").post(crearTarea).get(obtenerListaTareas)


export default router;