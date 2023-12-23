import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllActivos(req, res);
        case "POST":
            const type = req.body.tipo
            switch (type) {
                case "Activo":
                    await saveActivo(req, res);
                    break;
                case "Tipo":
                    await saveType(req, res);
                    break;
            }
            break;
        case "PUT":
            return await updateActivos(req, res);

        case "DELETE":
            return deleteActivos(req, res);
    }
}

const updateActivos = async (req, res) => {
    try {
        const {AO_identificador, AO_descripcion, AO_estado} = req.body;
        const data = {AO_descripcion, AO_estado};
        // Realizar la actualización en la base de datos
        const result = await pool.query("UPDATE `pau_btc_tbl_activo` SET ? WHERE AO_identificador = ?", [data, AO_identificador]);
        // Enviar una única respuesta al cliente
        return res.status(200).json(result);
    } catch (error) {
        // Manejar errores y enviar una respuesta de error al cliente
        return res.status(500).json({ error: 'Error en la actualización de activos.' });
    }
};

const deleteActivos = async(req, res)=>{
    const AO_identificador = req.body.AO_identificador;
    const disableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 0";
    await pool.query(disableForeignKeyCheckQuery);
    const deleteActivo = "DELETE FROM `pau_btc_tbl_activo` WHERE AO_identificador = ?";
    const result = await pool.query(deleteActivo, [AO_identificador]);
    const enableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 1";
    await pool.query(enableForeignKeyCheckQuery);
    return res.status(200).json({ Dispositivos: result});
}

const getAllActivos = async (req, res) => {
    const [result] = await pool.query("SELECT a.AO_identificador, t.TP_nombre, a.AO_descripcion, a.AO_estado FROM `pau_btc_tbl_tipo` t INNER JOIN `pau_btc_tbl_activo` a ON a.AO_identificador_tipo = t.TP_identificador");
    const [typeResult] = await pool.query("SELECT TP_identificador, TP_nombre FROM pau_btc_tbl_tipo");
    console.log("Resultados de dispositivos:", result);
    console.log("Resultados de tipos:", typeResult);
    return res.status(200).json({ Dispositivos: result, types: typeResult });
};

const saveData = async (table, data, res) => {
    try {
        console.log(data);
        const result = await pool.query(`INSERT INTO ${table} SET ?`, data);
        console.log(result);
        return [result];  // Devuelve un array con el resultado
    } catch (error) {
        console.log(error);
        return [null, error];  // Devuelve un array con el error
    }
};

const saveActivo = async (req, res) => {
    console.log(req.body);

    // Desactiva las claves foráneas antes de realizar la inserción
    const disableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 0";
    await pool.query(disableForeignKeyCheckQuery);
    const { AO_descripcion, AO_estado, AO_identificador_tipo } = req.body;
    const data = { AO_descripcion, AO_estado, AO_identificador_tipo };
    try {
        // Utiliza destructuración en el resultado para obtener la información necesaria
        const [result] = await saveData('pau_btc_tbl_activo', data, res);
        console.log(result);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al guardar los datos.' });
    } finally {
        // Habilita las claves foráneas después de realizar la inserción
        const enableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 1";
        await pool.query(enableForeignKeyCheckQuery);
    }
};

const saveType = async (req, res) => {
    console.log(req.body);
    const { TP_identificador, TP_nombre, TP_descripcion } = req.body;
    const data = { TP_identificador, TP_nombre, TP_descripcion }
    console.log(data)
    try {
        const result = await saveData('pau_btc_tbl_tipo', data, res);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: 'Error al guardar los datos.' });
    }
}
