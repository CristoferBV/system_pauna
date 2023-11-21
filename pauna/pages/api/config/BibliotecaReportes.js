import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllReportes(req, res);
    }
}

const getAllReportes = async (req, res) => {
    const [result] = await pool.query("SELECT  u.UO_primer_nombre, u.UO_identificador, t.TP_nombre, lp.LP_fechaDevolucion, r.RE_observacion FROM `pau_btc_tbl_reporte` r INNER JOIN `pau_btc_tbl_listaprestamo` lp ON lp.LP_identificador = r.RE_identificador_prestamo INNER JOIN `pau_btc_tbl_estudiante` e ON e.EE_idenficador = lp.LP_identificador INNER JOIN `pau_gnl_usuario` u ON u.UO_identificador = e.EE_identificador_usuario INNER JOIN `pau_btc_tbl_activo` a ON a.AO_identificador = lp.LP_identificador_activo INNER JOIN `pau_btc_tbl_tipo` t ON t.TP_identificador = a.AO_identificador_tipo");
    console.log(result)
    return res.status(200).json(result);
};
