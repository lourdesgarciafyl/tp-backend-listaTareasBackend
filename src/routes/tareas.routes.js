import { Router } from "express";
import { borrarTarea, controlPrueba, crearTarea, obtenerListaTareas, obtenerTarea } from "../controllers/tareas.controllers";

const router = Router();
router.route("/prueba").get(controlPrueba)
router.route("/tareas").post(crearTarea).get(obtenerListaTareas)
router.route("/tareas/:id").get(obtenerTarea).delete(borrarTarea)

export default router;