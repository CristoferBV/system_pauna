import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllActivos(req, res);
        case "POST":
            const type = req.body.tipo
            switch (type) {
                case "Tipo":
                    return await saveType(req, res);
                case "Activo":
                        await saveActivo(req, res);
                        break
            }
    }
}

const getAllActivos = async (req, res) => {
    const [result] = await pool.query("SELECT a.AO_identificador, t.TP_nombre, a.AO_descripcion, a.AO_estado FROM `pau_btc_tbl_tipo` t INNER JOIN `pau_btc_tbl_activo` a ON a.AO_identificador_tipo = t.TP_identificador");
    const [typeResult] = await pool.query("SELECT TP_identificador, TP_nombre FROM pau_btc_tbl_tipo");
    console.log(result)
    console.log(typeResult)
    return res.status(200).json({ Dispositivos: result, types: typeResult });

};

const saveData = async (table, data, res) => {
    try {
        console.log(data);
        const result = await pool.query(`INSERT INTO ${table} SET ?`, data);
        console.log(result);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al guardar los datos.' });
    }
};

const saveActivo = async (req, res) => {
    console.log(req.body);
    const disableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 0";
    await pool.query(disableForeignKeyCheckQuery);

    const { AO_descripcion, AO_estado, AO_identificador_tipo } = req.body;
    const data = { AO_descripcion, AO_estado, AO_identificador_tipo }
    console.log(data)
    const { result } = saveData('pau_btc_tbl_activo', data, res);

    const enableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 1";
    await pool.query(enableForeignKeyCheckQuery);
    return result;
};

const saveType = async (req, res) => {
    console.log(req.body);
    const { tipo, TP_nombre, TP_descripcion } = req.body;
    const data = { TP_nombre, TP_descripcion }

    return saveData('pau_btc_tbl_tipo', data, res);
}