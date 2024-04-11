import { pool } from "../../../utils/Storage";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const identificacion = req.query.identificacion; // Obtener la identificación de la solicitud

      // Consulta SQL para obtener los datos del estudiante por identificación
      const query = `
      SELECT UO.UO_primer_nombre AS Nombre,
      UO.UO_primer_apellido AS PrimerApellido,
      UO.UO_segundo_apellido AS SegundoApellido,
      CE.CE_correoElectronico AS Correo,
      LP.LP_fechaDevolucion AS FechaEntrega

      FROM pau_gnl_usuario UO

        LEFT JOIN pau_btc_tbl_estudiante EE ON UO.UO_identificador = EE.EE_identificador_usuario
        LEFT JOIN pau_btc_tbl_listaprestamo LP ON EE.EE_idenficador = LP.LP_identificador_usuario
        LEFT JOIN pau_gnl_tbl_correoelectronico CE ON UO.UO_identificador_correo = CE.CE_idCorreo

      WHERE UO.UO_identificador IN (
        SELECT EE.EE_identificador_usuario
        FROM pau_btc_tbl_estudiante EE
        INNER JOIN pau_btc_tbl_listaprestamo LP ON EE.EE_idenficador = LP.LP_identificador_usuario
        INNER JOIN pau_gnl_usuario UO ON EE.EE_identificador_usuario = ?
      );
      `;

      // Ejecuta la consulta con la identificación proporcionada
      const [result] = await pool.query(query, [identificacion]);

      if (result.length === 0) {
        // Si no se encontraron estudiantes, devuelve un mensaje de error
        return res.status(404).json({ message: "Estudiante no encontrado" });
      }

      return res.status(200).json(result);
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  } else {
    // Manejar otros métodos HTTP, si es necesario
    res.status(405).json({ message: "Método no permitido" });
  }
}
