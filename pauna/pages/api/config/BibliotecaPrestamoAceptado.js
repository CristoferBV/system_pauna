import { pool } from "../../../utils/Storage";

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
    const [result] = await pool.query("SELECT u.UO_primer_nombre AS Nombre, u.UO_identificador AS Cedula, e.EE_nivel, t.TP_nombre AS TP_nombre, p.EA_nombre AS EA_nombre, a.AO_identificador AS AO_identificador, e.EE_campus, ce.CE_correoElectronico AS CorreoElectronico, te.TO_numero AS NumeroTelefono, lp.LP_fechaDevolucion FROM pau_btc_tbl_estudiante e INNER JOIN pau_gnl_usuario u ON e.EE_identificador_usuario = u.UO_identificador LEFT JOIN pau_btc_tbl_listaprestamo lp ON e.EE_idenficador = lp.LP_identificador_usuario LEFT JOIN pau_btc_tbl_listaprestamo_x_tbl_periferico lpxp ON lp.LP_identificador = lpxp.LP_identificador LEFT JOIN pau_btc_tbl_periferico p ON lpxp.EA_identificador = p.EA_identificador LEFT JOIN pau_btc_tbl_activo a ON lp.LP_identificador_activo = a.AO_identificador LEFT JOIN pau_gnl_tbl_telefono te ON e.EE_identifacador_telefono = te.TO_idenficador LEFT JOIN pau_gnl_tbl_departamento d ON te.TO_idenficador = d.DO_identificador LEFT JOIN pau_gnl_tbl_correoelectronico ce ON u.UO_identificador_correo = ce.CE_idCorreo LEFT JOIN pau_btc_tbl_tipo t ON a.AO_identificador_tipo = t.TP_identificador WHERE lp.LP_identificador_activo IS NOT NULL");
    console.log(result)
    return res.status(200).json(result);
};

const deletePrestamoAceptado = async (req, res) => {
  try {
    const { LP_identificador } = req.body; // Obtener solo el identificador del préstamo desde el cuerpo de la solicitud
    console.log("ID del préstamo a eliminar:", LP_identificador); // Registro de consola para verificar el ID del préstamo recibido

    // Eliminar los registros de la tabla pau_btc_tbl_listaprestamo_x_tbl_periferico
    const deletePerifericosQuery = "DELETE FROM `pau_btc_tbl_listaprestamo_x_tbl_periferico` WHERE LP_identificador = ?";
    await pool.query(deletePerifericosQuery, [LP_identificador]);
    console.log("Registros de periféricos eliminados correctamente."); // Registro de consola para confirmar la eliminación de registros de periféricos

    // Eliminar el registro de la tabla pau_btc_tbl_listaprestamo
    const deletePrestamoQuery = "DELETE FROM `pau_btc_tbl_listaprestamo` WHERE LP_identificador = ?";
    await pool.query(deletePrestamoQuery, [LP_identificador]);
    console.log("Préstamo eliminado correctamente."); // Registro de consola para confirmar la eliminación del préstamo

    return res.status(200).json({ message: "Préstamo eliminado correctamente." });
  } catch (error) {
    console.error("Hubo un error al eliminar el préstamo:", error);
    return res.status(500).json({ error: "Hubo un error al eliminar el préstamo." });
  }
};

  
