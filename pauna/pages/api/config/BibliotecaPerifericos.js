import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllPerifericos(req, res);
        case "POST":
            const type = req.body.tipo
            switch (type) {
                case "Periferico":
                    await savePeriferico(req, res);
                    break; 
            }
            break; 
        case "DELETE":
            return deletePerifericos(req, res);
        case "PUT":
            return await updatePeriferico(req, res);
    }

    }

    const deletePerifericos = async (req, res) => {
        const { EA_identificador } = req.query;
        console.log("EA_identificador recibido:", EA_identificador);
    
        try {
            console.log("Before DELETE operation");
            const result = await pool.query(`DELETE FROM pau_btc_tbl_periferico WHERE EA_identificador = ?`, [EA_identificador]);
            console.log("After DELETE operation");
            console.log(result);
    
            // Verificar si ya se ha enviado una respuesta antes de enviar otra
            if (!res.headersSent) {
                res.status(200).json(result);
            }
        } catch (error) {
            console.error("Error during DELETE operation:", error);
    
            // Verificar si ya se ha enviado una respuesta antes de enviar otra
            if (!res.headersSent) {
                res.status(500).json({ error: 'Error al eliminar el periférico.' });
            }
        }
    };
    

    const getAllPerifericos = async (req, res) => {
        const [result] = await pool.query("SELECT  p.EA_identificador, p.EA_nombre, p.EA_descripcion FROM `pau_btc_tbl_periferico` p ");
        console.log(result)
        return res.status(200).json({ Perifericos: result });
    };

    const saveData = async (table, data, res) => {
        try {
            console.log(data);
            const result = await pool.query(`INSERT INTO ${table} SET ?`, data);
            console.log(result);
            return result;  // Solo retorna el resultado
        } catch (error) {
            console.log(error);
            throw new Error('Error al guardar los datos.');  // Lanza un error en caso de fallo
        }
    };
    

    const savePeriferico = async (req, res) => {
        console.log(req.body);
        const { EA_identificador, EA_nombre, EA_descripcion } = req.body;
        const data = { EA_identificador, EA_nombre, EA_descripcion };
        console.log(data);
    
        try {
            const result = await saveData('pau_btc_tbl_periferico', data, res);
            res.status(200).json(result);  // Envía la respuesta solo si saveData tiene éxito
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Error al guardar el periférico.' });  // Envía una respuesta de error en caso de fallo
        }
    };

    const updatePeriferico = async (req, res) => {
        console.log("Ejecutando la función updatePeriferico...");
        try {
            const { EA_identificador, EA_nombre, EA_descripcion } = req.body;
            console.log("Datos API",req.body);
            console.log("EA_identificador recibido:", EA_identificador);
            const data = {EA_identificador, EA_nombre, EA_descripcion }; // Quitamos el EA_identificador de los datos a actualizar
            const result = await pool.query("UPDATE `pau_btc_tbl_periferico` SET ? WHERE EA_identificador = ?", [data, EA_identificador]);
            return res.status(200).json(result);
        } catch (error) {
            console.error("Error en la actualización de activos:", error);
            return res.status(500).json({ error: 'Error en la actualización de activos.' });
        }
    };
    
    
