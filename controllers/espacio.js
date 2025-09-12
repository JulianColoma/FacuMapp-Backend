import {EspacioSchema} from "../schemas/espacio.js"
import { CategoriaSchema } from "../schemas/espacio.js"
import {EspacioModel, CategoriaModel} from "../models/espacio.js"
export class EspacioController {
    static getAll = async (req, res) => {
        try{
        const espacios = await EspacioModel.getAll()
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
        const espacios = await EspacioModel.getById(id)
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
            await EspacioModel.postEspacio(validated_input)
            res.status(201).json({"ok": true}).end(); 
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
    static deleteEspacio = async (req, res) => {
        try{
        const { id } = req.params
        await EspacioModel.deleteById(id)
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
        await EspacioModel.updateEspacio(id, validated_input)
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
        const categorias = await CategoriaModel.getAll()
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
        const categoria = await CategoriaModel.getById(id)
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
            await CategoriaModel.postCategoria(validated_input)
            res.status(201).json({"ok": true}).end(); 
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
    static deleteCategoria = async (req, res) => {
        try{
        const { id } = req.params
        await CategoriaModel.deleteById(id)
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
        await CategoriaModel.updateCategoria(id, validated_input)
        res.status(200).json({"ok": true}).end()
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
}