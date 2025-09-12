import {EventoSchema} from "../schemas/evento.js"

export class EventoController {
    static getAll = async (req, res) => {
        try{
        const eventos = await //aca va el modelo
        res.json(eventos)
        res.status(200).end()
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
    
    static getById = async (req, res) => {
        try{
        const { id } = req.params
        const evento = await //aca va el modelo
        res.json(evento)
        res.status(200).end()
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
    static postEvento = async (req, res) => {
        try {
            const validated_input = EventoSchema.parse(req.body);
            await //aca va el modelo
            res.status(201).json({"ok": true}).end(); 
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
    static deleteEvento = async (req, res) => {
        try{
        const { id } = req.params
        await //aca va el modelo
        res.status(200).json({"ok": true}).end()
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
    static updateEvento = async (req, res) => {
        try{
        const { id } = req.params
        const validated_input = EventoSchema.parse(req.body);
        await //aca va el modelo
        res.status(200).json({"ok": true}).end()
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
}