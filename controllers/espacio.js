import {EspacioSchema} from "../schemas/espacio.js"
import { CategoriaSchema } from "../schemas/espacio.js"

export class espaciosController {
    static getAll = async (req, res) => {
        try{
        const espacios = await //aca va el modelo
        res.json(espacios)
        res.status(200).end()
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
    
    static getById = async (req, res) => {
        try{
        const { id } = req.params
        const espacios = await //aca va el modelo
        res.json(espacios)
        res.status(200).end()
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
    static postEspacio = async (req, res) => {
        try {
            const validated_input = EspacioSchema.parse(req.body);
            await //aca va el modelo
            res.status(201).json({"ok": true}).end(); 
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
    static deleteEspacio = async (req, res) => {
        try{
        const { id } = req.params
        await //aca va el modelo
        res.status(200).json({"ok": true}).end()
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
    static updateEspacio = async (req, res) => {
        try{
        const { id } = req.params
        const validated_input = EspacioSchema.parse(req.body);
        await //aca va el modelo
        res.status(200).json({"ok": true}).end()
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
}
export class CategoriaController {
    static getAll = async (req, res) => {
        try{
        const categorias = await //aca va el modelo
        res.json(categorias)
        res.status(200).end()
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
    
    static getById = async (req, res) => {
        try{
        const { id } = req.params
        const categoria = await //aca va el modelo
        res.json(categoria)
        res.status(200).end()
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
    static postCategoria = async (req, res) => {
        try {
            const validated_input = CategoriaSchema.parse(req.body);
            await //aca va el modelo
            res.status(201).json({"ok": true}).end(); 
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
    static deleteCategoria = async (req, res) => {
        try{
        const { id } = req.params
        await //aca va el modelo
        res.status(200).json({"ok": true}).end()
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
    static updateCategoria = async (req, res) => {
        try{
        const { id } = req.params
        const validated_input = CategoriaSchema.parse(req.body);
        await //aca va el modelo
        res.status(200).json({"ok": true}).end()
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
}