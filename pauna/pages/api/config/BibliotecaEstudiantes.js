import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllEstudiantes(req, res);
    }
}

const getAllEstudiantes = async (req, res) => {
    const [result] = await pool.query("SELECT u.UO_primer_nombre, u.UO_identificador, e.EE_nivel, (SELECT t.TP_nombre FROM `pau_btc_tbl_tipo` t WHERE t.TP_identificador = a.AO_identificador_tipo) AS TP_nombre, lp.LP_identificador_activo AS AO_identificador, e.EE_campus, ce.CE_correoElectronico, te.TO_numero FROM `pau_btc_tbl_estudiante` e INNER JOIN `pau_gnl_usuario` u ON e.EE_identificador_usuario = u.UO_identificador LEFT JOIN `pau_btc_tbl_listaprestamo` lp ON e.EE_idenficador = lp.LP_identificador LEFT JOIN `pau_btc_tbl_activo` a ON lp.LP_identificador_activo = a.AO_identificador LEFT JOIN `pau_gnl_tbl_telefono` te ON e.EE_identifacador_telefono = te.TO_idenficador LEFT JOIN `pau_gnl_tbl_departamento` d ON te.TO_idenficador = d.DO_identificador LEFT JOIN `pau_gnl_tbl_correoelectronico` ce ON e.EE_identificador_correo = ce.CE_idCorreo");
    console.log(result)
    return res.status(200).json(result);
};