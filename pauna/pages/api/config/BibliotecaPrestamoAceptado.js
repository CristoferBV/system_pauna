import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllPrestamoAceptado(req, res);
    }
}

const getAllPrestamoAceptado = async (req, res) => {
    // solo muestra los datos de estudiantes con prestamos(que tengan un dispositivo asociado)
    const [result] = await pool.query("SELECT u.UO_primer_nombre, u.UO_identificador, e.EE_nivel, t.TP_nombre AS TP_nombre, a.AO_identificador AS AO_identificador, e.EE_campus, ce.CE_correoElectronico, te.TO_numero FROM `pau_btc_tbl_estudiante` e INNER JOIN `pau_gnl_usuario` u ON e.EE_identificador_usuario = u.UO_identificador LEFT JOIN `pau_btc_tbl_listaprestamo` lp ON e.EE_idenficador = lp.LP_identificador_usuario LEFT JOIN `pau_btc_tbl_activo` a ON lp.LP_identificador_activo = a.AO_identificador LEFT JOIN `pau_gnl_tbl_telefono` te ON e.EE_identifacador_telefono = te.TO_idenficador LEFT JOIN `pau_gnl_tbl_departamento` d ON te.TO_idenficador = d.DO_identificador LEFT JOIN `pau_gnl_tbl_correoelectronico` ce ON e.EE_identificador_correo = ce.CE_idCorreo LEFT JOIN `pau_btc_tbl_tipo` t ON a.AO_identificador_tipo = t.TP_identificador WHERE lp.LP_identificador_activo IS NOT NULL");
    console.log(result)
    return res.status(200).json(result);
};