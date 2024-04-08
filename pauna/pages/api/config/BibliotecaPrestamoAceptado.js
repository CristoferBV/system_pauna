import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllPrestamoAceptado(req, res);
        case "DELETE":
            return await deletePrestamoAceptado(req, res);
    }
}

const getAllPrestamoAceptado = async (req, res) => {
    // solo muestra los datos de estudiantes con prestamos(que tengan un dispositivo asociado)
    const [result] = await pool.query("SELECT u.UO_primer_nombre AS Nombre, u.UO_identificador AS Cedula, e.EE_nivel, t.TP_nombre AS TP_nombre, p.EA_nombre AS EA_nombre, a.AO_identificador AS AO_identificador, e.EE_campus, ce.CE_correoElectronico AS CorreoElectronico, te.TO_numero AS NumeroTelefono, lp.LP_fechaDevolucion FROM pau_btc_tbl_estudiante e INNER JOIN pau_gnl_usuario u ON e.EE_identificador_usuario = u.UO_identificador LEFT JOIN pau_btc_tbl_listaprestamo lp ON e.EE_idenficador = lp.LP_identificador_usuario LEFT JOIN pau_btc_tbl_listaprestamo_x_tbl_periferico lpxp ON lp.LP_identificador = lpxp.LP_identificador LEFT JOIN pau_btc_tbl_periferico p ON lpxp.EA_identificador = p.EA_identificador LEFT JOIN pau_btc_tbl_activo a ON lp.LP_identificador_activo = a.AO_identificador LEFT JOIN pau_gnl_tbl_telefono te ON e.EE_identifacador_telefono = te.TO_idenficador LEFT JOIN pau_gnl_tbl_departamento d ON te.TO_idenficador = d.DO_identificador LEFT JOIN pau_gnl_tbl_correoelectronico ce ON e.EE_identificador_correo = ce.CE_idCorreo LEFT JOIN pau_btc_tbl_tipo t ON a.AO_identificador_tipo = t.TP_identificador WHERE lp.LP_identificador_activo IS NOT NULL");
    console.log(result)
    return res.status(200).json(result);
};

const deletePrestamoAceptado = async (req, res) => {
    const { LP_identificador } = req.query;
    console.log("LP_identificador recibido:", LP_identificador);

    try {
        console.log("Before DELETE operation");
        const result = await pool.query(`DELETE FROM pau_btc_tbl_listaprestamo WHERE LP_identificador = ?`, [LP_identificador]);
        console.log("After DELETE operation");
        console.log(result);

        // Verificar si ya se ha enviado una respuesta antes de enviar otra
        if (!res.headersSent) {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error("Error during DELETE operation:", error);

        // Verificar si ya se ha enviado una respuesta antes de enviar otra
        if (!res.headersSent) {
            res.status(500).json({ error: 'Error al eliminar el préstamo.' });
        }
    }
};



