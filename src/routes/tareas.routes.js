import { Router } from "express";
import { controlPrueba, crearTarea } from "../controllers/tareas.controllers";

const router = Router();
router.route("/prueba").get(controlPrueba)
router.route("/tareas").post(crearTarea)


export default router;