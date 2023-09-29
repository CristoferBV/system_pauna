import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllActive(req, res);
    }
}

const getAllActive = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM `pau-btc-tbl_activo` a INNER INNER JOIN `pau-btc-tbl_tipo` t ON a.TP_identificador = t.TP_identificador");
    console.log(result)
    return res.status(200).json(result);
};


