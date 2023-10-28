import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllCitas(req, res);
    }
}

const getAllCitas = async (req, res) => {
    const [result] = await pool.query("SELECT h.HO_fecha, h.HO_hora, u.UO_primer_nombre, u.UO_identificador, c.CA_nombre, t.TP_nombre FROM `pau-btc-tbl_estudiante` e INNER JOIN `pau-btc-tbl_carrera` c ON e.EE_idenficador_carrera = c.CA_identificador INNER JOIN `pau-btc-tbl_solicitud` s ON e.EE_idenficador = s.SD_identificador INNER JOIN `pau-btc-tbl_horario` h ON s.SD_identificador_horario = h.HO_identificador INNER JOIN `pau-btc-tbl_tipo` t ON s.SD_identificador_tipo = TP_identificador INNER JOIN `pau-gnl-usuario` u ON e.EE_identificador_usuario = u.UO_identificador");
    console.log(result)
    return res.status(200).json(result);
};

