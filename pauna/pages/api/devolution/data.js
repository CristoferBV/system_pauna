import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllData(req, res);
    }
}

const getAllData = async (req, res) => {
    try {
        // Consulta SQL para obtener los datos
        const query = `
        SELECT
          UO.UO_primer_nombre AS PrimerNombreUsuario,
          UO.UO_identificador AS IdentificadorUsuario,
          CA.CA_nombre AS NombreCarrera,
          TP.TP_nombre AS NombreTipo,
          LP.LP_fechaDevolucion AS FechaDevolucion
        FROM
          PAU_GNL_USUARIO UO
          JOIN PAU_BTC_TBL_ESTUDIANTE ES ON UO.UO_identificador = ES.EE_identificador_usuario
          JOIN PAU_BTC_TBL_CARRERA CA ON ES.EE_idenficador_carrera = CA.CA_identificador
          JOIN PAU_BTC_TBL_LISTAPRESTAMO LP ON ES.EE_idenficador = LP.LP_identificador_usuario
          JOIN PAU_BTC_TBL_TIPO TP ON LP.LP_identificador_activo = TP.TP_identificador;
        `;
        
        // Ejecuta la consulta
        const [result] = await pool.query(query);
        console.log(result);
        return res.status(200).json(result);
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};
