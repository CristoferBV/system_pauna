import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllReportes(req, res);
    }
}

const getAllReportes = async (req, res) => {
    const [result] = await pool.query("SELECT u.UO_primer_nombre, u.UO_identificador, t.TP_nombre, p.EA_nombre, c.CA_nombre, h.HO_fecha, lp.LP_fechaDevolucion, ce.`CE-correoElectronico` FROM `pau_btc_tbl_estudiante` e INNER JOIN `pau_btc_tbl_listaprestamo` lp ON e.EE_idenficador = lp.LP_identificador INNER JOIN `pau_btc_tbl_activo` a ON lp.LP_identificador = a.AO_identificador INNER JOIN `pau_btc_tbl_tipo` t ON a.AO_identificador = t.TP_identificador INNER JOIN `pau_btc_tbl_listaprestamo_x_tbl_periferico`lpxp ON lp.LP_identificador = lpxp.LP_identificador INNER JOIN `pau_btc_tbl_periferico` p ON lpxp.EA_identificador = p.EA_identificador INNER JOIN `pau_btc_tbl_carrera` c ON e.EE_idenficador_carrera = c.CA_identificador INNER JOIN `pau_gnl_usuario` u ON e.EE_identificador_usuario = u.UO_identificador INNER JOIN `pau_gnl_tbl_correoelectronico` ce ON e.EE_identificador_correo = ce.`CE-idCorreo` INNER JOIN `pau_btc_tbl_solicitud` s ON e.EE_idenficador = s.SD_identificador INNER JOIN `pau_btc_tbl_horario` h ON s.SD_identificador_horario = h.HO_identificador");
    console.log(result)
    return res.status(200).json(result);
};
