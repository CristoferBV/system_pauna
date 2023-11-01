import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const identificacion = req.query.identificacion; // Obtener la identificación de la solicitud

      // Consulta SQL para obtener los datos del estudiante por identificación
      const query = `
      SELECT UO.UO_primer_nombre AS Nombre,
      UO.UO_primer_apellido AS PrimerApellido,
      UO.UO_segundo_apellido AS SegundoApellido,
      CE.\`CE-correoElectronico\` AS Correo,
      LP.LP_fechaDevolucion AS FechaEntrega

      FROM PAU_GNL_USUARIO UO

        LEFT JOIN PAU_BTC_TBL_ESTUDIANTE EE ON UO.UO_identificador = EE.EE_identificador_usuario
        LEFT JOIN PAU_BTC_TBL_LISTAPRESTAMO LP ON EE.EE_idenficador = LP.LP_identificador_usuario
        LEFT JOIN PAU_GNL_TBL_CORREOELECTRONICO CE ON EE.EE_identificador_correo = CE.\`CE-idCorreo\`

      WHERE UO.UO_identificador IN (
        SELECT EE.EE_identificador_usuario
        FROM PAU_BTC_TBL_ESTUDIANTE EE
        INNER JOIN PAU_BTC_TBL_LISTAPRESTAMO LP ON EE.EE_idenficador = LP.LP_identificador_usuario
        INNER JOIN PAU_GNL_USUARIO UO ON EE.EE_identificador_usuario = ?
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
