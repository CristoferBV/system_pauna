import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllHorario(req, res);
    }
}

const getAllHorario = async (req, res) => {
    const [result] = await pool.query("SELECT h.HO_fecha, h.HO_hora, h.HO_estado FROM `pau-btc-tbl_horario` h");
    console.log(result)
    return res.status(200).json(result);
};
