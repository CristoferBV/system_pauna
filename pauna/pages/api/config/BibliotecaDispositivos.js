import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllActivos(req, res);
    }
}

const getAllActivos = async (req, res) => {
    const [result] = await pool.query("SELECT t.TP_nombre, a.AO_descripcion, a.AO_estado, p.EA_nombre FROM`pau-btc-tbl_listaprestamo` lp INNER JOIN `pau-btc-tbl_activo` a ON lp.LP_identificador = a.AO_identificador INNER JOIN `pau-btc-tbl_tipo` t ON a.AO_identificador_tipo = t.TP_identificador INNER JOIN `pau-btc-tbl_listaprestamo-x-tbl_periferico`lpxp ON lp.LP_identificador = lpxp.LP_identificador INNER JOIN `pau-btc-tbl_periferico` p ON lpxp.EA_identificador = p.EA_identificador");
    console.log(result)
    return res.status(200).json(result);
};
