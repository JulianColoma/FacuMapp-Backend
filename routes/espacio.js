import { Router } from "express"
import { EspacioController, CategoriaController } from "../controllers/espacio"

export const espacioRouter = Router()

// CRUD espacios
espacioRouter.get('/espacio', EspacioController.getAll())
espacioRouter.get('/espacio/:id', EspacioController.getById())
espacioRouter.post('/espacio', EspacioController.postEspacio())
espacioRouter.put('/espacio/:id', EspacioController.updateEspacio())
espacioRouter.delete('/espacio/:id', EspacioController.deleteEspacio())

//CRUD categorias
categoriaRouter.get('/categoria', CategoriaController.getAll())
categoriaRouter.get('/categoria/:id', CategoriaController.getById())
categoriaRouter.post('/categoria', CategoriaController.postCategoria())
categoriaRouter.put('/categoria/:id', CategoriaController.updateCategoria())
categoriaRouter.delete('/categoria/:id', CategoriaController.deleteCategoria())
