import { pool } from "../../../utils/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllReportes(req, res);
    }
}

const getAllReportes = async (req, res) => {
    const [result] = await pool.query("SELECT u.UO_primer_nombre, u.UO_identificador, t.TP_nombre , p.EA_nombre, lp.LP_fechaDevolucion FROM pau_btc_tbl_estudiante e INNER JOIN pau_gnl_usuario u ON e.EE_identificador_usuario = u.UO_identificador LEFT JOIN pau_btc_tbl_listaprestamo lp ON e.EE_idenficador = lp.LP_identificador_usuario LEFT JOIN pau_btc_tbl_listaprestamo_x_tbl_periferico lpxp ON lp.LP_identificador = lpxp.LP_identificador LEFT JOIN pau_btc_tbl_periferico p ON lpxp.EA_identificador = p.EA_identificador LEFT JOIN pau_btc_tbl_activo a ON lp.LP_identificador_activo = a.AO_identificador LEFT JOIN pau_gnl_tbl_telefono te ON e.EE_identifacador_telefono = te.TO_idenficador LEFT JOIN pau_gnl_tbl_departamento d ON te.TO_idenficador = d.DO_identificador LEFT JOIN pau_gnl_tbl_correoelectronico ce ON u.UO_identificador_correo = ce.CE_idCorreo LEFT JOIN pau_btc_tbl_tipo t ON a.AO_identificador_tipo = t.TP_identificador WHERE lp.LP_identificador_activo IS NOT NULL");
    console.log(result)
    return res.status(200).json(result);
};
