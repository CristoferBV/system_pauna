import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllActivos(req, res);
        case "POST":
            return await AddAllActivos(req, res);
    }
}

const getAllActivos = async (req, res) => {
    const [result] = await pool.query("SELECT t.TP_nombre, t.TP_cantidad, a.AO_descripcion, a.AO_estado, p.EA_nombre FROM`pau_btc_tbl_listaprestamo` lp INNER JOIN `pau_btc_tbl_activo` a ON lp.LP_identificador = a.AO_identificador INNER JOIN `pau_btc_tbl_tipo` t ON a.AO_identificador_tipo = t.TP_identificador INNER JOIN `pau_btc_tbl_listaprestamo_x_tbl_periferico`lpxp ON lp.LP_identificador = lpxp.LP_identificador INNER JOIN `pau_btc_tbl_periferico` p ON lpxp.EA_identificador = p.EA_identificador");
    console.log(result)
    return res.status(200).json(result);
};

const saveData = async (table, data, res) => {
    try {
        console.log(data);
        const result = await pool.query(`INSERT INTO ${table} SET ?`, data);
        console.log(result);
        return res.status(200).json({ result }); // Devuelve un objeto con la propiedad "result"
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al guardar los datos.' });
    }
};



const AddAllActivos = async (req, res) => {
    const disableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 0";
    await pool.query(disableForeignKeyCheckQuery);
    console.log(req.body);
    const { TP_nombre, TP_cantidad, EA_nombre, AO_descripcion, AO_estado } = req.body;
    const data = { TP_nombre, TP_cantidad, EA_nombre, AO_descripcion, AO_estado }
    const { result } = saveData('pau_btc_tbl_listaprestamo', data, res);
    console.log(result)
    const enableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 1";
    await pool.query(enableForeignKeyCheckQuery);
};


