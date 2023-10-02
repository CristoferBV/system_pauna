import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllEstudiantes(req, res);
    }
}

const getAllEstudiantes = async (req, res) => {
    const [result] = await pool.query("SELECT u.UO_primer_nombre, u.UO_identificador, e.EE_nivel, t.TP_nombre, t.TP_identificador, a.AO_descripcion, d.DO_nombre, e.EE_campus, h.HO_fecha, lp.LP_fechaDevolucion, r.RE_observacion, ce.CE_correoElectronico, te.TO_numero FROM `pau-btc-tbl_estudiante` e INNER JOIN `pau-gnl-usuario` u ON e.EE_identificador_usuario = u.UO_identificador INNER JOIN `pau-btc-tbl_listaprestamo` lp ON e.EE_idenficador = lp.LP_identificador INNER JOIN `pau-btc-tbl_reporte` r ON lp.LP_identificador = r.RE_identificador_prestamo INNER JOIN `pau-btc-tbl_activo` a ON lp.LP_identificador = a.AO_identificador INNER JOIN `pau-btc-tbl_tipo` t ON a.AO_identificador = t.TP_identificador INNER JOIN `pau-gnl-tbl_telefono` te ON e.EE_identifacador_telefono = te.`TO-idenficador` INNER JOIN `pau-gnl-tbl_departamento` d ON te.`TO-idenficador` = d.`DO-identificador` INNER JOIN `pau-btc-tbl_solicitud` s ON e.EE_idenficador = s.SD_identificador INNER JOIN `pau-btc-tbl_horario` h ON s.SD_identificador_horario = h.HO_identificador INNER JOIN `pau-gnl-tbl_correoelectronico` ce ON e.EE_identificador_correo = ce.`CE-idCorreo`");
    console.log(result)
    return res.status(200).json(result);
};